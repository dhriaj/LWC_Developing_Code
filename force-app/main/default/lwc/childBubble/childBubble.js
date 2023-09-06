import { LightningElement, track } from 'lwc';

export default class ChildBubble extends LightningElement {

    @track assignrecord;
    @track txtboxvalue;

    eventchnage(event)
    {
this.assignrecord = event.target.value;//Test Case/////

    }

    handleclick()
    {
const txtboxvalue=this.assignrecord;
const inputtext = new CustomEvent('inputtext',{
bubbles :true,
composed : true,
detail : txtboxvalue
});
this.dispatchEvent(inputtext);
    }


}