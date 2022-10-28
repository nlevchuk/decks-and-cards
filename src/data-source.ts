import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import getDataSourceConfig from './data-source.config';

config();

export const dataSource = new DataSource(getDataSourceConfig());
