// ExampleComponent.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent'; // Import the component to test

// Test suite for ExampleComponent
describe('ExampleComponent', () => {
  // Test case: rendering of the component
  it('renders the component', () => {
    render(<ExampleComponent />);
    const element = screen.getByText('Example Component'); // Adjust the text as per your component
    expect(element).toBeInTheDocument(); // Assert that the element is in the document
  });

  // Add more test cases as needed
});