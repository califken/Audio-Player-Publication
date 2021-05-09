import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { WaveSurfer } from '/node_modules/wavesurfer.js/src/wavesurfer.js';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { WavesurferComponent } from './wavesurfer/wavesurfer.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DataService } from './services/data.service';
import { GlobalPlayControlsComponent } from './wavecomponents/global-play-controls/global-play-controls.component';
import { WavesurferService } from './services/wavesurfer.service';
import { AudioListComponent } from './audio-list/audio-list.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAEccTtH5hBG4ImiMO6aOB9PLC9MTk0_jU',
      authDomain: 'angularwavesurfer.firebaseapp.com',
      databaseURL: 'https://angularwavesurfer.firebaseio.com',
      projectId: 'angularwavesurfer',
      storageBucket: 'angularwavesurfer.appspot.com',
      messagingSenderId: '70473724110',
      appId: '1:70473724110:web:c279b9c959368c3da9609f',
      measurementId: 'G-DV7T6F2T9P'
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    WavesurferComponent,
    GlobalPlayControlsComponent,
    AudioListComponent
  ],
  providers: [AngularFireDatabaseModule, DataService, WavesurferService],
  bootstrap: [AppComponent]
})
export class AppModule {}
