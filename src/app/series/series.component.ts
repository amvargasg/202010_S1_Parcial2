import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  private series: Array<Serie>;
  getSerieList() {
    this.serieService.getSerie().subscribe(cs => {
      this.series = cs;
    });
}

  ngOnInit() {
  }

}
