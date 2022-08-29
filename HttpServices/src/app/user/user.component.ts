import { Component, OnInit } from '@angular/core';
import { User } from '../../../../HttpServices/src/app/models/user';
import { UserService } from '../../../../HttpServices/src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'details'];
  dataSource: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // here observer in angular is lazy so we should use subscribe to get data
    this.userService.get().subscribe((data) => {
      this.dataSource = data as any;

      console.log(this.dataSource);
    });
  }
}
