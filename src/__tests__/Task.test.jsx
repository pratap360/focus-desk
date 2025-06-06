// src/__tests__/Task.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import Task from '../components/Task';

describe('Task Component', () => {
  test('renders task list', () => {
    render(<Task />);
    expect(screen.getByText("TODO's")).toBeInTheDocument();
  });

  test('can add new task', () => {
    render(<Task />);
    const input = screen.getAllByPlaceholderText(/Task \d/)[0];
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
  });

  test('can mark task as complete', () => {
    render(<Task />);
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});