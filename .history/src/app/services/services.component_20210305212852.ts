import { Component, OnInit } from '@angular/core';
import { BioDatasService } from '../bio-datas.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public datas;
  public showBiodata = [];
  public showjsondata = [];
  public errorMsg;

  constructor(private biodataService: BioDatasService) { }

  ngOnInit() {
    this.datas = this.biodataService.howServiceWorks();
    console.log(this.datas);
    this.showBiodata = this.biodataService.bioData();

    this.biodataService.getbioData()
      .subscribe(data => this.showjsondata = data,
                 error => this.errorMsg = error);
  }

}
