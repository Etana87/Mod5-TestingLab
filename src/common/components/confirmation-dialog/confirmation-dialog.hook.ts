import { useState } from 'react';

export function useConfirmationDialog() {
  const [isVisible, setIsVisible] = useState(false);

  const showDialog = () => setIsVisible(true);
  const hideDialog = () => setIsVisible(false);

  return {
    isVisible,
    showDialog,
    hideDialog
  };
}
