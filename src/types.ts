// src/types.ts
export interface Task {
  id: string;
  text: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  icon: string;
  title: string;
  columns: Column[];
}