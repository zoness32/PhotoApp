import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  public flexBorderSize = 3;
  public flexImageSize = 7;
  public galleryName = '';

  ngOnInit() {
  }

  onViewerVisibilityChanged(isVisible: boolean) {
    console.log('viewer visible: ' + isVisible);
  }
}
