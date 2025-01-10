import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './registry/login/login.component';
import { LogoutComponent } from './registry/logout/logout.component';
import { ForgetPwdComponent } from './registry/forget-pwd/forget-pwd.component';
import { PersonDetailComponent } from './registry/person-detail/person-detail.component';
import { PersonListComponent } from './registry/person-list/person-list.component';
import { NotFoundComponent } from './registry/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'forgetPwd', component: ForgetPwdComponent},
    { path: 'personDetail', component: PersonDetailComponent},
    { path: 'personDetail/:ssn', component: PersonDetailComponent},
    { path: 'personList', component: PersonListComponent},    
    { path: '**', component: NotFoundComponent }
];
