import { Component, OnInit } from '@angular/core';

import {io} from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat';
  ngOnInit(): void {
    const key = 'a427604465';
    const BASE_URL = `https://my-app-52ehg.ondigitalocean.app`;
    const socket = io(BASE_URL);
    socket.emit('events', { key });
    socket.on('events', (v) => console.log('new messages', v));
  }
}
