import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
