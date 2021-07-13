import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-rated-shows-container',
  templateUrl: './top-rated-shows-container.component.html',
  styleUrls: ['./top-rated-shows-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedShowsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
