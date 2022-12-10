export interface UserTasks {
  id: string;
  userId: string;
  category: string;
  title: string;
  description: string;
  when: string;
  done: boolean;
  createdAt: string;
}

export interface UserTasksById {
  task: UserTasks;
}

export interface TaskProps {
  id: string;
  category: string;
  title: string;
  description: string;
  when: string;
  done: boolean;
}

export interface createTask {
  userId: string;
  category: string;
  title: string;
  description: string;
  when: string;
  done: boolean;
}
