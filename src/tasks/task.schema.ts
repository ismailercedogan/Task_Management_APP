import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title:{type: String, required: true},
  description: {type: String, required: false},
  status:{
    type: String,
    required: true,
    enum: ['OPEN', 'IN_PROGRESS', 'DONE'],
    default: 'OPEN'
  }
});

