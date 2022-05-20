import Tasks from '../database/models/tasks';

class TasksService {
  private _task;

  constructor() { this._task = Tasks; }

  public async getTasks(userId: number) {
    const tasks = await this._task.findAll({ where: { user_id: userId } });
    return tasks;
  }
}

export default new TasksService();
