import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FinalizarCompraComponent } from './components/finalizar-compra/finalizar-compra.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'finalizar-compra', component: FinalizarCompraComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinalizarCompraComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
