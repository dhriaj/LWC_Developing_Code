import { LightningElement } from 'lwc';
import accountrecord from 'salesforce/apex/Accountdetails.accountrecord'
export default class Getaccountrecord extends LightningElement {

    apirecord;
namerecord;  
onchnage=event=>{

this.namerecord=event.target.value;

}
onclick()
{
    accountrecord({name : this.namerecord})     
    .then(result=>{
        
        this.apirecord= result;
        
         })

}

}