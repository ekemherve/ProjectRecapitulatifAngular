import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {User} from '../../../../model/user';
import {Router} from '@angular/router';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dataSource = new MatTableDataSource<User>();

  displayedColumns = ['id', 'username', 'email', 'birthday', 'details', 'update', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  users: User[] = [];

  pageSizeOptions: number[] = [2, 4, 6];

  size: number = this.pageSizeOptions[0];
  page = 0;
  length: number;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.getNumberOfUserInDatabase();
    this.findAllPages();
  }

  findAll() {
    this.userService.findAll().subscribe(owners => {
      this.dataSource.data = owners;
      this.users = owners;
      console.log(JSON.stringify(owners));
    });
  }

  findAllPages() {

    console.log('Size : ' + this.size, 'Page : ' + this.page);
    this.userService.findAllPages(this.page, this.size).subscribe(owners => {
      this.dataSource.data = owners;
      this.users = owners;
      // console.log(JSON.stringify(owners));
    });
  }

  getNumberOfUserInDatabase() {

    this.userService.getnumberOfUsersInDatabase().subscribe(size => {
      this.length = Number(size);
    });
  }

  redirectToDetails(id: number) {

    this.router.navigate(['/user', id]);
  }

  redirectToUpdate(id: number) {

    this.router.navigate(['/update', id]);
  }

  onPageChanges(event: any) {

    this.size = event.pageSize;
    this.page = event.pageIndex;
    console.log('Page : ' + this.page);
    console.log('size : ' + this.size);

    this.findAllPages();
  }

}
