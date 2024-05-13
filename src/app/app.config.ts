import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { providePaginatorTranslations } from "@core/paginator-translations";

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes, withComponentInputBinding()),
      provideAnimationsAsync(),
      provideHttpClient(withFetch()),
      providePaginatorTranslations(),
  ]
};
