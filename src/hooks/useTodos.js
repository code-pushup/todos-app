import { useCallback, useEffect, useState } from 'react';
import { useTodosFilter } from './useTodosFilter';

export const useTodos = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(respData => {
        setData(respData);
        setLoading(false);
      });
  }, []);

  const onCreate = useCallback(title => {
    const body = JSON.stringify({
      title,
      complete: false,
    });

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body,
    })
      .then(resp => resp.json())
      .then(({ id }) => {
        setData(arr => [...arr, { id, title, complete: false }]);
      });
  }, []);

  const onEdit = useCallback(todo => {
    setData(arr => arr.map(t => (t.id === todo.id ? todo : t)));
    fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
    });
  }, []);

  const { todos, setQuery, setHideComplete } = useTodosFilter(data);

  return {
    loading,
    todos,
    onCreate,
    onEdit,
    setQuery,
    setHideComplete,
  };
};
