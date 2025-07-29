import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Mpmt Frontend';
  helloMessage = '';

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.helloService.getHello().subscribe({
      next: (msg) => this.helloMessage = msg,
      error: (err) => this.helloMessage = 'Erreur : ' + err.message
    });
  }
}
