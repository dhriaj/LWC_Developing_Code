import { LightningElement } from 'lwc';

export default class ParentCall extends LightningElement {

    countvalue=0;

    handelsubtract()
    {
this.countvalue--;

    }

    handeladd()

    {

        this.countvalue++;
    }

}