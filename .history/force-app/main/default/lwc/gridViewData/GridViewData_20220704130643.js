import { LightningElement , track } from 'lwc';
import getcontactdetails from '@salesforce/apex/Datagrid.getcontactdetails';

export default class GridViewData extends LightningElement {

    @track gridcolumn = [
{
type : 'text',
fieldName :'Name',
label : 'Name'
},

{
    type : 'text',
    fieldName :'FirstName',
    label : 'FirstName'
    },

    {
        type : 'text',
        fieldName :'LastName',
        label : 'LastName'
        },
        

    ];

    @track datagrid;

connectedCallback()
{
    getcontactdetails()
    .then(result=>{

console.log("Print the result" +JSON.stringify(result));




 })

 .catch(error=>{

console.log(JSON.stringify(error));

 })
}

}