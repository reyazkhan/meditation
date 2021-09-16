import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(public db:DataService) { }
  medic_form:any={};
  addData:any=[];
  type:any='Tablet';

  ngOnInit(): void {
    console.log(this.db.saveResultArray);

  }

  addMedic()
  {
    console.log("Save Click");
    console.log(this.medic_form);
    this.addData.push(this.medic_form);
    console.log(this.addData);
    this.medic_form={};

  }
  removeData(i:any)
  {
    console.log(i);
    this.addData.splice(i, 1);
  }

  saveMedicData()
  {
    console.log(this.addData);
    for (let i = 0; i < this.addData.length; i++) {
      this.addData[i].type = this.type;
    }
    // this.db.saveResultArray.push({'data':this.addData});
    this.db.saveResultArray = this.addData;
    // this.db.saveResultArray.push({'data':this.addData,'type':this.type});
    this.addData=[];
    console.log(this.db.saveResultArray);

  }

}
