import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '@/store/useCart';
import type { MenuItem } from '@/data/restaurants';
import { toast } from 'sonner';

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
}

const MenuItemCard = ({ item, restaurantId, restaurantName }: MenuItemCardProps) => {
  const { items, addItem, updateQuantity, removeItem } = useCart();
  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem({
      id: item.id,
      name_ar: item.name_ar,
      price: item.price,
      restaurantId,
      restaurantName,
    });
    toast.success(`تمت إضافة ${item.name_ar} للسلة`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-3 flex gap-3 items-center"
    >
      <img
        src={item.image}
        alt={item.name_ar}
        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-foreground text-sm truncate">{item.name_ar}</h4>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.desc}</p>
        <p className="text-primary font-bold text-sm mt-1 font-mono tabular-nums">{item.price} ج.م</p>
      </div>
      <div className="flex-shrink-0 flex items-center gap-2">
        {quantity > 0 ? (
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => quantity === 1 ? removeItem(item.id) : updateQuantity(item.id, quantity - 1)}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground"
            >
              <Minus className="w-4 h-4" strokeWidth={1.5} />
            </motion.button>
            <span className="font-bold text-foreground font-mono w-5 text-center tabular-nums">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleAdd}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
            >
              <Plus className="w-4 h-4" strokeWidth={1.5} />
            </motion.button>
          </div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleAdd}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
          >
            <Plus className="w-5 h-5" strokeWidth={1.5} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
