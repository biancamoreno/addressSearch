import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchEngineComponent } from './search-engine.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: SearchEngineComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchEngineComponent
  ]
})

export class SearchEngineModule { }
