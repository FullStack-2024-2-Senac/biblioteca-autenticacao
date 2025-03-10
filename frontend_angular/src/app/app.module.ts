
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { FormsModule } from '@angular/forms';

    import { AppComponent } from './app.component';
    import { LoginComponent } from './login.component';
    import { AuthGuard } from './auth.guard';
    import { AuthService } from './auth.service';

    @NgModule({
      declarations: [AppComponent, LoginComponent],
      imports: [BrowserModule, HttpClientModule, FormsModule],
      providers: [AuthGuard, AuthService],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    