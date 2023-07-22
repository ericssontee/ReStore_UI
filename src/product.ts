export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  type?: string; // "?" means optional
  brand: string;
  quantityInStock?: number;
}
