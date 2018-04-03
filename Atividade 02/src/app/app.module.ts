import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { PostComponent } from './post/post.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostInputComponent } from './post-input/post-input.component';
import { PostService } from './post.service';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PostComponent,
    LinhaDoTempoComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule,
    routing,  
  ],
  providers:[PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
