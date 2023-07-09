import { LightningElement, api } from 'lwc';

export default class DynamicRecord extends LightningElement {

    @api recordId;
    @api objectname;
}