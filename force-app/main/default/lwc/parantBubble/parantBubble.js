import { LightningElement , track} from 'lwc';

export default class ParantBubble extends LightningElement {

@track valuefromchild=''

handleclickevent(event)
    {

this.valuefromchild=event.detail;
}
}