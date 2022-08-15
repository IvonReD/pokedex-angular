import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.scss'],
})
export class CataloguePageComponent implements OnInit {
  page = 1;
  resultData!: number;
  arrayPokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.searchpokemon();
  }

  searchpokemon() {
    this.pokemonService
      .getPokemon(15, this.page + 0)
      .subscribe((response: any) => {
        this.resultData = response.count;

        response.results.forEach((response: any) => {
          this.pokemonService
            .getDataPokemon(response.name)
            .subscribe((response: any) => {
              this.arrayPokemons.push(response);
            });
        });
      });
  }
}
