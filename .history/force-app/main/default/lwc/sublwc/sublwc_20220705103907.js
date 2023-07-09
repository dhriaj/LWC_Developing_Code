import { LightningElement, wire } from 'lwc';
import { subscribe , MessageContext   } from 'lightning/messageService';
import Counting_Updated from '@salesforce/messageChannel/Counting_Update__c';

export default class Sublwc extends LightningElement {

    count=0;
    subscription=null;
    @wire(MessageContext)
    messagecontext;
    connectedCallback()

    {

        this.gettheallrecord();
    }

    gettheallrecord()
    {

        this.subscription=subscribe(this.messagecontext,Counting_Updated,(message1)=>
        
        this.handelchange(message1)
        
        );
        handelchange(message1)
        {

            if(message1.operator=='Add')
            {

this.count+=message1.constant;
            }
            elseif(message1.operator=='Sub')
            {

this.count-=message1.constant;
            }
            elseif(message1.operator=='Mul')
            {

this.count*=message1.constant;
            }
        }
    }
}