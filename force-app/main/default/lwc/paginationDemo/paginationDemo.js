import { LightningElement,wire,api } from 'lwc';
import getcontactdetail from '@salesforce/apex/DataConroller.getcontactdetail';

export default class PaginationDemo extends LightningElement {
totalcontact
visiblecontact
@wire(getcontactdetail)
wirecontact({error,data})
{

if(data)
{
this.totalcontact=data;
    console.log('Contact record',this.totalcontact)
}
if(error)
{

    cosnole.error(error);
}

}
updatecontacthanlder(event)
{this.visiblecontact=[...event.detail.records];
console.log('pagination demo page',event.detail.records);
console.log('pagination demo page1',...event.detail.records);
   
}

}