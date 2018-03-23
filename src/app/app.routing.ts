import { RouterModule, Routes } from '@angular/router';

import { LoginComponent} from './components/login.component';
import { RegisterComponent} from './components/register.component';

//routes of application
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent }
];

//export provider an routes
export const appRoutingProviders: any[] = [];
export const AppRouter: Routes = appRoutes;

