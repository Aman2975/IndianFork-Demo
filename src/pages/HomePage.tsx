import { useState, useEffect, useRef, useCallback } from 'react';
import OffersBanner from '../components/OffersBanner';
import Sidebar from '../components/Sidebar';
import FoodCard from '../components/FoodCard';
import { categories, menuItems } from '../data/menuData';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scrollspy: detect which section is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach(cat => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCategory(cat.id);
          }
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const handleCategoryClick = useCallback((categoryId: string) => {
    const el = sectionRefs.current[categoryId];
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Offers */}
      <OffersBanner />

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-6">
          {/* Sidebar */}
          <Sidebar
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />

          {/* Main Menu Sections */}
          <div className="flex-1 min-w-0">
            {categories.map(cat => {
              const items = menuItems.filter(item => item.category === cat.id);
              if (items.length === 0) return null;

              return (
                <section
                  key={cat.id}
                  id={`section-${cat.id}`}
                  ref={el => { sectionRefs.current[cat.id] = el; }}
                  className="mb-10 scroll-mt-36"
                >
                  <h2 className="section-title flex items-center gap-3">
                    <span className="text-3xl">{cat.emoji}</span>
                    <span>{cat.name}</span>
                    <span className="ml-auto text-sm font-normal text-medium-gray">
                      {items.length} item{items.length !== 1 ? 's' : ''}
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {items.map(item => (
                      <FoodCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
