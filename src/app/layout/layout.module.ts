import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent, MessagesComponent, PathNotFoundComponent } from './components';

@NgModule({
  declarations: [
    AboutComponent,
    MessagesComponent,
    PathNotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class LayoutModule { }
