import { render, screen } from '@testing-library/react' 
import GitHubCard from '../GitHubCard.js'

test('should render GitHub component', () => {
  render(<GitHubCard/>);
  const todoElement = screen.getByTestId('gitHubCard-1')
  expect(todoElement).toBeInTheDocument()
  
})