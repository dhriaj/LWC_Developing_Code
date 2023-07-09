import { LightningElement,api } from 'lwc';

export default class Pagination extends LightningElement {
Curentpage=1
    totalrecords
    totalpage
pagesize=5
    @api 
    get records()
    {
        return this.visiblerecord
    }
set records(data)
{
if(data)
{

this.totalrecords=data;

this.totalpage=Math.ceil(data.length/this.pagesize)
console.log('Page size',data.length)
console.log('Data',data)
this.Updaterecord();
}

}
get disbalepre()
{

return this.Curentpage<=1
}
get dispablenext()
{
return this.Curentpage>=this.totalpage
}

Previoushandler()
    {

if(this.Curentpage>1)
{
this.Curentpage = this.Curentpage -1
this.Updaterecord()

}
    }
nexthandler()
{
if(this.Curentpage <this.totalpage)
{
    this.Curentpage++
    this.Updaterecord()
}


}

Updaterecord()
{
const start = (this.Curentpage -1) * this.pagesize
const end = this.pagesize * this.Curentpage
this.visiblerecord=this.totalrecords.slice(start, end);
this.dispatchEvent(new CustomEvent('update',{detail :{
    records:this.visiblerecord
}}))
}
}