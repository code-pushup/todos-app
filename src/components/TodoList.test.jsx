import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import TodoList from './TodoList';

vi.useFakeTimers().setSystemTime(new Date('2025-01-01'));

describe('TodoList', () => {
  const todos = [
    {
      id: 1,
      title: 'Buy milk',
      complete: false,
      dueDate: '2025-01-02',
    },
    {
      id: 2,
      title: 'Clean house',
      complete: true,
      dueDate: null,
    },
  ];

  it('renders todos with correct titles and due dates', () => {
    const onEdit = vi.fn();
    render(<TodoList todos={todos} onEdit={onEdit} />);

    expect(screen.getByText('Buy milk')).toBeInTheDocument();
    expect(screen.getByText(/due in a day/i)).toBeInTheDocument();
    expect(screen.getByText('Clean house')).toBeInTheDocument();
  });

  it('calls onEdit with updated complete status when checkbox is toggled', () => {
    const onEdit = vi.fn();
    render(<TodoList todos={todos} onEdit={onEdit} />);

    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstCheckbox);

    expect(onEdit).toHaveBeenCalledWith({
      ...todos[0],
      complete: true,
    });
  });
});
