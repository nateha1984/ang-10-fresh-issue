import { Customer } from './../shared/models/Customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return new Observable((observer) => {
      const cust: Customer = {
        name: 'Customer',
        id: 1,
        accountNumber: '1',
        dateInstalled: new Date(),
        serviceTermInMonths: 1,
        salestax: 0.06,
        phone: '888-888-8888',
        email: 'email@test.com',
        equipment: '1 widget'
      };
      observer.next([cust]);
    });
  }

  getCustomersBySearchParam(param, value): Observable<Customer[]> {
    return new Observable((observer) => {
      const cust: Customer = {
        name: 'Customer',
        id: 1,
        accountNumber: '1',
        dateInstalled: new Date(),
        serviceTermInMonths: 1,
        salestax: 0.06,
        phone: '888-888-8888',
        email: 'email@test.com',
        equipment: '1 widget'
      };
      observer.next([cust]);
    });
  }

  getCustomerDetails(id): Observable<Customer> {
    return new Observable((observer) => {
      const cust: Customer = {
        name: 'Customer',
        id: 1,
        accountNumber: '1',
        dateInstalled: new Date(),
        serviceTermInMonths: 1,
        salestax: 0.06,
        phone: '888-888-8888',
        email: 'email@test.com',
        equipment: '1 widget'
      };
      observer.next(cust);
    });
  }
}
