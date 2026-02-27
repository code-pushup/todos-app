import { useMemo, useState } from 'react';

export const useTodosFilter = data => {
  const [query, setQuery] = useState('');
  const [hideComplete, setHideComplete] = useState(false);

  const todos = useMemo(
    () =>
      data.filter(todo => {
        if (query && !todo.title.toLowerCase().includes(query.toLowerCase())) {
          return false;
        }
        if (hideComplete && todo.complete) {
          return false;
        }
        return true;
      }),
    [data, query, hideComplete]
  );

  return {
    todos,
    setQuery,
    setHideComplete,
  };
};
