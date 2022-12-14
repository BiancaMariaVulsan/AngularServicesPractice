import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountService) {}

  onSet(status: string) {
    this.accountsService.updateSatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
