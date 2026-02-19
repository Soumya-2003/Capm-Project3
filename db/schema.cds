namespace comp.value;

context Company{
    entity Valuation{
        key companyId : UUID;
        companyName : String (50);
        numberOfClients : Int16;
        marketRevenue : Decimal(15,2);

        virtual valuationBand : String;
        virtual canViewRevenue : Boolean;
    }
}
