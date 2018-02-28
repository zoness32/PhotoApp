import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
