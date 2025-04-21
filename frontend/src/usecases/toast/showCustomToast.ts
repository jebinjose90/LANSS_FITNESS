import { toast } from 'react-hot-toast';
import toastTypeConstants from '../../core/constants/toastTypeConstants';

type ToastType = keyof typeof toastTypeConstants

export const showCustomToast = (message: string, type: ToastType) => {
  toast[type](message, {
    duration: 750,
    className: 'bg-color1 text-color3 font-bold p-4 rounded-lg shadow-lg',
  });
};
