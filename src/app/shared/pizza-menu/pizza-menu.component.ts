import { Component } from '@angular/core';
import { pizzaService } from '../../service/pizza.service';
import { pizzaState } from '../../state/pizza-state';
import { Pizza } from 'src/app/models/pizza.models';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.css'],
})
export class PizzaMenuComponent {
  pizzas?: Pizza[];
  pizza: Pizza | undefined;
  carrello: Pizza[] = [];
  totale: number = 0;
  constructor(
    protected pizzaService: pizzaService,
    protected pizzaState: pizzaState
  ) {
    pizzaService.getPizzas().subscribe((ris) => {
      this.pizzas = ris;
    });
  }

  add(pizza: Pizza) {
    this.pizzaService.getPizza(pizza.id).subscribe((ris) => {
      this.pizza = ris;
      this.pizza.quantity = pizza.quantity;
      this.totale = this.totale + pizza.price;
      this.carrello = this.carrello.filter((ris) => ris.id !== this.pizza?.id);
      this.carrello.push(this.pizza);
    });
    pizza.quantity++;
  }

  delete(pizza: Pizza) {
    this.pizzaService.getPizza(pizza.id).subscribe((ris) => {
      this.pizza = ris;
      this.pizza.quantity = pizza.quantity;
      this.totale = this.totale - pizza.price;
      this.carrello = this.carrello.filter((ris) => ris.id !== this.pizza?.id);
      this.carrello.push(this.pizza);
      console.log(this.totale);
      if (this.pizza.quantity == 0) {
        this.carrello.pop();
      }
    });
    pizza.quantity--;
  }

  deletePizza(id: number) {
    this.pizzas = this.pizzas?.filter((ris) => ris.id !== id);
  }

  reset() {
    this.pizzas = [];
    this.pizza = undefined;
    this.carrello = [];
    this.totale = 0;
  }
}
