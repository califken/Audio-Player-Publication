import { Component, OnInit } from '@angular/core';
import { WavesurferService } from '../../services/wavesurfer.service';
@Component({
  selector: 'app-global-play-controls',
  templateUrl: './global-play-controls.component.html',
  styleUrls: ['./global-play-controls.component.css']
})
export class GlobalPlayControlsComponent implements OnInit {
  currenttrack;
  constructor(public wavesurferService: WavesurferService) {
    this.wavesurferService.track$.subscribe(track => {
      this.wavesurferService.play(track);
      this.currenttrack = track;
    });
  }

  ngOnInit() {}
}
