import { Component } from '@angular/core';
import { pizzaService } from '../../service/pizza.service';
import { pizzaState } from '../../state/pizza-state';
import { Pizza } from 'src/app/models/pizza.models';

@Component({
  selector: 'app-pizza-home',
  templateUrl: './pizza-home.component.html',
  styleUrls: ['./pizza-home.component.css'],
})
export class PizzaHomeComponent {
  pizzas?: Pizza[];
  constructor(
    protected pizzaService: pizzaService,
    protected pizzaState: pizzaState
  ) {
    pizzaService.getPizzas().subscribe((ris) => {
      this.pizzas = ris;
    });
  }
}
