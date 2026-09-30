import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders English by default', () => {
  localStorage.removeItem('portfolio-language');
  render(<App />);
  expect(screen.getByText(/I secure systems and build/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true');
});

test('switches the portfolio to French', () => {
  localStorage.removeItem('portfolio-language');
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'FR' }));
  expect(screen.getByText(/Je sécurise les systèmes/i)).toBeInTheDocument();
  expect(screen.getByText('À propos')).toBeInTheDocument();
});

test('interactive terminal executes commands', () => {
  localStorage.removeItem('portfolio-language');
  render(<App />);
  const input = screen.getByRole('textbox', { name: /Terminal command/i });
  input.textContent = 'projects';
  fireEvent.input(input);
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(screen.getByText(/AgriConnect — 1st place Agritech Pitch/i)).toBeInTheDocument();
  expect(screen.getByText(/E-Takalo — 1st place ITOVIA National Hackathon/i)).toBeInTheDocument();
});

test('renders activities', () => {
  localStorage.removeItem('portfolio-language');
  render(<App />);
  expect(screen.getByRole('heading', { name: /Helen Storrow Seminar 2026/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Hackhunt CTF Organization/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Speaker in the WICE Program/i })).toBeInTheDocument();
});


test('terminal can receive direct keyboard focus without a hidden input', () => {
  localStorage.removeItem('portfolio-language');
  render(<App />);
  const terminal = screen.getByRole('region', { name: /Interactive terminal/i });
  const editor = screen.getByRole('textbox', { name: /Terminal command/i });
  fireEvent.click(terminal);
  expect(editor).toHaveFocus();
  expect(editor.tagName).not.toBe('INPUT');
});
