import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/store/useCart';

interface CartSheetProps {
  open: boolean;
  onClose: () => void;
}

const CartSheet = ({ open, onClose }: CartSheetProps) => {
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCart();
  const total = getTotal();

  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    if (!acc[item.restaurantName]) acc[item.restaurantName] = [];
    acc[item.restaurantName].push(item);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 end-0 h-full w-full max-w-md bg-card border-s border-border z-50 flex flex-col"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                السلة
              </h2>
              {items.length > 0 && (
                <button onClick={clearCart} className="text-xs text-destructive hover:underline">
                  مسح الكل
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-30" strokeWidth={1} />
                  <p className="text-lg font-bold">السلة فاضية</p>
                  <p className="text-sm mt-1">اختار أكلك المفضل وابدأ الطلب</p>
                </div>
              ) : (
                Object.entries(grouped).map(([resName, resItems]) => (
                  <div key={resName} className="space-y-2">
                    <h3 className="text-sm font-bold text-muted-foreground">{resName}</h3>
                    {resItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 bg-secondary/50 rounded-lg p-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold truncate">{item.name_ar}</p>
                          <p className="text-xs text-primary font-mono tabular-nums">{item.price * item.quantity} ج.م</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => item.quantity === 1 ? removeItem(item.id) : updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center"
                          >
                            {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-destructive" /> : <Minus className="w-3.5 h-3.5" />}
                          </button>
                          <span className="font-mono tabular-nums w-4 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 border-t border-border space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">حساب الأكل</span>
                  <span className="font-mono tabular-nums font-bold">{total} ج.م</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">التوصيل</span>
                  <span className="font-mono tabular-nums">٢٠ ج.م</span>
                </div>
                <div className="flex justify-between text-base font-bold border-t border-border pt-2">
                  <span>الإجمالي</span>
                  <span className="text-primary font-mono tabular-nums">{total + 20} ج.م</span>
                </div>
                <Link to="/checkout" onClick={onClose}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-xl mt-2"
                  >
                    إتمام الطلب
                  </motion.button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSheet;
