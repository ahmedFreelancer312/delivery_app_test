import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, MapPin } from 'lucide-react';
import { useCart } from '@/store/useCart';
import CartSheet from './CartSheet';

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { getItemCount } = useCart();
  const count = getItemCount();
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-primary">Flow</span>
            <span className="text-xl font-extrabold text-foreground">Zest</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>كفر شكر</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setCartOpen(true)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary"
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -end-1 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center font-mono"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
