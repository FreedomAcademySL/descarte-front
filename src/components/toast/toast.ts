import { ReactToastify, ToastAbstract } from './react-toastify/react-toastify';

export class Toast implements ToastAbstract {
  error!: (message: string) => void;
  success!: (message: string) => void;
  static toast = new ReactToastify();

  static error(message: string): void {
    this.toast.error(message);
  }

  static success(message: string): void {
    this.toast.success(message);
  }
}
