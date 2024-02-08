export interface taskInterface  {
    // Varibles
    taskArray: string[];

    // interface functions
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}