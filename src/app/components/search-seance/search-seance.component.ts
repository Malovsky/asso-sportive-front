import { Component, OnInit } from '@angular/core';
import { GymnasessService } from 'src/app/services/gymnasess.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-seance',
  templateUrl: './search-seance.component.html',
  styleUrls: ['./search-seance.component.css']
})
export class SearchSeanceComponent implements OnInit {

  public seancesReg;
  findseancesbyidform: FormGroup;

  constructor(private gymnaseService: GymnasessService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.findseancesbyidform = new FormGroup({
      seanceId: new FormControl('', Validators.required)
    });
  }

  getSeancesReg() {
    if (this.findseancesbyidform.valid) {
      console.log(this.findseancesbyidform);
      this.gymnaseService.getSeancesById(this.findseancesbyidform.value.seanceId).subscribe(
        data => {
          this.seancesReg = data;
          console.log('getSeancesReg',data);
          this.findseancesbyidform.reset();
          return true;
        },
        error => {
          console.error(error);
        }
      )
    }
  }
}
