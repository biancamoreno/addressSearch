import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'consulta-cep', loadChildren: './pages/search-engine/search-engine.module#SearchEngineModule' },
  { path: '', loadChildren: './pages/welcome/welcome.module#WelcomeModule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
