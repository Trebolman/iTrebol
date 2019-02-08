import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

// otros
import { HomeComponent } from './home/home.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HeaderComponent } from './header/header.component';

// foda
import { FodaComponent } from './foda/foda/foda.component';
import { AmenazasComponent } from './foda/amenazas/amenazas.component';
import { OportunidadesComponent } from './foda/oportunidades/oportunidades.component';
import { FortalezasComponent } from './foda/fortalezas/fortalezas.component';
import { DebilidadesComponent } from './foda/debilidades/debilidades.component';

// metas
import { MetasComponent } from './metas/metas.component';
import { FilosofiaComponent } from './filosofia/filosofia.component';


const APP_ROUTES: Routes = [
  // { path: '', component: AppComponent},
  { path: '***', component: AppComponent },
  { path: 'mision', component: MisionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'preguntas', component: PreguntasComponent },

  { path: 'foda', component: FodaComponent },
  { path: 'amenazas', component: AmenazasComponent },
  { path: 'oportunidades', component: OportunidadesComponent },
  { path: 'debilidades', component: DebilidadesComponent },
  { path: 'fortalezas', component: FortalezasComponent },

  { path: 'metas', component: MetasComponent },
  { path: 'filosofia', component: FilosofiaComponent }

  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MisionComponent,
    VisionComponent,
    PreguntasComponent,

    FodaComponent,
    AmenazasComponent,
    OportunidadesComponent,
    FortalezasComponent,
    DebilidadesComponent,

    HeaderComponent,
    MetasComponent,
    FilosofiaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
