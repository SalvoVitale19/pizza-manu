import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pizzaState } from '../state/pizza-state';
import { Pizza } from '../models/pizza.models';

@Injectable({
  providedIn: 'root',
})
export class pizzaService {
  constructor(public http: HttpClient, public pizzaState: pizzaState) {}

  getPizzas() {
    return this.http.get<Pizza[]>(
      'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
    );
  }

  getPizza(id: number) {
    return this.http.get<Pizza>(
      `https://my-json-server.typicode.com/zoelounge/menupizza/cards/${id}`
    );
  }
}
