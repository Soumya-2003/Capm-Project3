using comp.value as com from '../db/schema';

service CompanyService {

    @restrict: [
        { grant: 'READ', to: 'Display' }
    ]
    entity Valuations as projection on com.Company.Valuation;    
}
