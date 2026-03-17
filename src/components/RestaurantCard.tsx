import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Restaurant } from '@/data/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
  index: number;
}

const RestaurantCard = ({ restaurant, index }: RestaurantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/restaurant/${restaurant.id}`}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card overflow-hidden cursor-pointer group"
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={restaurant.image}
              alt={restaurant.name_ar}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
            <span className="absolute top-3 start-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              {restaurant.category}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-foreground mb-2">{restaurant.name_ar}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-primary" strokeWidth={1.5} />
                <span className="font-mono tabular-nums">{restaurant.rating}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
                <span>{restaurant.time} دقيقة</span>
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;
