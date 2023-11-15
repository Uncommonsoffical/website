import { create } from "zustand";

interface StoreType {
  isPC: boolean;
  isIpad: boolean;
  isPhone: boolean;
  setScreenSize: (arg: ScreenSize) => void;
}
interface ScreenSize {
  isPC?: boolean;
  isIpad?: boolean;
  isPhone?: boolean;
}

export const useStore = create<StoreType>((set) => ({
  isPC: false,
  isIpad: false,
  isPhone: false,
  setScreenSize: ({ isPC = false, isIpad = false, isPhone }: ScreenSize) =>
    set((state) => ({ isPC, isIpad, isPhone })),
}));
