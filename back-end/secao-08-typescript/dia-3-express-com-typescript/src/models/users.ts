import { RowDataPacket } from 'mysql2/promise';
import User from '../types/user';
import connection from './connection';

export const getAll = async () => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `SELECT * FROM Users;`
  );
  return result as User[];
}
