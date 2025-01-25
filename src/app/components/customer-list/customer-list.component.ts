import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { ClientServiceService } from '../../services/client/client-service.service';


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  
  limitForPage:number = 5;
  currentPage!:number;
  countPage!:number;
  pages!: number[];

  countClient!: any;
  customerList!:Array<Customer>;
  

  constructor(private clientService: ClientServiceService){
    this.currentPage = 1;
    this.countClient = null;
  }
  ngOnInit(){
    this.getCountClients();
    this.getCustomers();
  }


  getCustomers(page?:number, offset?: number, limit?: number):void{
    this.customerList = new Array<Customer>();
    this.clientService.getClients(page, offset, limit).subscribe(
      (res:any)=>{
        res.datos.forEach((element:any)=>{
          let customer: Customer = new Customer();
          Object.assign(customer, element);
          this.customerList.push(customer);

        });
      },
      error => {console.log("Error al obtener los clientes");
      }
    );
  }
  
  getCountClients():void{
    this.clientService.getCountClients().subscribe(
      async (res:any)=>{
        this.countClient = await res.datos;
        this.countPage = Math.ceil(this.countClient / this.limitForPage);
        this.pages = Array.from({ length: this.countPage }, (_, i) => i + 1);
        console.log(this.pages);
        
        console.log(this.countPage);
      },
      error=>{console.log("Error al obtener la cantidad de clientes");
      }
    );
  }

  getPage(page:number):void{
    console.log("pidiendo la pagina: "+page);
    this.getCustomers(page-1, this.limitForPage, undefined);
    this.currentPage = page;
  }
}
