import { toast } from 'react-toastify';

export interface ToastAbstract {
  error: (message: string) => void;
  success: (message: string) => void;
}

export class ReactToastify implements ToastAbstract {
  success(message: string): void {
    toast.success(message);
  }

  error(message: string): void {
    toast.error(message);
  }
}
