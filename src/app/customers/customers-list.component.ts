import { Customer } from '../shared/models/Customer';
import { CustomersService } from '../core/customers.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];
  tableCols = ['acctNumber', 'name', 'contactName', 'phone', 'serviceAddress', 'system'];
  searchParam = 'contactName'
  searchOptions = [{
    value: 'contactName',
    display: 'Contact Name'
  },
  {
    value: 'phoneNumber',
    display: 'Phone Number'
  }, 
  {
    value: 'acctNumber',
    display: 'Account Number'
  },
  {
    value: 'serviceCity',
    display: 'City'
  }];
  searchValue = '';

  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    console.log("loading..")
    this.customersService.getAllCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    })
  }

  onSearch() {
    let search;
    if (this.searchValue.trim() === '') {
      search = this.customersService.getAllCustomers();
    } else {
      search = this.customersService.getCustomersBySearchParam(this.searchParam, this.searchValue);
    }
    search.subscribe((results: Customer[]) => {
      this.customers = results;
    });
  }

  onRowClick(customerId) {
    console.log(customerId);
    this.router.navigateByUrl(`customers/${customerId}`);
  }
}
