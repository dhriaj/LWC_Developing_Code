import { LightningElement } from 'lwc';

export default class ChildCall extends LightningElement {


    hanelsubtract()

    {
this.dispatchEvent(new CustomEvent('subtract'));

    }

    haneladd()

    {

this.dispatchEvent(new CustomEvent('add'));
    }
}