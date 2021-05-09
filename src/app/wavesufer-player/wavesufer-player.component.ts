import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wavesurfer-player',
  templateUrl: './wavesurfer-player.component.html',
  styleUrls: ['./wavesurfer-player.component.css']
})
export class WavesurferPlayerComponent implements OnInit, OnChanges {
  wave: WaveSurfer = null;
  isPlaying: boolean = false;

  @Input() track: string; // decorate the property with @Input()
  ngOnChanges(changes: SimpleChanges) {
    if (this.wave) {
      Promise.resolve().then(() => this.wave.load(this.track));
      this.isPlaying = false;
    }
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.generateWaveform();
    this.cdr.detectChanges();
    Promise.resolve().then(() => this.wave.load(this.track));
  }

  play(): void {
    this.wave.playPause();
    this.isPlaying = this.wave.isPlaying();
  }

  onStopPressed(): void {
    this.wave.stop();
  }

  generateWaveform(): void {
    Promise.resolve(null).then(() => {
      this.wave = WaveSurfer.create({
        container: '#waveform',
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
        responsive: true
      });
    });
  }
}
