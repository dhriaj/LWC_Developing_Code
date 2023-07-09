import { LightningElement } from 'lwc';

export default class ParentCall extends LightningElement {

    countvalue;

    handelsubtract()
    {
this.countvalue--;

    }

    handeladd()

    {

        this.countvalue++;
    }

}