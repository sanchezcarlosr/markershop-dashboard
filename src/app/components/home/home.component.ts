import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../services/client/client-service.service';
import { ProductService } from '../../services/product/product.service';
import { SaleService } from '../../services/sale/sale.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  countClient!: any;
  countProduct!:any;
  countSale!:any;
  constructor(private clientService: ClientServiceService,
    private productService: ProductService,
    private saleService: SaleService){
    this.countClient = null;
    this.countProduct = null;
    this.countSale = null;
  }

  ngOnInit(): void {
    this.getCountClients();
    this.getCountProducts();
    this.getCountSales();
  }

  getCountClients(){
    this.clientService.getCountClients().subscribe(
      (res:any)=>{
        this.countClient = res.datos;
      },
      error=>{console.log("Error al obtener la cantidad de clientes");
      }
    );
  }

  getCountProducts(){
    this.productService.getCountProduct().subscribe(
      (res:any)=>{
        this.countProduct = res.datos;
      },
      error=>{console.log("Error al obtener la cantidad de productos");
      }
    );
  }
  
  getCountSales(){
    this.saleService.getCountSales().subscribe(
      (res:any)=>{
        this.countSale = res.datos
      },
      error=>{console.log("Error al obtener la cantidad de ventas");
      }
    )
  }
}
