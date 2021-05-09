import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  currentItem = 'https://wavesurfer-js.org/example/media/demo.wav';
  currentTrack = 'https://wavesurfer-js.org/example/media/demo.wav';

  updateTrack() {
    this.currentTrack = this.currentItem;
  }
  constructor(public dataService: DataService) {}

  ngOnInit() {}
}
