import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  isPlaying = signal(false);

  togglePlay() {
    this.isPlaying.set(!this.isPlaying());
  }
}
