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
  findbyvilleform : FormGroup;
  findbysurminmaxform : FormGroup;
  showTable: boolean = false;

  constructor(private gymnaseService: GymnasessService) { }

  ngOnInit() {
    this.findbynomform = new FormGroup({
      gymnaseName: new FormControl('', Validators.required)
    });
    this.findbyidform = new FormGroup({
      gymnaseId: new FormControl('', Validators.required)
    });
    this.findbyvilleform = new FormGroup({
      gymnaseVille: new FormControl('', Validators.required)
    });
    this.findbysurminmaxform = new FormGroup({
      gymnasesurfmin: new FormControl('', Validators.required),
      gymnasesurfmax: new FormControl('', Validators.required)
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

  getGymnaseByVille() {
    if (this.findbyvilleform.valid) {
      console.log(this.findbyvilleform);
      this.gymnaseService.getGymnaseByVille(this.findbyvilleform.value.gymnaseVille.toUpperCase( )).subscribe(
        data => {
          this.gymnaseSearch = data;
          console.log('getGymnaseByVille',data);
          this.findbyvilleform.reset();
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
        },
        error => {
          console.error(error);
        }
      )
    }
  }

  getGymnaseBySurfaceMinMax() {
    if (this.findbysurminmaxform.valid) {
      console.log(this.findbysurminmaxform);
      this.gymnaseService.getGymnaseWithSurface(this.findbysurminmaxform.value.gymnasesurfmin, this.findbysurminmaxform.value.gymnasesurfmax).subscribe(
        data => {
          this.gymnaseSearch = data;
          console.log('getGymnaseBySurfaceMinMax',data);
          this.findbysurminmaxform.reset();
          return true;
        },
        error => {
          console.error(error);
        }
      )
    }
  }

}
