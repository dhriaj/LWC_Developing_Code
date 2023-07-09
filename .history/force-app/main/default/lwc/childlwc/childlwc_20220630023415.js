import { LightningElement } from 'lwc';

export default class ChildLwc extends LightningElement {

    handelsubtract()
    {

this.dispatchEvent(new CustomEvent('subtract'));

    }

    handelAdd()
    {
this.dispatchEvent(new CustomEvent('add')); 

    }

}