export interface FormConfig {
  name?: string | null;
  enctype?: 'multipart/form-data' | 'application/x-www-form-urlencoded' | 'text/plain';
}
