import { Validator } from './validator';

export interface FieldConfig {
  label?: string | null;
  name?: string | null;
  inputType?: string | null;
  options?: string[] | null;
  collections?: any | null;
  type: string;
  value? : any | null;
  validations? : Validator[] | null;
  col?: number | null;
  color?: string | null;
}
