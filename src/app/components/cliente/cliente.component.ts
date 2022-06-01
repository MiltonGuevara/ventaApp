import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/response';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { DialogClienteComponent } from '../dialog/dialogCliente.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor( 
    private clienteService: ApiclienteService,
    public dialog: MatDialog
  ) { }

  clientes!: Cliente[];
  columnas: string[] = ['id', 'nombre', 'telefono', 'email'];

  ngOnInit() {
    this.getClientes();
  }
  
  getClientes(){
    
    this.clienteService.getClientes().subscribe( respuesta =>{
      console.log(respuesta.data);
      this.clientes = respuesta.data;
    });
  }

  openAdd(){
    console.log('Agregar');
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      width: '500px'
      
    });
    dialogRef.afterClosed().subscribe(() => {
      this.clienteService.getClientes().subscribe( respuesta =>{  
        this.clientes = respuesta.data;     
      });
  });
  
  }

}
