/* eslint-disable prettier/prettier */
export class Product {
  id: number;
  cod: number;
  name: string;
  price: number;

  constructor(cod: number, name: string, price: number) {
    this.cod = cod;
    this.name = name;
    this.price = price;
  }
}
