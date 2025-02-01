import '@testing-library/jest-dom/vitest';
import ReactDOM from 'react-dom';
import * as React from 'react';
import { vi } from 'vitest';

// Forzamos un mock de React para que startTransition sea una función
vi.mock('react', async () => {
  const actualReact = await vi.importActual('react');
  return {
    ...actualReact,
    // Sobrescribimos startTransition para que simplemente ejecute el callback
    startTransition: (callback: () => void) => callback(),
  };
});

// Workaround to fix vitest timers for `waitFor` in `@testing-library/react`
// Issue: https://github.com/testing-library/react-testing-library/issues/1197
globalThis.jest = {
  ...globalThis.jest,
  advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
};

// Sobrescribir ReactDOM.render si no está definido (compatibilidad con React 18)
if (!ReactDOM.render) {
  ReactDOM.render = (element: React.ReactElement, container: Element) => {
    const root = ReactDOM.createRoot(container);
    root.render(element);
  };
}

// Si no existe startTransition, lo definimos de forma básica para que no falle.
if (typeof React.startTransition !== 'function') {
  try {
    // Definir startTransition solo si no existe en React
    Object.defineProperty(React, 'startTransition', {
      value: (callback: () => void) => callback(),
      writable: true,
      configurable: true,
    });
  } catch (error) {
    console.warn('No se pudo definir React.startTransition:', error);
  }
} else {
  // Si ya es una función, no hacemos nada
  console.info('React.startTransition ya está definido.');
}
