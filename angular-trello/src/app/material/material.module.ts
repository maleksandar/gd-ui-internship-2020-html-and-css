import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatCardModule,
  MatButtonModule,
  DragDropModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
  
})
export class MaterialModule { }
