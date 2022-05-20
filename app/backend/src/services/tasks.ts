import JWT from '../helpers/jwt';
import Tasks from '../database/models/tasks';
import User from '../database/models/user';
import ITask from '../interfaces/task';

class TasksService {
  private _task;

  constructor() { this._task = Tasks; }

  public async getTasks(userId: number) {
    const tasks = await this._task.findAll({ where: { user_id: userId } });
    return tasks;
  }

  public verifyToken(token: string) {
    return JWT.validateToken(token) as User;
  }

  public async createTask(task: ITask) {
    const userExists = User.findOne({ where: { id: task.userId } });
    if (!userExists) return undefined;
    const newTask = {
      id: task.id,
      userId: task.userId,
      content: task.content,
      when: task.when,
      done: task.done,
    };
    await this._task.create(newTask);
    return newTask;
  }

  public async destroyTask(id: string, token: string) {
    try {
      const isValidToken = this.verifyToken(token);
      const userExists = User.findOne({ where: { id: isValidToken.id } });
      if (!userExists) return undefined;
      await this._task.destroy({ where: { id } });
      return 'OK';
    } catch (err) {
      return err;
    }
  }

  public async updateTask(task: ITask) {
    try {
      const userExists = User.findOne({ where: { id: task.id } });
      if (!userExists) return undefined;
      await this._task.update({ ...task }, { where: { id: task.id } });
      return 'OK';
    } catch (err) {
      return err;
    }
  }
}

export default new TasksService();
