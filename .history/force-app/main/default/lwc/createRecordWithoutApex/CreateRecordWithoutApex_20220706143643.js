import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Account_OBJECT from '@salesforce/schema/Account';
import Name_FIELD from '@salesforce/schema/Account.Name';
export default class CreateRecordWithoutApex extends LightningElement {

    accountid;
    name='';
    handelchange(event)
    {

        this.name=event.target.value;
        
    }


    handelclick()
    {
const fields ={};
fields[Name_FIELD.fieldApiName]=this.name;
console.log('Fileds----------->' + JSON.stringify(fields));
const recordinput={apiName :Account_OBJECT.objectApiName,fields};

createRecord(recordinput)
.then(account1=>{

    this.accountid=account1.id;

    });
    
    }
}