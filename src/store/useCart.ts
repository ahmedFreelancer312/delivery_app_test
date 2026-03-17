import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name_ar: string;
  price: number;
  restaurantId: string;
  restaurantName: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        const existing = get().items.find(i => i.id === newItem.id);
        if (existing) {
          set({ items: get().items.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i) });
        } else {
          set({ items: [...get().items, { ...newItem, quantity: 1 }] });
        }
      },
      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter(i => i.id !== id) });
        } else {
          set({ items: get().items.map(i => i.id === id ? { ...i, quantity } : i) });
        }
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
      getItemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
    }),
    { name: 'local-delivery-cart' }
  )
);
