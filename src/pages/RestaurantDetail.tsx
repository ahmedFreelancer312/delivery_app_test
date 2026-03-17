import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { RESTAURANTS } from '@/data/restaurants';
import MenuItemCard from '@/components/MenuItemCard';
import Header from '@/components/Header';
import { useCart } from '@/store/useCart';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = RESTAURANTS.find(r => r.id === id);
  const { items, getTotal } = useCart();
  const cartCount = items.reduce((a, i) => a + i.quantity, 0);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-lg">المطعم مش موجود</p>
      </div>
    );
  }

  const menuCategories = [...new Set(restaurant.menu.map(m => m.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name_ar} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <Link
          to="/"
          className="absolute top-4 start-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="container -mt-12 relative z-10 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-2xl font-extrabold">{restaurant.name_ar}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-primary fill-primary" strokeWidth={1.5} />
              <span className="font-mono tabular-nums">{restaurant.rating}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" strokeWidth={1.5} />
              <span>{restaurant.time} دقيقة</span>
            </span>
            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
              {restaurant.category}
            </span>
          </div>
        </motion.div>

        {menuCategories.map((cat, catIdx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <h2 className="text-lg font-bold text-foreground mb-3">{cat}</h2>
            <div className="space-y-3">
              {restaurant.menu
                .filter(m => m.category === cat)
                .map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    restaurantId={restaurant.id}
                    restaurantName={restaurant.name_ar}
                  />
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Cart Bar */}
      {cartCount > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 inset-x-4 md:inset-x-auto md:max-w-md md:mx-auto z-30"
        >
          <Link to="/checkout">
            <div className="bg-primary text-primary-foreground rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-primary/20">
              <div className="flex items-center gap-2">
                <span className="bg-primary-foreground/20 w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm">
                  {cartCount}
                </span>
                <span className="font-bold">عرض السلة</span>
              </div>
              <span className="font-bold font-mono tabular-nums">{getTotal() + 20} ج.م</span>
            </div>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default RestaurantDetail;
