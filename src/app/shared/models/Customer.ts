import { Person } from "./Person";
import { Equipment } from "./Equipment";
import { Address } from "./Address";


export interface Customer {
  id: number,
  name: string;
  accountNumber: string;
  notes?: string;
  salesperson?: Person;
  dateInstalled: Date;
  serviceTermInMonths: number;
  installedSystem?: Equipment;
  billingAddress?: Address;
  serviceAddress?: Address;
  salestax: number;
  phone: string;
  email: string;
  equipment: string;
  contacts?: Person[]
}