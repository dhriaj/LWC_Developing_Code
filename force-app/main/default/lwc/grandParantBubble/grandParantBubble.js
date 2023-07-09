import { LightningElement, track } from 'lwc';

export default class GrandParantBubble extends LightningElement {

@track valuefromparant='';


handleparant(event)
{

this.valuefromparant=event.detail;


}

}