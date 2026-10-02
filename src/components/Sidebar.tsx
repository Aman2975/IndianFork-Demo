import { categories } from '../data/menuData';

interface SidebarProps {
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

/** Desktop: vertical sticky sidebar (hidden below lg) */
export function DesktopSidebar({ activeCategory, onCategoryClick }: SidebarProps) {
  return (
    <aside
      className="hidden lg:block sticky top-[88px] h-[calc(100vh-88px)] w-56 flex-shrink-0 overflow-y-auto py-4 pr-2"
      aria-label="Menu categories"
    >
      <h2 className="text-xs font-bold text-medium-gray uppercase tracking-widest px-4 mb-3">
        Categories
      </h2>
      <nav className="space-y-1">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-3 group ${
              activeCategory === cat.id
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'text-dark-gray hover:bg-light-orange hover:text-primary'
            }`}
            aria-current={activeCategory === cat.id ? 'true' : undefined}
          >
            <span className="text-lg group-hover:scale-110 transition-transform">{cat.emoji}</span>
            <span>{cat.name}</span>
            {activeCategory === cat.id && (
              <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}

/** Mobile: horizontal scrollable category bar (hidden on lg+) */
export function MobileCategoryBar({ activeCategory, onCategoryClick }: SidebarProps) {
  return (
    <div className="lg:hidden sticky top-[120px] md:top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="category-scroll flex gap-2 px-4 py-3">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.id
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-light-gray text-dark-gray hover:bg-light-orange hover:text-primary'
            }`}
            aria-current={activeCategory === cat.id ? 'true' : undefined}
          >
            <span>{cat.emoji}</span>
            <span className="whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/** Default export for backward compatibility */
export default function Sidebar(props: SidebarProps) {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileCategoryBar {...props} />
    </>
  );
}
