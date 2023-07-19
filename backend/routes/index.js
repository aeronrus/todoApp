import express from 'express';
import { addTodo, deleteAll, deleteTodo, getTodos, patchTodo } from '../controllers/index.js';

const router = express.Router();

router.get('', getTodos);
router.post('', addTodo);
router.delete('/delete', deleteAll);
router.delete('', deleteTodo);
router.patch('', patchTodo);

export default router;
