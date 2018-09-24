import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FilterPipe} from './filter.pipe';

import { StarWarsAPIService } from './star-wars-api.service';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    StarWarsAPIService],
  bootstrap: [AppComponent]
})

export class AppModule { }
