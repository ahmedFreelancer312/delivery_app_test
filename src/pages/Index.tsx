import { useState } from 'react';
import { motion } from 'framer-motion';
import { RESTAURANTS, CATEGORIES } from '@/data/restaurants';
import RestaurantCard from '@/components/RestaurantCard';
import Header from '@/components/Header';
import { Truck } from 'lucide-react';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const filtered = activeCategory === 'الكل'
    ? RESTAURANTS
    : RESTAURANTS.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="container pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
           من كفر شكر
            <br />
            <span className="text-primary">لحد باب بيتك.</span>
          </h1>
          <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
            <Truck className="w-4 h-4" strokeWidth={1.5} />
            <span>إطلبها … وسيبها علينا</span>
          </div>
        </motion.div>
      </section>

      {/* Category Chips */}
      <section className="container pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Restaurant Grid */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((restaurant, index) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg font-bold">مفيش مطاعم في التصنيف ده حالياً</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
