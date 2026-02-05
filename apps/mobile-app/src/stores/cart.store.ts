import { create } from 'zustand';

interface CartState {
  items: Array<{ id: string; name: string; quantity: number }>;
  addItem: (id: string, name: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  
  addItem: (id, name) => set((state) => {
    const existing = state.items.find((item) => item.id === id);
    if (existing) {
      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return { items: [...state.items, { id, name, quantity: 1 }] };
  }),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  
  clear: () => set({ items: [] }),
}));