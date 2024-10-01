import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-socket-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './socket-chat.component.html',
  styleUrl: './socket-chat.component.css'
})
export class SocketChatComponent {

  msg: string = '';
  response: string = '';

  socket: any
  constructor() {
    this.socket = io();
    this.socket.on('w10serverevent', (data: any) => {
      this.response = data;
      console.log(data);
    });

    this.socket.on('w10serverevent2', (data: any) => {
      this.response = data;
      console.log(data);
    });


  }

  sendMessage() {
    console.log(this.msg);
    this.socket.emit('w10event', this.msg);
  }
  sendMessage2() {
    console.log(this.msg);
    this.socket.emit('w10event2', this.msg);
  }

}
