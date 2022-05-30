import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/response';
import { ApiclienteService } from 'src/app/services/apicliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor( private clientaService: ApiclienteService) { }
  clientes!: Cliente[];
  columnas: string[] = ['id', 'nombre', 'telefono', 'email'];

  ngOnInit() {
    this.getClientes();
  }
  
  getClientes(){
    
    this.clientaService.getClientes().subscribe( respuesta =>{
      console.log(respuesta.data);
      this.clientes = respuesta.data;
    });
  }

}
