import { Component, OnInit } from '@angular/core';
import {SongService} from "../service/song.service";
import {Song} from "../model/song";

@Component({
  selector: 'app-zing',
  templateUrl: './zing.component.html',
  styleUrls: ['./zing.component.css']
})
export class ZingComponent implements OnInit {
  playlist: Song[] = [];

  constructor( private songService : SongService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.playlist = this.songService.playlist;
  }
}
