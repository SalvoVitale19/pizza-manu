import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.models';

@Injectable({
  providedIn: 'root',
})
export class pizzaState {
  pizzas?: Pizza[];

  initCards(pizzas: Pizza[]) {
    this.pizzas = pizzas;
  }

  deletePizza(id: number) {
    this.pizzas = this.pizzas?.filter((ris) => ris.id !== id);
  }
}
