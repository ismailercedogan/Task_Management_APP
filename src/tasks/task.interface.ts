import { Document } from 'mongoose';

export interface Task extends Document {
  title: string;
  description?: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
}
