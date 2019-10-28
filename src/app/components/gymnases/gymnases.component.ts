import { Component, OnInit } from '@angular/core';
import { GymnasesAll } from 'src/app/model/gymnases.model';
import { GymnasessService } from 'src/app/services/gymnasess.service';

@Component({
  selector: 'app-gymnases',
  templateUrl: './gymnases.component.html',
  styleUrls: ['./gymnases.component.css']
})
export class GymnasesComponent implements OnInit {

  public gymnases : GymnasesAll;

  constructor(private gymnaseService : GymnasessService) { }

  ngOnInit() {
    this.getGymnases();
  }

  getGymnases() {
    this.gymnaseService.getGymnases().subscribe(
      data => {
        this.gymnases = data
      },
      err => console.error(err),
      () => console.log('Gymnases loaded', this.gymnases)
    );
  }

}
