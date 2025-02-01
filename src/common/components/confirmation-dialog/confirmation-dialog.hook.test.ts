import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog', () => {
  it('should return the initial state of isVisible as false', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    
    expect(result.current.isVisible).toBe(false);
  });

  it('should show the dialog when showDialog is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.showDialog();
    });

    expect(result.current.isVisible).toBe(true);
  });

  it('should hide the dialog when hideDialog is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.showDialog();
    });

    act(() => {
      result.current.hideDialog();
    });

    expect(result.current.isVisible).toBe(false);
  });
});
