import { RowDataPacket } from 'mysql2/promise';

interface User extends RowDataPacket {
  id?: number,
  name: string,
  email: string,
  password: string,
}

export default User;
