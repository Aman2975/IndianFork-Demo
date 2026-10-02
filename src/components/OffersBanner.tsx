import { useState, useRef, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { offers } from '../data/menuData';

export default function OffersBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.children[0]?.clientWidth || 0;
    container.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  const next = useCallback(() => {
    const nextIndex = (activeIndex + 1) % offers.length;
    scrollTo(nextIndex);
  }, [activeIndex, scrollTo]);

  const prev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + offers.length) % offers.length;
    scrollTo(prevIndex);
  }, [activeIndex, scrollTo]);

  // Auto-scroll
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const nextIndex = (prev + 1) % offers.length;
        if (scrollRef.current) {
          const itemWidth = scrollRef.current.children[0]?.clientWidth || 0;
          scrollRef.current.scrollTo({ left: itemWidth * nextIndex, behavior: 'smooth' });
        }
        return nextIndex;
      });
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Update active index on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const itemWidth = container.children[0]?.clientWidth || 1;
      const index = Math.round(container.scrollLeft / itemWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-4 md:py-6" aria-label="Special offers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="carousel-container flex gap-4"
          >
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="carousel-item w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] min-w-[280px]"
              >
                <div
                  className={`bg-gradient-to-br ${offer.gradient} rounded-2xl p-6 md:p-8 text-white relative overflow-hidden h-[160px] md:h-[180px] flex flex-col justify-between card-hover cursor-pointer`}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full"></div>

                  <div className="relative z-10">
                    <span className="text-3xl">{offer.emoji}</span>
                    <h3 className="text-lg md:text-xl font-bold mt-2 leading-snug">{offer.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{offer.subtitle}</p>
                  </div>

                  <button className="relative z-10 self-start bg-white text-primary font-semibold text-sm px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 mt-2">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous offer"
          >
            <FiChevronLeft className="w-5 h-5 text-dark-gray" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next offer"
          >
            <FiChevronRight className="w-5 h-5 text-dark-gray" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50'
              }`}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
