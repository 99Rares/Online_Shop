import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableContainerComponent } from './feature/products/table-container/table-container.component';
import { TableComponent } from './feature/products/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BackendService } from './backend/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './feature/users/login/login.component';
import { UserFormComponent } from './feature/users/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TableContainerComponent,
    TableComponent,
    LoginComponent,
    UserFormComponent,
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    BackendService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
