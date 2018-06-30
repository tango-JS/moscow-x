import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {

  portfolio$;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.portfolio$ = this.route.paramMap.pipe(
      map(params => {
        return params.get('name');
      })
    );
  }
}


