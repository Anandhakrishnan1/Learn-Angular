import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AccountsService } from './services/accounts.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), AccountsService]
};
