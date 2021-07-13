import { Inject, Injectable, Optional } from '@angular/core';
import { NfConfig, NF_CONFIG_TOKEN } from './nf-config';

@Injectable({
  providedIn: 'root'
})
export class NgxNomadFormService {

  constructor(@Optional() @Inject(NF_CONFIG_TOKEN) private readonly config: NfConfig | null) { }
}
