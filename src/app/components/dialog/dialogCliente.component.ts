import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/models/response";
import { ApiclienteService } from "src/app/services/apicliente.service";
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-dialog-cliente',
    templateUrl: './dialogCliente.component.html',
})
export class DialogClienteComponent{
    constructor(
        public dialogRef: MatDialogRef<DialogClienteComponent>,
        private clienteService: ApiclienteService,
        public snackBar: MatSnackBar
    ){ }

    closeDialog(){
        this.dialogRef.close();
    }

    addCliente(){
        const cliente: Cliente = ({
            id : 0,
            nombre: 'Juan',
            email: 'juan@gmail.com',
           telefono: '123456789',
        });


        this.clienteService.add(cliente).subscribe( respuesta =>{
            if( respuesta.exito === 1){
                this.snackBar.open('Cliente agregado', 'Cerrar', {
                    duration: 2000
                });

                this.dialogRef.close();
            }
            else{
                this.snackBar.open('Error al agregar cliente', 'Cerrar', {
                    duration: 2000
                });
            }
        });
    }
}