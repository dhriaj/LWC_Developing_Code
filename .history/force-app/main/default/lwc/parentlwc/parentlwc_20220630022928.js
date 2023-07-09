import { LightningElement } from 'lwc';

export default class Parentlwc extends LightningElement {


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