import { Request, Response, Router } from 'express';
import { TodoService } from './service';

const todoRouter = Router();
const todoRepository = new TodoService();

todoRouter.get('/todos', async (req: Request, res: Response) => {
  try {
    const todos = await todoRepository.getAllTodos();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Can`t get todos' });
  }
});

todoRouter.post('/create', async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  try {
    const todos = await todoRepository.createTodo(data);
    console.log(todos);
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Can`t get todos' });
  }
});
todoRouter.post('/update', async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  try {
    const todos = await todoRepository.updateSingleTodo(data);
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'cant find record' });
  }
});
todoRouter.delete('/delete/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const todos = await todoRepository.deleteTodo(id);
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Some error' });
  }
});
export { todoRouter };
