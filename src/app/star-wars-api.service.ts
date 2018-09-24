import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StarWarsAPIService {

  public api_url:string = "https://swapi.co/api/" 

  constructor(public http:HttpClient) {}
    
    getCharacters(){
       return this.http.get(this.api_url + "people");
    }
    
    getResults(url){
      return this.http.get(url);
    }
    
}
