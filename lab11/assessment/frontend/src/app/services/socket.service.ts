import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  public value: number = 0;

  constructor() { 
    this.socket = io('http://localhost:8080');
  }

  requestConversion(aud: number) {
    this.socket.emit('convert', { aud });
  }

  onConversion(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('converted', (data) => {
        observer.next(data);
      });

      this.socket.on('error', (error) => {
        observer.error(error);
      });

      return () => {
        this.socket.off('converted');
        this.socket.off('error');
      };
    });
  }
}
