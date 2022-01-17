import { create } from "domain"

export interface IFactory<TClass>{
     create(...args) : TClass;
}