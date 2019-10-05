import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import App from './App';
import Display from './components/Display'
import Dashboard from './components/Dashboard'


test('renders without crashing', () => {
  render(<App />);
})

// * Testing Display.js
test('Strike header is found', () => {
  const { getByText } = render(<Display />);

  getByText(/Strike/i)
})



//* Testing Dashboard.js
// test by Id
test('Strike button works', () => {
  const { getByTestId } = render(<Dashboard />)

  fireEvent.click(getByTestId("strike-counter"))
})

// test by text header
test("Ball button works", () => {
  const { getByText } = render(<Dashboard />);

  fireEvent.click(getByText('Ball Counter'))
})


// test by event click
test("Foul button to works", () => {
  const { getByText } = render(<Dashboard />)

  fireEvent.click(getByText("Foul"), {target: {value: '2'}})
})

// test by event click
test("Hit button works", () => {
  const { getByTestId, getByText } = render(<App />)
  
  console.log(fireEvent.click(getByText("Hit")))

  console.log(getByTestId("ball-counter"))
  // expect(getByTestId("ball-counter")).toBe({})

  



})