import { useState, useEffect, useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';
import type { MenuItem } from '../data/menuData';

interface FoodCardProps {
  item: MenuItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
        {/* Veg/Non-veg badge */}
        <div
          className={`absolute top-3 left-3 w-6 h-6 rounded-sm border-2 flex items-center justify-center bg-white ${
            item.isVeg ? 'border-veg' : 'border-non-veg'
          }`}
          aria-label={item.isVeg ? 'Vegetarian' : 'Non-vegetarian'}
        >
          <span
            className={`w-3 h-3 rounded-full ${
              item.isVeg ? 'bg-veg' : 'bg-non-veg'
            }`}
          ></span>
        </div>

        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
          <span className="text-primary font-bold text-lg">₹{item.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-dark-gray text-base leading-tight">{item.name}</h3>
        <p className="text-medium-gray text-sm mt-1 line-clamp-1">{item.description}</p>

        {/* Add to Cart / Quantity Controls */}
        <div className="mt-4">
          {quantity === 0 ? (
            <button
              onClick={() => addItem(item)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 active:scale-95 group"
              aria-label={`Add ${item.name} to cart`}
            >
              <FiPlus className="w-4 h-4 transition-transform group-hover:rotate-90" />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-between bg-primary rounded-xl px-1 py-1">
              <button
                onClick={() => updateQuantity(item.id, quantity - 1)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors active:scale-90"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <FiMinus className="w-4 h-4" />
              </button>
              <span className="text-white font-bold text-lg min-w-[40px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, quantity + 1)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors active:scale-90"
                aria-label={`Increase quantity of ${item.name}`}
              >
                <FiPlus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
