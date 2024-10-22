import { Module, Global } from '@nestjs/common';
import { Client } from 'pg';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'db_nest_typeorm',
  password: '1234',
  port: 5432,
});

client.connect();
/* client.query('Select * from tasks', (err, res) => {
  console.error(err);
  console.log(res.rows);
}); */

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useValue: client,
    },
  ],
  exports: ['API_KEY', 'PG'],
})
export class DatabaseModule {}
