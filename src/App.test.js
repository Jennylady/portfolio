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


test('renders education and LinkedIn profile', () => {
  localStorage.removeItem('portfolio-language');
  render(<App />);
  expect(screen.getByRole('heading', { name: /Academic background/i })).toBeInTheDocument();
  expect(screen.getByText(/Master 2 in Systems and Network Administration/i)).toBeInTheDocument();
  const linkedinLinks = screen.getAllByRole('link', { name: /LinkedIn/i });
  expect(linkedinLinks.length).toBeGreaterThan(0);
  expect(linkedinLinks[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/ladydi-jennysca-711650319/');
});

test('renders professional experience including current CEO role', () => {
  localStorage.removeItem('portfolio-language');
  render(<App />);
  expect(screen.getByRole('heading', { name: /From operations/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /CEO & Cybersecurity Expert/i })).toBeInTheDocument();
  expect(screen.getByText('IKOM Entreprise')).toBeInTheDocument();
  expect(screen.getByText(/JAN 2026 — PRESENT/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /DevSecOps Intern/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Systems & Network Administration Intern/i })).toBeInTheDocument();
});
