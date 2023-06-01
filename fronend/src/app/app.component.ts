import { Component } from '@angular/core';
import { AlluserService } from './alluser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlluserService],
})
export class AppComponent {
  title = 'fronend';
  msg: any;
  constructor(private _alluserService: AlluserService) {}
  allrecords: any;
  ngOnInit(): void {
    this.getAllUser();
    // this.msg = this._alluserService.getAllUserRecords();
  }

  getAllUser() {
    this._alluserService.getAllUserRecords().subscribe((res) => {
      this.allrecords = res;
      console.log(this.allrecords);
    });
  }
}
