import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public flexBorderSize = 3;
  public flexImageSize = 7;
  public galleryName = '';
  private imageDataStaticPath = 'assets/img/';
  public galleries: any;

  ngOnInit() {
    this.getGalleries();
  }

  onViewerVisibilityChanged(isVisible: boolean) {
    console.log('viewer visible: ' + isVisible);
  }

  getGalleries() {
    return this.httpClient.get(`http://127.0.0.1:5000/dirs.json`)
      .subscribe(data => {
        this.galleries = data;
      });
  }

  getGalleryUri(galleryName: string) {
    return `http://127.0.0.1:5000/galleries/${galleryName}/data.json`;
  }
}
