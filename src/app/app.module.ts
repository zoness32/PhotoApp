import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ImageCardComponent } from './image-card/image-card.component';
import {GalleryComponent} from './gallery/gallery.component';
import {DemoComponent} from './demo/demo.component';
import {ImageService} from './services/image.service';
import {ViewerComponent} from './viewer/viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewerComponent,
    ImageCardComponent,
    GalleryComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
