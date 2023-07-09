import { LightningElement, track } from 'lwc';

export default class GrandParantBubble extends LightningElement {

@track valuefromGrandChild='';



handleGrandChildEvent(event)
{

this.valuefromGrandChild=event.detail;


}

}