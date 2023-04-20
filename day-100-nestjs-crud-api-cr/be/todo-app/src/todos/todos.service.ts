import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from 'src/modles/todo.model';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto) {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }
    const newTodo = new this.todoModel(createTodoDto);
    const result = await newTodo.save();
    return result;
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  async findOne(id: number) {
    const result = await this.todoModel.findById(id);
    return result;
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    const input = {
      title: 'test',
      completed: 'true',
    };
    const updateTodo = this.todoModel.findOneAndUpdate(
      { _id: id },
      updateTodoDto,
    );
    return updateTodo;
  }

  async remove(id: string) {
    const deleteTodo = this.todoModel.findByIdAndRemove(id);
    return deleteTodo;
  }
}
