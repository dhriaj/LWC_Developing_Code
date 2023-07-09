import { LightningElement, track } from 'lwc';

export default class GrandParantBubble extends LightningElement {

@track valuefromchild;


handleclickevent(event)
{

this.valuefromchild=event.detail;


}

}