import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog){}


openDialog(): void {
  const dialogRef = this.dialog.open(MyDialogComponent, {
    width: '250px',
    data: {
      myVar: 'myvar',
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
  });
}
}