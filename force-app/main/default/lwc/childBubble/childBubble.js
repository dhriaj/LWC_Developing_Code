import { LightningElement, track } from 'lwc';

export default class ChildBubble extends LightningElement {

    @track assignrecord;
    @track txtboxvalue='';

    eventchnage(event)
    {
this.assignrecord = event.target.value;

    }

    handleclick()
    {
const txtboxvalue=this.assignrecord;
const inputtext = new CustomEvent('Inputtext',{
bubbles :true,
composed : false,
details : txtboxvalue
});
this.dispatchEvent(inputtext);
    }


}