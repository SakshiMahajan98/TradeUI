import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { ButtonModule } from 'primeng/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {CardModule} from 'primeng/card';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {MatRadioModule} from '@angular/material/radio';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TickerTableComponent } from './ticker-table/ticker-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';
import { ChartComponent } from './chart/chart.component';
import { SchartComponent } from './schart/schart.component';
import { CategoryService, ChartAllModule, DataLabelService, LegendService, StockChartAllModule, StockChartModule, TooltipService } from '@syncfusion/ej2-angular-charts';

import { CandleSeriesService } from '@syncfusion/ej2-angular-charts';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TickerTableComponent,
    DashboardComponent,
    TradeHistoryComponent,
    BuySellComponent,
    PortfolioComponent,
    ProfileComponent,
    ChartComponent,
    SchartComponent,
    
  
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    NgImageSliderModule,
    TableModule,
    SliderModule,
    HttpClientModule,
    CardModule,
    MatMenuModule,
    ChartModule,
    ToastModule,
    InputTextModule,
    TabViewModule,
    StockChartModule,
    ChartAllModule,
    StockChartAllModule
  ],
  providers: [CandleSeriesService, CategoryService, LegendService, TooltipService, DataLabelService],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
