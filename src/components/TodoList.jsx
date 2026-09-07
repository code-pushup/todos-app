import React from 'react';
import { fromNow } from '../utils';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={event => {
              props.onEdit({
                ...todo,
                complete: event.target.checked,
              });
            }}
          />
          <span
            style={{
              textDecoration: todo.complete ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </span>
          {todo.dueDate && <b> - due {fromNow(dueDate)}</b>}
        </label>
      </li>
    ))}
  </ul>
);

export default TodoList;
