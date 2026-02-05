export interface User {
  id: string;
  phone: string;
  name?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
}

export interface Order {
  id: string;
  status: 'pending' | 'packed' | 'shipped' | 'delivered';
  paymentStatus: 'pending' | 'paid';
  createdAt: string;
}