import { vi } from 'vitest';
import * as React from 'react';

// Mock de startTransition para evitar el error
vi.spyOn(React, 'startTransition').mockImplementation(() => {});