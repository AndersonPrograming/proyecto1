import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ContactoComponent } from './contacto/contacto.component';

// rutas de la aplicacion
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: 'calificacion', component: CalificacionComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    CalificacionComponent,
    MantenimientoComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    // importantre agregar el routerModule con forRoot le decimos las rutas
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
