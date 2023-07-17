import { LightningElement,api } from 'lwc';
import recordinsert from '@salesforce/apex/contactrecord.recordinsert';
export default class Contactinsertrecord extends LightningElement {

@api recordId;
inpurtname;
email;
recordadd;
setlastname=event=>{
    

this.inpurtname = event.target.value;
console.log('inpurtname'+this.inpurtname);
}

setemail=event=>{
    

this.email=event.target.value; 
console.log('email'+this.email);
     }

     onlickj()
     {
        recordinsert({accountid : this.recordId, lastname: this.inpurtname ,email : this.email})
        .then((result)=>{
            console.log('print rtecord'+ JSON.stringify(result));
          this.recordadd=result;

        })
        .catch(() =>{
console.error("error");

        })

     }
    

}