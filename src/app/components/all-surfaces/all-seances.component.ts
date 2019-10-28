import { Component, OnInit } from '@angular/core';
import { Seances } from 'src/app/model/gymnases.model';
import { GymnasessService } from 'src/app/services/gymnasess.service';

@Component({
  selector: 'app-all-seances',
  templateUrl: './all-seances.component.html',
  styleUrls: ['./all-seances.component.css']
})
export class AllSeancesComponent implements OnInit {

  public allSurfaces;

  constructor(private gymnaseService : GymnasessService) { }

  ngOnInit() {
    this.getAllSurfaces();
  }

  getAllSurfaces() {
    this.gymnaseService.getAllGymnaseSurface().subscribe(
      data => {
        this.allSurfaces = data
      },
      err => console.error(err),
      () => console.log('Surfaces loaded', this.allSurfaces)
    );
  }

}
