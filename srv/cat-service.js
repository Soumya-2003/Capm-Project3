const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {
    const { Valuations } = this.entities;

    this.after('READ', Valuations, (data, req) => {
        const rows = Array.isArray(data) ? data : [data];

        for (const row of rows) {
            if (row.marketRevenue >= 1_000_000) {
                row.valuationBand = 'HIGH';
            } else if (row.marketRevenue >= 100_000) {
                row.valuationBand = 'MEDIUM';
            } else {
                row.valuationBand = 'LOW';
            }

            row.canViewRevenue = req.user.is('Display');
        }
    });
});
