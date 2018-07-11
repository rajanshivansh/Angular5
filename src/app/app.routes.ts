import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UserComponent } from './user/user.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { EmployeeComponent } from './employee-module/employee/employee.component';

export const APP_ROUTES : Routes = [{
    path : '',              //http://localhost:4200
    redirectTo : 'login',
    pathMatch : 'full'
},{
    path : 'login',             //http://localhost:4200/login
    component : LoginComponent
}, {
    path : 'register',
    component : RegisterComponent           //http://localhost:4200/register
}, {
    path : 'pipe',
    component : PipeDemoComponent
},{
    path : 'user',
    component : UserComponent,
    canActivate : [LoginGaurdService]
},{
    path : 'product',
    component : ProductComponent,
    children : [{
        path : '',
        redirectTo : 'overview',
        pathMatch : 'full'
    },{
        path : 'overview/:id',
        component : OverviewComponent
    },{
        path : 'spec',
        component : SpecificationComponent
    }]
},{
    path : 'employee',
    component : EmployeeComponent
},{
    path : 'lazy',
    loadChildren : 'app/lazy/lazy.module#LazyModule'
},{
    path : '**',                        //http://localhost:4200/notexist
    redirectTo : 'login',
    pathMatch : 'full'
}]