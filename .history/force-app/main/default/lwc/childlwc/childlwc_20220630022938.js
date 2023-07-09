import { LightningElement } from 'lwc';

export default class Childlwc extends LightningElement {

    handelsubtract()
    {

this.dispatchEvent(new CustomEvent('subtract'));

    }

    handelAdd()
    {
this.dispatchEvent(new CustomEvent('add')); 

    }

}