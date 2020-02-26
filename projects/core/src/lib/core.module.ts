import { NgModule, ModuleWithProviders } from '@angular/core';
import { TitleService } from './services/title-service/title.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [],
})
export class CoreModule {
  public static forRoot(options: {
    titlePrefix?: string,
  }): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        TitleService,
        { provide: 'TitlePrefix', useValue: options.titlePrefix },
      ]
    };
  }
  constructor(titleService: TitleService) {
    titleService.setTitle();
  }
}
