public with sharing class Jasonparsertesting {
    @future(callout=true)
    public static void Jasonparsertesting() {        
        Http httpProtocol = new Http();
        
        HttpRequest request = new HttpRequest();
        
        String endpoint = 'https://docsample.herokuapp.com/jsonSample';
        request.setEndPoint(endpoint);
        
        request.setMethod('GET');
      
        HttpResponse response = httpProtocol.send(request);
        System.debug(response.getBody());
       

        
        JSONParser parser = JSON.createParser(response.getBody());
        Double grandTotal = 0.0;
        while (parser.nextToken() != null) {
            if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && 
                (parser.getText() == 'totalPrice')) {
                // Get the value.
                parser.nextToken();
                // Compute the grand total price for all invoices.
                grandTotal += parser.getDoubleValue();
            }
        }
        system.debug('Grand total=' + grandTotal);
    }   
}
