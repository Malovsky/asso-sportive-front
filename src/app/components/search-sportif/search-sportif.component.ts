import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SportifsService } from 'src/app/services/sportifs.service';

@Component({
  selector: 'app-search-sportif',
  templateUrl: './search-sportif.component.html',
  styleUrls: ['./search-sportif.component.css']
})
export class SearchSportifComponent implements OnInit {

  public sportifSearch;
  findbyidform : FormGroup;
  showTable: boolean = false

  constructor(private sportifService: SportifsService) { }

  ngOnInit() {
    this.findbyidform = new FormGroup({
      sportifId: new FormControl('', Validators.required)
    });
  }

  getSportifById() {
    if (this.findbyidform.valid) {
      console.log(this.findbyidform);
      this.sportifService.getNomSportifById(this.findbyidform.value.sportifId).subscribe(
        data => {
          this.sportifSearch = data;
          console.log('getSportifByName',data);
          this.findbyidform.reset();
          return true;
        },
        error => {
          console.error(error);
        }
      )
    }
  }

}
