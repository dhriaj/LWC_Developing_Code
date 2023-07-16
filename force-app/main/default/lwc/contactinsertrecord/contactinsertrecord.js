import { LightningElement,api , wire} from 'lwc';
import recordinsert from '@salesforce/apex/Contactrecord.recordinsert';
export default class Contactinsertrecord extends LightningElement {

@api recordId;
@api inpurtname
@api email;

@wire(recordinsert ,({accountid : `$recordId` , lastname :this.inpurtname , email:this.email}))
wiraccount({data,error})
{

 if(data)
    {
 
        this.recordadd=data;
    }
else if(error)
{

    console.log("Error");
}

}

setlastname=(event)=>{
    
// eslint-disable-next-line @lwc/lwc/no-api-reassignments
this.inpurtname = event.target.values;

}

setemail=(event)=>{
    
// eslint-disable-next-line @lwc/lwc/no-api-reassignments
this.email=event.target.value;
     }
    

}