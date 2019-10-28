import { Component, OnInit } from '@angular/core';
import { SportifsService } from 'src/app/services/sportifs.service';
import { SportifAll, SportifDetail } from '../../model/sportif.model';

@Component({
  selector: 'app-sportifs-list',
  templateUrl: './sportifs-list.component.html',
  styleUrls: ['./sportifs-list.component.css']
})
export class SportifsListComponent implements OnInit {
 
   public sportifs : SportifAll;

  constructor(private sportService : SportifsService) { }

  ngOnInit() {
    this.getSportifs();
  }

  getSportifs(){
    this.sportService.getAllSportifs().subscribe(
      data =>{this.sportifs = data},
      err => console.error(err),
      () => console.log('Sportifs chargées')
      );
  }

}
