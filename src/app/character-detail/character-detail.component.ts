import { Component, OnInit, Input } from '@angular/core';
import { StarWarsAPIService } from '../star-wars-api.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() activeCharacter:any;
  public homeworld:string;
  public species: string;
  public first_appearance: string;
  public starship: string;
  public loaded:boolean;
    
  constructor(private sw_api: StarWarsAPIService) { }

  ngOnInit() {
    this.sw_api.getResults(this.activeCharacter.homeworld).subscribe((data:any) => {
			  	this.homeworld = data.name;
			  	this.getSpecies();
				},
				(err) => {
				  console.log(err);
				});
  }
  
  getSpecies(){
    this.sw_api.getResults(this.activeCharacter.species[0]).subscribe((data:any) => {
			  	this.species = data.name;
			  	this.getMovie();
				},
				(err) => {
				  console.log(err);
				});
  }
  
  getMovie(){
     this.sw_api.getResults(this.activeCharacter.films[0]).subscribe((data:any) => {
			  	this.first_appearance = data.title;
			  	if(this.activeCharacter.starships.length){
			  	  this.getStarship();
			  	}
			  	else {
			  	  this.starship = "N/a"
			  	  this.loaded = true;
			  	}
				},
				(err) => {
				  console.log(err);
				});
  }
  
  getStarship(){
    this.sw_api.getResults(this.activeCharacter.starships[0]).subscribe((data:any) => {
			  	this.starship = data.name;
			  	this.loaded = true;
				},
				(err) => {
				  console.log(err);
				});
  }

}
