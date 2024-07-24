import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from '../App';

describe('TODO List Heading Group', () => {
  test('H1 TODO Testing', () => {
    // Render the component
    render(<App />);

    // Use `act` to ensure all updates are processed
    act(() => {

    });

    // Assert that the headings are present in the rendered component
    const TodoHeading = screen.getByText('TODO');
    const TodoHeadingSpan = screen.getByText('List');

    expect(TodoHeading).toBeInTheDocument();
    expect(TodoHeadingSpan).toBeInTheDocument();
  });
});
