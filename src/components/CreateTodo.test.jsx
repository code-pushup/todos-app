import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import CreateTodo from './CreateTodo';

describe('CreateTodo', () => {
  it('calls onCreate with input value and clears input on submit', () => {
    const handleCreate = vi.fn();

    render(<CreateTodo onCreate={handleCreate} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.input(input, { target: { value: 'Buy milk' } });
    expect(input.value).toBe('Buy milk');

    fireEvent.click(button);

    expect(handleCreate).toHaveBeenCalledWith('Buy milk');
    expect(input.value).toBe('');
  });
});
