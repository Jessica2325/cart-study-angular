import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import { addItem, removeItem } from '../reducer/cart/cart.actions';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  title = 'cart-study-angular';
  count$: Observable<number>;
  cart$: Observable<Array<any>>;

  constructor(private store: Store<{ count: number, cart: Array<any> }>) {
    this.count$ = store.select('count')
    this.cart$ = store.select('cart');
  }
  ngOnInit(): void {
  }
  
  addItem(item: any) {
    // this.store.dispatch(addItem({ id: 1, name: 'Perfume', quant: 2, price: 100.0 }))
    this.store.dispatch(addItem(item))
  }
  removeItem(id: number) {
    console.log("passou ")
    this.store.dispatch(removeItem({ id }))
  }

  sumTotal(cart) {
    return cart.reduce((a, b) => a + b.price, 0)
  }
}

