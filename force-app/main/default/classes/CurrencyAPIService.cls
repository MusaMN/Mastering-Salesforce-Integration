public with sharing class CurrencyAPIService {
    public static void getExchangeRates(){
        HttpRequest httpReq = new HttpRequest();
        httpReq.setEndpoint('https://open.er-api.com/v6/latest/USD');
        httpReq.setHeader('Content-Type', 'application/json');
        httpReq.setHeader('Accept', 'application/json');
        httpReq.setMethod('GET');    
        Http http = new Http();
        HttpResponse httpResp = http.send(httpReq);

        System.debug('Currency API Response - ' + httpResp); // Prints status and status code
        System.debug('Currency API Response Body - ' + httpResp.getBody()); 
    }
}

/**
 * Steps to create a custom REST API in Salesforce:
 */