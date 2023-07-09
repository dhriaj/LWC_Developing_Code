import { LightningElement ,wire} from 'lwc';
import getaccount from '@salesforce/apex/Utilclass.getaccount';
import {exportcsv} from 'c/downloadUtil';
export default class DownloadCSVfile extends LightningElement {
@wire(getaccount)
accounthandler({data})
{
if(data)
{comsole.log(data)

}

}

    userdata=[

        {
        Username :"Dheeraj Sharma",
        Class:"MSC",
        Add:"Banglore"
        },
        
        {
            Username :"Manish Sharma",
            Class:"CA",
            Add:"Rohini"
        },
        
        {
                Username :"neeraj Sharma",
                Class:"graphic Designer",
                Add:"Budh Vihar"
        },
        ]

        headers={

            Username :"Username",
            Class:"Class",
            Add:"Add"
        }
        
        Donwloaddetial()
        {

            console.log("Donwload Triggered")
            alert("Donwload Triggered")
            exportcsv(this.headers,this.userdata,"userdetails")
        }
        
        }









