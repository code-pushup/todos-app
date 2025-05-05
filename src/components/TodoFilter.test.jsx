import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import TodoFilter from './TodoFilter';

describe('TodoFilter', () => {
  it('calls setQuery when typing in the search input', () => {
    const setQuery = vi.fn();
    const setHideComplete = vi.fn();

    render(
      <TodoFilter setQuery={setQuery} setHideComplete={setHideComplete} />
    );

    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.input(searchInput, { target: { value: 'groceries' } });

    expect(setQuery).toHaveBeenCalledWith('groceries');
  });

  //   it('calls setHideComplete when checkbox is toggled', () => {
  //     const setQuery = vi.fn();
  //     const setHideComplete = vi.fn();

  //     render(
  //       <TodoFilter setQuery={setQuery} setHideComplete={setHideComplete} />
  //     );

  //     const checkbox = screen.getByLabelText(/hide complete/i);
  //     fireEvent.click(checkbox);

  //     expect(setHideComplete).toHaveBeenCalledWith(true);

  //     fireEvent.click(checkbox);
  //     expect(setHideComplete).toHaveBeenCalledWith(false);
  //   });
});
