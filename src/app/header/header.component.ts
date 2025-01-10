import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { DataShareService } from './../services/data-share.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuDisplay?: boolean;
  subscription?: Subscription;
  constructor(private router: Router, 
              private dataShareService: DataShareService) { 
     /*
      this.subscription = router.events.subscribe((event) => {
          if (event instanceof NavigationStart) {
              browserRefresh = !router.navigated;
              console.log("refresh=="+!router.navigated)
          }
      });
    */     
  }

  ngOnInit() {
    
    //if (sessionStorage.getItem('login') === 'true')
    //    this.menuDisplay = true;
    //if (sessionStorage.getItem('login') === 'false')
    //    this.menuDisplay = false;

    this.dataShareService.loginFlag.subscribe(value => {
      if (value !='') {
        sessionStorage.setItem('login', value);
         if (value === 'true')
             this.menuDisplay = true;
         if (value === 'false')
             this.menuDisplay = false;
         console.log("reSet value=="+value);
      }
    })

  }

  ngOnDestroy() {
    if (this.subscription != undefined) {
        this.subscription.unsubscribe();
    }
  }

  private isPageRefresh(router: Router) : boolean {
    let browserRefresh: boolean = false;
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          browserRefresh = !router.navigated;
          console.log("return=="+!router.navigated)
      }
    });

    return browserRefresh;
  }

}
