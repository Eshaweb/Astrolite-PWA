import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AstroliteMobilePage } from '../pages/astrolite-mobile/astrolite-mobile';
import { ProductPage } from '../pages/product/product';
import { ServicesPage } from '../pages/services/services';
import { OrderPage } from '../pages/order/order';
import { PaymentPage } from '../pages/payment/payment';
import { SignupPage } from '../pages/signup/signup';
import { MatchMakingPage } from '../pages/match-making/match-making';
import { FullHoroscopePage } from '../pages/full-horoscope/full-horoscope';
import { MediumHoroscopePage } from '../pages/medium-horoscope/medium-horoscope';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { PaymentDetailsPage } from '../pages/payment-details/payment-details';
import { PaymentGatewayPage } from '../pages/payment-gateway/payment-gateway';
import { HoroscopePage } from '../pages/horoscope/horoscope';
import { SearchOnMapPage } from '../pages/search-on-map/search-on-map';
import { AstamangalaPage } from '../pages/astamangala/astamangala';
import { PrashnoInputsPage } from '../pages/prashno-inputs/prashno-inputs';
import { WalletPage } from '../pages/wallet/wallet';
import { MatchResultPage } from '../pages/match-result/match-result';
import { SettingsPage } from '../pages/settings/settings';
import { NithyaPanchangaPage } from '../pages/nithya-panchanga/nithya-panchanga';
import { NithyaPanchangaMorePage } from '../pages/nithya-panchanga-more/nithya-panchanga-more';
import { Horoscope2Page } from '../pages/horoscope2/horoscope2';
import { DepositWalletPage } from '../pages/deposit-wallet/deposit-wallet';
import { DepositHistroyPage } from '../pages/deposit-histroy/deposit-histroy';
import { WalletStatementPage } from '../pages/wallet-statement/wallet-statement';
import { LastTransactionPage } from '../pages/last-transaction/last-transaction';
import { DeliveryAddressPage } from '../pages/delivery-address/delivery-address';
import { DevExtremeModule, DxTextBoxModule, DxNumberBoxModule, DxResponsiveBoxModule } from 'devextreme-angular';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UIHelperService } from '../Services/UIHelperService/UIHelperService';
import { UIService } from '../Services/UIService/ui.service';
import { SmartHttpClient, applicationHttpClientCreator } from '../Services/shared/http-client/smart-httpclient.service';
import { HttpClientModule, HttpClient } from '../../node_modules/@angular/common/http';
import { LoaderService } from '../Services/shared/loader.service';
import { HomePage } from '../pages/home/home';
import { AgmCoreModule } from '../../node_modules/@agm/core';
import { Service } from '../Models/Company';

@NgModule({
  declarations: [
    MyApp,
    AstroliteMobilePage,
    ProductPage,
    ServicesPage,
    OrderPage,
    PaymentPage,
    SignupPage,
    MatchMakingPage,
    FullHoroscopePage,
    MediumHoroscopePage,
    PaymentSuccessPage,
    PaymentDetailsPage,
    PaymentGatewayPage,
    HoroscopePage,
    SearchOnMapPage,
    AstamangalaPage,
    PrashnoInputsPage,
    WalletPage,
    MatchResultPage,
    SettingsPage,
    NithyaPanchangaPage,
    NithyaPanchangaMorePage,
    Horoscope2Page,
    DepositWalletPage,
    DepositHistroyPage,
    WalletStatementPage,
    LastTransactionPage,
    DeliveryAddressPage,
    HomePage
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD68pTd0CmqTXSqPHFpLrPWkiClqPBIpLQ",
      libraries: ["places"]
  }),
    BrowserModule,DevExtremeModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AstroliteMobilePage,
    ProductPage,
    ServicesPage,
    OrderPage,
    PaymentPage,
    SignupPage,
    MatchMakingPage,
    FullHoroscopePage,
    MediumHoroscopePage,
    PaymentSuccessPage,
    PaymentDetailsPage,
    PaymentGatewayPage,
    HoroscopePage,
    SearchOnMapPage,
    AstamangalaPage,
    PrashnoInputsPage,
    WalletPage,
    MatchResultPage,
    SettingsPage,
    NithyaPanchangaPage,
    NithyaPanchangaMorePage,
    Horoscope2Page,
    DepositWalletPage,
    DepositHistroyPage,
    WalletStatementPage,
    LastTransactionPage,
    DeliveryAddressPage,HomePage
  ],
  providers: [UIHelperService,UIService,SmartHttpClient,LoaderService,Service,
    {
      provide: SmartHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient]
    },
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}