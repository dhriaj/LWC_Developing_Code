import { LightningElement, track, api } from 'lwc';
import createAccountRecords from '@salesforce/apex/AccountDataCreateByCSV.createAccountRecords';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone'},
    { label: 'Account Number', fieldName: 'AccountNumber' }
];

export default class CSVFileUploaderLWC extends LightningElement {
    @api recordid;
    @track columns = columns;
    @track data;
    @track fileName = '';
    @track UploadFile = 'Upload CSV File';
    @track showSpinner = false;
    @track isTrue = false;
    selectedRecords;
    filedata;
    filesUploaded = [];
    file;
    lan;
    fileContents;
    fileReader;
    content;
    MAX_FILE_SIZE = 1500000;

    handleFilesChange(event) {
        if (event.target.files.length > 0) {
            this.filesUploaded = event.target.files;
            this.fileName = event.target.files[0].name;
//            this.recorddata(event);
        }
    }


    handleSave() {
        if (this.filesUploaded.length > 0) {
            this.uploadHelper();
        } else {
            this.fileName = 'Please select a CSV file to upload!!';
        }
    }

    uploadHelper() {
        this.file = this.filesUploaded[0];
        if (this.file.size > this.MAX_FILE_SIZE) {
            console.log('File Size is to long');
            return;
        }

        this.showSpinner = true;
        this.fileReader = new FileReader();
        this.fileReader.onloadend = (() => {
            
            //this.lan=this.rs.onloadend.length;
            this.fileContents = this.fileReader.result;
            //console.log("fileContents",fileContents);
            this.saveToFile();
            this.recorddata(this.fileReader);
        });

        this.fileReader.readAsText(this.file);
    }
    recorddata=(event)=>{console.log('eeventrecord',event)}
    saveToFile() {
        createAccountRecords({ base64Data: JSON.stringify(this.fileContents), cdbId: this.recordid })
            .then(result => {
                console.log(result);
                this.data = result;
                this.fileName = this.fileName + ' - Uploaded Successfully';
                this.isTrue = false;
                this.showSpinner = false;
                this.showToast('Success', this.file.name + ' - Uploaded Successfully!!!', 'success', 'dismissable');
            })
            .catch(error => {
                console.log(error);
                this.showToast('Error while uploading File', error.body.message, 'error', 'dismissable');
            });
    }

    showToast(title, message, variant, mode) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(evt);
    }
}