export class ProductDTO {
  readonly name: string;
  readonly description: string;
  readonly price: number;

  constructor() {
    this.name = '';
    this.description = '';
    this.price = 0;
  }
}
