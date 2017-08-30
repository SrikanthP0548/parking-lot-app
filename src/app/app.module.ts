import { VehicleListService } from './shared/vehicle-list.service';
import { ExitComponent } from './home/exit/exit.component';
import { EntryComponent } from './home/entry/entry.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


const appRoutes:Routes =[
  {path:'',component:LoginComponent},
  {path:'index', component: HomeComponent },
  {path:'list', component: ListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    LoginComponent,
    EntryComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [VehicleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
