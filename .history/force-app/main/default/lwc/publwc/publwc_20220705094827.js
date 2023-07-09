import { LightningElement , wire } from 'lwc';
import { publish , MessageContext   } from 'lightning/messageService';
import Counting_Updated from '@salesforce/messageChannel/Counting_Update__c';
export default class Publwc extends LightningElement {

@wire(MessageContext)
MessageContext;

}