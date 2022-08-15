import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
     private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=';
     private urlname: string = 'https://pokeapi.co/api/v2/pokemon';

constructor(
    private http : HttpClient
    ) { }
getPokemon (limit:number, offset: number) {
    return this.http.get(`${this.url}${limit}&offset=${offset}`)
}

getDataPokemon (name: string) {
    return this.http.get(`${this.urlname}/${name}`);
}

}
 