import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogMessageComponent } from './../registry/dialogs/dialog-message/dialog-message.component';
import { DialogMessageYesnoComponent } from './../registry/dialogs/dialog-message-yesno/dialog-message-yesno.component';


@Injectable({
  providedIn: 'root'
})
export class MethodService {

  constructor(public dialog: MatDialog) { }

  openMegsDialog(diaWidth: string, megs: string): void 
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width= diaWidth;
    dialogConfig.data = {message: megs};//{message1: megs1, message2: megs2}

    this.dialog.open(DialogMessageComponent, dialogConfig);
  }
  
  openMegsYesNoDialog(diaWidth: string, megs: string, objMethod: any): void 
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width= diaWidth;
    dialogConfig.data = {message: megs};

    const dialogRef = this.dialog.open(DialogMessageYesnoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
          //objMethod
          console.log("result=="+result)
      }
    });
  }

}
