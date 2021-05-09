import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import WaveSurfer from 'wavesurfer.js';

@Injectable()
export class WavesurferService {
  public tracksrc = new Subject<string>();
  track$ = this.tracksrc.asObservable();
  trackinput: string;
  wave: WaveSurfer = null;
  isPlaying: boolean = false;
  constructor() {
    this.track$.subscribe(track => {
      if (this.wave.isPlaying()) {
        this.wave.stop();

        Promise.resolve(null).then(() => {
          this.wave.load(track);
        });

        Promise.resolve(null).then(() => {
          this.wave.play();
        });
      } else {
        this.wave.load(track);
      }
    });
  }

  updateTrack(trackinput, componentId) {
    this.tracksrc.next(trackinput);
    this.trackinput = '';
  }
  playPause() {
    console.log('play pause');
    Promise.resolve(null).then(() => {
      this.wave.playPause();
      this.isPlaying = this.wave.isPlaying();
    });
  }
  play(track): void {
    Promise.resolve(null).then(() => {
      this.tracksrc.next(track);
    });
  }
  playTrack(track, name, componentId, uuid) {
    console.log(track, name, componentId, uuid);
    this.play(track);
  }
  onStopPressed(): void {
    this.wave.stop();
  }

  generateWaveform(): void {
    Promise.resolve(null).then(() => {
      this.wave = WaveSurfer.create({
        container: '#footerwave',
        backgroundColor: '#FFF',
        cursorColor: '#333',
        progressColor: '#555',
        waveColor: '#00eeff',
        barGap: 1,
        barHeight: 1,
        barMinHeight: 1,
        barRadius: 10,
        barWidth: 10,
        mediaControls: false,
        normalize: true,
        backend: 'WebAudio',
        splitChannels: false,
        responsive: true,

        hideScrollbar: true
      });
    });
  }

  generateWaveformTrack(componentid, track): void {
    Promise.resolve(null).then(() => {
      this.wave = WaveSurfer.create({
        container: '#' + componentid,
        backgroundColor: '#FFF',
        cursorColor: '#333',
        progressColor: '#555',
        waveColor: '#00eeff',
        barGap: 1,
        barHeight: 1,
        barMinHeight: 1,
        barRadius: 10,
        barWidth: 10,
        mediaControls: false,
        normalize: true,
        backend: 'WebAudio',
        splitChannels: false,
        responsive: true,

        hideScrollbar: true
      });
      this.wave.load(track);
    });
  }
}
