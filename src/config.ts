import { LOG_LEVEL as LL } from './utils/Logger';
import { readFileSync } from 'fs';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 8080;
export const DB_URL =
  process.env.DB_URL ||
  readFileSync(process.env.DB_URL_FILE || '', { encoding: 'utf-8' }) ||
  'mongodb://localhost:27017/';
export const LOG_LEVEL =
  process.env.NODE_ENV === 'development' ? LL.INFO : LL.ERROR;
export const DEFAULT_ROUTE = '/teamboards';
