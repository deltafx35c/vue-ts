export * from './state';

export interface TableRow {
  date: string;
  name: string;
  address: string;
}

export interface QueryForm {
  name: string;
  region: string;
  date1: string;
  date2: string;
  delivery: boolean;
  type: number[];
  resource: string;
  desc: string;
}

export interface User {
  name: string;
  password: string;
  hello?: (x: string) => void;
  dialogVisible?: boolean;
  openLoginPop?: () => Promise<object>;
}

export interface PromiseHandle {
  resolve: any;
  reject: any;
}

export interface Person {
  id: number;
  first_name: string;
  last_name: string;
  contact: Contact;
  gender: string;
  ip_address: string;
  avatar: string;
  address: Address;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Address {
  city: string;
  country: string;
  postalCode: string;
  state: string;
  street: string;
}
