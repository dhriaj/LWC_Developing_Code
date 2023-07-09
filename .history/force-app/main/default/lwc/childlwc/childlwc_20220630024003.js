import { LightningElement } from 'lwc';

export default class ChildLwc extends LightningElement {

    handelsubtract()

    {
this.dispatchEvent(new CustomEvent('subttract'));

    }

    handeladd()

    {
this.dispatchEvent(new CustomEvent('add'));

    }

}