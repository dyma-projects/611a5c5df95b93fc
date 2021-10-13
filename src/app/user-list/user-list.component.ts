import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  private subscribtion: Subscription;

  constructor(
    // il faut probablement injecter un service ici !
    private userService: UserService
  ) { }

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.subscribtion = this.userService.users$.subscribe((users) => this.users = users);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
