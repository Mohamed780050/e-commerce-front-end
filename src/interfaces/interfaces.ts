import { AxiosRequestConfig } from "axios";

export interface ProductCart {
  id: string;
  title: string;
  price: number;
  descrption: string;
  img: string;
  stock: number;
  trader: string;
  catagory: string[];
  company: string;
  amount: number;
}
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  img: string;
  stock: number;
  trader: string;
  catagory: string[];
  company: string;
}
export interface IAuthentcatedQueery {
  queryKey: string[];
  url: string;
  config?: AxiosRequestConfig;
}
