import { Validator } from './validator';

export interface FieldConfig {
  label?: string | null;
  placeholder?: string | null;
  name?: string | null;
  inputType?: string | null;
  options?: any[] | null;
  collections?: any | null;
  type: string;
  value?: any | null;
  validations?: Validator[] | null;
  col?: number | null;
  color?: string | null;
}
