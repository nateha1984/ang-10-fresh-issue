import { CustomersService } from './../../core/customers.service';
import { Customer } from './../../shared/models/Customer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    const id = +this.route.snapshot.params['id'];
    console.log(id);
    this.customerService.getCustomerDetails(id).subscribe(customer => this.customer = customer);
  }

}
