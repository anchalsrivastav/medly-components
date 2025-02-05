import { createEvent, createStore } from 'effector';
import { ToastProps } from '../Toast/types';

export type Toast = ToastProps & {
    /** Time after which toast will automatically removed */
    timer?: number;
};

export const addToast = createEvent<Toast>();
export const removeToast = createEvent<number>();

export const toastStore = createStore<Toast[]>([])
    .on(addToast, (state, toast) => {
        const id = Math.floor(Math.random() * 100);
        setTimeout(() => removeToast(id), toast.timer || 5000);
        return [...state, { ...toast, id }];
    })
    .on(removeToast, (state, id) => state.filter(toast => toast.id !== id));
