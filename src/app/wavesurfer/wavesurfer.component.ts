import { Component, Input, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { WavesurferService } from '../services/wavesurfer.service';

import WaveSurfer from 'wavesurfer.js';
@Component({
  selector: 'app-wavesurfer',
  templateUrl: './wavesurfer.component.html',
  styleUrls: ['./wavesurfer.component.css']
})
export class WavesurferComponent implements OnInit {
  @Input() componentId: string;
  @Input() track: string;
  @Input() title: string;

  wave: WaveSurfer = null;
  constructor(public wavesurferService: WavesurferService) {

  }

  ngOnInit() {
  }
}
