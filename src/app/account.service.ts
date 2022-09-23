import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'TestAccout',
          status: 'inactive'
        },
        {
          name: 'HiddenAccount',
          status: 'unknown'
        }
      ];
      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) {}

      addAccount(name: string, status: string) {
        this.loggingService.logStatusChanged(status);
        this.accounts.push({name: name, status: status});
      }

      updateSatus(id: number, status: string) {
        this.loggingService.logStatusChanged(status);
        this.accounts[id].status = status;
      }
}