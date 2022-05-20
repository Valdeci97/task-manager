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
    return JWT.validateToken(token);
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
}

export default new TasksService();
