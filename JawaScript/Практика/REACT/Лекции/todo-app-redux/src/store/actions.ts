// store/actions.ts
export interface Todo {
    id: number;
    description: string;
    isCompleted: boolean;
  }
  
  // Больше не нужно определять типы действий вручную
  // createSlice сделает это автоматически