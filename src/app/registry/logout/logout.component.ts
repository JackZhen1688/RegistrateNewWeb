import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { DataShareService } from './../../services/data-share.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

    constructor(private router: Router,
    private dataShareService: DataShareService) {}

    ngOnInit() {

    this.dataShareService.isLogin.next(false);
    this.dataShareService.loginFlag.next('false');
    }

    onLogin() {

    }
}
