import { Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  public id!: string;

  public email!: string;

  public password!: string;
}

User.init({
  id: { type: STRING, allowNull: false, primaryKey: true },
  email: { type: STRING, allowNull: false },
  password: { type: STRING, allowNull: false },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'users',
  modelName: 'users',
});

export default User;
