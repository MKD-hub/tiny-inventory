import { create } from 'zustand';
import { item, itemState } from './types/types';

interface BearState {
  bears: number
}

const useStore = create<itemState>((set) => ({
  items: [],
  setItems: (fetchedItems: item[]) => set({ items: fetchedItems }),
  addItem: (item: item) => set(prev => ({ items: [...prev.items, item] }))
}))

export default useStore;