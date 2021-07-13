import { InjectionToken } from '@angular/core';

export interface NfConfig {
  appId?: string;
  env?: any;
};

export const NF_CONFIG_TOKEN = new InjectionToken<NfConfig>('NF_CONFIG');
