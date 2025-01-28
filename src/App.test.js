import { render, screen } from '@testing-library/react';
import App from './App';
import data from "./data.json";

test('aplicar tema por defecto', () => {
  // Mock `window.matchMedia`
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });

  render(<App />);

  const htmlElement = document.documentElement;
  const appliedTheme = htmlElement.getAttribute('data-theme');

  expect(['light', 'dark']).toContain(appliedTheme);
<<<<<<< HEAD
=======
});

test('renderiza toda la informacion', () => {
  render(<App />);

  // Verificar que los componentes clave están presentes
  expect(screen.getByText(data.info.name)).toBeInTheDocument(); // Header
  expect(screen.getByText(data.experience[0].company)).toBeInTheDocument(); // ExperienceSection
  expect(screen.getByText(data.skills[0].name)).toBeInTheDocument(); // SkillsSection
  expect(screen.getByText(data.education[0].degree)).toBeInTheDocument(); // EducationSection
>>>>>>> 1e64459e6a3781a58059a67e06a7afb1768c64d6
});

test('renderiza toda la informacion', () => {
  render(<App />);

  // Verificar que los componentes clave están presentes
  expect(screen.getByText(data.info.name)).toBeInTheDocument(); // Header
  expect(screen.getByText(data.experience[0].company)).toBeInTheDocument(); // ExperienceSection
  expect(screen.getByText(data.skills[0].name)).toBeInTheDocument(); // SkillsSection
  expect(screen.getByText(data.education[0].degree)).toBeInTheDocument(); // EducationSection
});