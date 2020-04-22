export interface Task {
    id: number;
    title: string;
    description: string;
}

export type TaskStatus = 'TODO' | 'IN PROGRESS' | 'DONE';
