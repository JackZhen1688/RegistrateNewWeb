import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  img = 'assets/images/njit_bg1.jpg';
 /*
  current = 0;
  img_list = [
    'assets/images/njit_bg1.jpg',
    'assets/images/njit_bg2.jpg',
    'assets/images/njit_bg3.jpg',
  ];
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 3000);
  }
*/
}
