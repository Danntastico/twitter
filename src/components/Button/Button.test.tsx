import Button from '.'
import { render, screen } from '@testing-library/react'
describe('Text Button', () => { 
  test('Should render a filled button', () => { 
    render(<Button>Tweet!</Button>) 
    const filledBtn = screen.getByText('Tweet!')
    const styled = window.getComputedStyle(filledBtn)
    
    expect(filledBtn).toBeInTheDocument()
    //TODO figure out how to assert styles on 
    //expect(filledBtn).toHaveStyle('background-color: green;')
  })
})
