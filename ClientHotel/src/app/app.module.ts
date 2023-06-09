import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPWComponent } from './forget-pw/forget-pw.component';
import { ServiceHotelComponent } from './service-hotel/service-hotel.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { BookingRoomComponent } from './booking-room/booking-room.component';
import { OverviewComponent } from './overview/overview.component';
import { PaymentComponent } from './payment/payment.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    AboutUsComponent,
    HomePageComponent,
    PromotionComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPWComponent,
    ServiceHotelComponent,
    HeaderMenuComponent,
    FooterMenuComponent,
    BookingRoomComponent,
    OverviewComponent,
    PaymentComponent,
    PersonalPageComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
