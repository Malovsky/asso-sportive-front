import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GymnasessService } from 'src/app/services/gymnasess.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-gymnase',
  templateUrl: './search-gymnase.component.html',
  styleUrls: ['./search-gymnase.component.css']
})
export class SearchGymnaseComponent implements OnInit {

  public gymnaseSearch;
  findbynomform : FormGroup;
  findbyidform : FormGroup;
  showTable: boolean = false;

  constructor(private gymnaseService: GymnasessService) { }

  ngOnInit() {
    this.findbynomform = new FormGroup({
      gymnaseName: new FormControl('', Validators.required)
    });
    this.findbyidform = new FormGroup({
      gymnaseId: new FormControl('', Validators.required)
    });
  }

  getGymnaseByName() {
    if (this.findbynomform.valid) {
      console.log(this.findbynomform);
      this.gymnaseService.getGymnaseByName(this.findbynomform.value.gymnaseName).subscribe(
        data => {
          this.gymnaseSearch = data;
          console.log('getGymnaseByName',data);
          this.findbynomform.reset();
          return true;
        },
        error => {
          console.error(error);
        }
      )
    }
  }

  getGymnaseById() {
    if (this.findbyidform.valid) {
      console.log(this.findbyidform);
      this.gymnaseService.getGymnaseById(this.findbyidform.value.gymnaseId).subscribe(
        data => {
          this.gymnaseSearch = data;
          console.log('getGymnaseById',data);
          this.findbyidform.reset();
          return true;
        }
      )
    }
  }

  /* toggleTable(): void {
    this.showTable = !this.showTable;
  } */

}
