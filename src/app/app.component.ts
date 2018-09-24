import { Component, OnInit } from '@angular/core';
import { StarWarsAPIService } from './star-wars-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

public characters:Array<any> = [];
public activeCharacter:any = {};
public characterDetailModal:any = {};
public activePlanet:any = {};

constructor(
		public sw_api: StarWarsAPIService,
		private modalService: NgbModal
	) {}

	ngOnInit() {
	  
	  this.sw_api.getCharacters().subscribe((data:any) => {
			  	this.characters = data.results;
				},
				(err) => {
				  console.log(err);
				});
      }
      
   openModal(content, character){
     this.activeCharacter = character;
     this.characterDetailModal = this.modalService.open(content, {});
     this.sw_api.getResults(this.activeCharacter.homeworld).subscribe((data:any) => {
			  	this.activePlanet = data;
				},
				(err) => {
				  console.log(err);
				});
     }

}
