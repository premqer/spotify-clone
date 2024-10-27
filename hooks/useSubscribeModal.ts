import { create } from 'zustand';

interface SubsCribeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useSubscribeModal = create<SubsCribeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useSubscribeModal;