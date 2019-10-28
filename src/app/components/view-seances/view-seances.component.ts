import { Component, OnInit } from '@angular/core';
import { GymnasessService } from 'src/app/services/gymnasess.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-seances',
  templateUrl: './view-seances.component.html',
  styleUrls: ['./view-seances.component.css']
})
export class ViewSeancesComponent implements OnInit {

  public gymnaseReg;

  constructor(private gymnaseService: GymnasessService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getGymnaseReg(this.route.snapshot.params.id);
  }

  getGymnaseReg(id: number) {
    this.gymnaseService.getSeancesById(id).subscribe(
      data => {
        this.gymnaseReg = data;
      },
      err => console.error(err),
      () => console.log('Gymnase loaded', this.gymnaseReg)
    );
  }

}
