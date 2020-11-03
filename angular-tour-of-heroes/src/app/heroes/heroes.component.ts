import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes : Hero[];
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };
  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add("HeroComponent: Selected hero id="+hero.id);
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  constructor(private heroService: HeroService, private messageService: MessageService) {      
  }

  ngOnInit(): void { //Initialization logic here, called shortly after creating a component
    //this.selectedHero = this.heroes[0];
    this.getHeroes();
  }

}
