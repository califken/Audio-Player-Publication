import { Component, VERSION } from "@angular/core";

export interface Artist {
  id: string;
  name: string;
  songs: Song[];
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  artistid?: string;
  resourceurl: string;
  songmeta?: Songmeta;
  activity?: {
    realtime?: RealtimeActivity[];
    historical?: PlayControlUIAction[];
    annotations?: Annotation[];
    statistics?: AggregatedStats[];
  };
}

export interface Songmeta {
  sid: string;
  duration: number;
  category: Category[];
}

export interface Category {
  cid: string;
  name: string;
}

export interface PlayControlUIAction {
  sid: string;
  uid: string;
  actiontimestamp: number;
  actionin: string; // ["play", "resume", "seek", "nexted"];
  timein: number;
  actionout?: string; // ["stop", "pause", "seek", "finish", "skip"];
  timeout?: number;
}

export interface Annotation {
  sid: string;
  uid: string;
  action: string; // ["comment", "rate", "like", "dislike", "favorite"];
  scope: string; // ["spot", "region", "song"];
  timein: number;
  timeout?: number;
  stringvalue?: string;
  booleanvalue?: boolean;
  numericvalue?: number;
}

export interface RealtimeActivity {
  sid: string;
  uid: string;
  playControlUIAction: PlayControlUIAction;
}

export interface AggregatedStats {
  sid: string;
  uid: string;
  action: string; // ['dl','play','like','dislike','favorite','rate','comment'];
  actionvalue: number;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  newartist: Artist;

  constructor() {
    this.newartist = {
      id: "1",
      name: "Kenny",
      songs: [
        {
          id: "1",
          title: "my song",
          artist: "kenny",
          resourceurl: "http://kennethcaple.com/mp3s/loop.mp3",
          songmeta: {
            sid: "1",
            duration: 1000,
            category: [
              {
                cid: "1",
                name: "Rock"
              },
              {
                cid: "2",
                name: "EDM"
              }
            ]
          },
          activity: {
            realtime: [
              {
                sid: "1",
                uid: "1",
                playControlUIAction: {
                  sid: "1",
                  uid: "1",
                  actiontimestamp: 104505,
                  actionin: "play",
                  timein: 0
                }
              }
            ],
            historical: [
              {
                sid: "1",
                uid: "2",
                actiontimestamp: 102222,
                actionin: "play",
                timein: 0,
                actionout: "finish",
                timeout: 100
              },
              {
                sid: "1",
                uid: "3",
                actiontimestamp: 222222,
                actionin: "play",
                timein: 0,
                actionout: "stop",
                timeout: 30
              }
            ],
            annotations: [
              {
                sid: "1",
                uid: "1",
                action: "comment",
                scope: "song",
                timein: 0,
                timeout: 100,
                stringvalue: "Cool"
              }
            ],
            statistics: [
              {
                sid: "1",
                uid: "1",
                action: "play",
                actionvalue: 3
              },
              {
                sid: "1",
                uid: "1",
                action: "dl",
                actionvalue: 5
              }
            ]
          }
        }
      ]
    };
  }
}
