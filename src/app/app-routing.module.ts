import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookingListComponent } from "./booking-list/booking-list.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { BookingService } from "./services/booking.services";


const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "booking",
        component: BookingListComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]   
})
export class AppRoutingModule { 
    
}