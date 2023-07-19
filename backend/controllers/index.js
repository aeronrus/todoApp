import { db } from '../connect.js';
import moment from 'moment/moment.js';

export const getTodos = (req, res) => {
  const q = `SELECT * FROM todos`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addTodo = (req, res) => {
  const q = 'INSERT INTO todos (`desc`, `done`, `createdAt`) VALUES (?)';
  const values = [req.body.desc, req.body.done, moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json('Задание добавлено');
  });
};

export const deleteAll = (req, res) => {
  const q = `DELETE FROM todos`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    2;
    return res.status(200).json('Все задачи удалены');
  });
};

export const deleteTodo = (req, res) => {
  const q = 'DELETE FROM todos WHERE `id` = ?';

  db.query(q, [req.query.id], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json('Вы удалили задачу');
  });
};

export const patchTodo = (req, res) => {
  const q = 'UPDATE todos SET `done`=? WHERE id=?';

  db.query(q, [req.body.status, req.body.id], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json('Вы выполнили задачу');
  });
};
