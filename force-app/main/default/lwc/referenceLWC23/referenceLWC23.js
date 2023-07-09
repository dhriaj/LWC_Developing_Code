import { LightningElement } from 'lwc';

export default class ReferenceLWC23 extends LightningElement {

    handlelclick()

    {
const myname = this.refs.nameref.value
console.log('this. refewnce',myname)
console.log('this. refewnce1',this.refs.nameref)
const getre = this.refs.getvalue
getre.innerHTML=`Hello ${myname}`
console.log('getre',getre)
console.log('getre',getre);

}



}