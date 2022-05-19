import { Model, STRING, BOOLEAN } from 'sequelize';
import db from '.';
import User from './user';

class Tasks extends Model {
  public id!: string;

  public userId!: string;

  public content!: string;

  public when!: string;

  public done!: boolean;
}

Tasks.init({
  id: { type: STRING, primaryKey: true, allowNull: false },
  userId: { type: STRING, allowNull: false },
  content: { type: STRING, allowNull: false },
  when: { type: STRING, allowNull: false },
  done: { type: BOOLEAN, allowNull: false },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'tasks',
  modelName: 'tasks',
});

Tasks.belongsTo(User, { foreignKey: 'user_id', as: 'tarefasUsuario' });
User.hasMany(Tasks, { foreignKey: 'user_id', as: 'tarefasUsuario' });
