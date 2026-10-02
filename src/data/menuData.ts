export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
}

export const categories: Category[] = [
  { id: 'drinks', name: 'Drinks', emoji: '🥤' },
  { id: 'pizzas', name: 'Pizzas', emoji: '🍕' },
  { id: 'breads', name: 'Breads', emoji: '🍞' },
  { id: 'burgers', name: 'Burgers', emoji: '🍔' },
  { id: 'pasta', name: 'Pasta', emoji: '🍝' },
  { id: 'ice-creams', name: 'Ice Creams', emoji: '🍨' },
  { id: 'salads', name: 'Salads', emoji: '🥗' },
  { id: 'desserts', name: 'Desserts', emoji: '🍰' },
  { id: 'starters', name: 'Starters', emoji: '🌮' },
];

export const menuItems: MenuItem[] = [
  // Drinks
  {
    id: 'drink-1',
    name: 'Fresh Lime Soda',
    price: 79,
    description: 'Refreshing lime soda with a hint of mint',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'drinks',
  },
  {
    id: 'drink-2',
    name: 'Mango Smoothie',
    price: 129,
    description: 'Creamy mango smoothie made with fresh Alphonso mangoes',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'drinks',
  },
  {
    id: 'drink-3',
    name: 'Cold Coffee',
    price: 99,
    description: 'Rich and creamy cold coffee with whipped cream',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'drinks',
  },
  {
    id: 'drink-4',
    name: 'Iced Tea',
    price: 89,
    description: 'Chilled lemon iced tea with fresh herbs',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'drinks',
  },

  // Pizzas
  {
    id: 'pizza-1',
    name: 'Margherita Pizza',
    price: 199,
    description: 'Classic cheese pizza with fresh basil and tomato sauce',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'pizzas',
  },
  {
    id: 'pizza-2',
    name: 'Pepperoni Pizza',
    price: 299,
    description: 'Loaded with spicy pepperoni and mozzarella cheese',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'pizzas',
  },
  {
    id: 'pizza-3',
    name: 'Farmhouse Pizza',
    price: 249,
    description: 'Fresh veggies, mushrooms, and bell peppers on a crispy base',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'pizzas',
  },
  {
    id: 'pizza-4',
    name: 'Chicken Tikka Pizza',
    price: 329,
    description: 'Tandoori chicken tikka with onions and green chutney',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'pizzas',
  },

  // Breads
  {
    id: 'bread-1',
    name: 'Garlic Bread',
    price: 99,
    description: 'Crispy garlic bread with herbs and butter',
    image: 'https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'breads',
  },
  {
    id: 'bread-2',
    name: 'Cheese Garlic Bread',
    price: 149,
    description: 'Garlic bread loaded with melted cheese',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'breads',
  },
  {
    id: 'bread-3',
    name: 'Stuffed Bread',
    price: 129,
    description: 'Bread stuffed with spiced vegetables and cheese',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'breads',
  },

  // Burgers
  {
    id: 'burger-1',
    name: 'Classic Veg Burger',
    price: 129,
    description: 'Crunchy veg patty with fresh lettuce and special sauce',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'burgers',
  },
  {
    id: 'burger-2',
    name: 'Chicken Burger',
    price: 179,
    description: 'Juicy grilled chicken patty with mayo and veggies',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'burgers',
  },
  {
    id: 'burger-3',
    name: 'Double Patty Burger',
    price: 229,
    description: 'Double stacked patties with cheese and BBQ sauce',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'burgers',
  },

  // Pasta
  {
    id: 'pasta-1',
    name: 'Penne Arrabbiata',
    price: 189,
    description: 'Spicy tomato pasta with fresh herbs and garlic',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'pasta',
  },
  {
    id: 'pasta-2',
    name: 'Alfredo Pasta',
    price: 219,
    description: 'Creamy white sauce pasta with mushrooms and herbs',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'pasta',
  },
  {
    id: 'pasta-3',
    name: 'Chicken Pesto Pasta',
    price: 259,
    description: 'Grilled chicken with basil pesto and parmesan',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'pasta',
  },

  // Ice Creams
  {
    id: 'icecream-1',
    name: 'Vanilla Scoop',
    price: 69,
    description: 'Classic vanilla ice cream with real vanilla beans',
    image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'ice-creams',
  },
  {
    id: 'icecream-2',
    name: 'Chocolate Fudge',
    price: 99,
    description: 'Rich chocolate ice cream with hot fudge swirl',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'ice-creams',
  },
  {
    id: 'icecream-3',
    name: 'Butterscotch Sundae',
    price: 129,
    description: 'Butterscotch ice cream with caramel drizzle and nuts',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'ice-creams',
  },

  // Salads
  {
    id: 'salad-1',
    name: 'Caesar Salad',
    price: 159,
    description: 'Crisp romaine lettuce with parmesan and croutons',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'salads',
  },
  {
    id: 'salad-2',
    name: 'Greek Salad',
    price: 179,
    description: 'Fresh vegetables with feta cheese and olives',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'salads',
  },
  {
    id: 'salad-3',
    name: 'Grilled Chicken Salad',
    price: 219,
    description: 'Mixed greens with grilled chicken and balsamic dressing',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'salads',
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Chocolate Lava Cake',
    price: 149,
    description: 'Warm chocolate cake with a gooey molten center',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'desserts',
  },
  {
    id: 'dessert-2',
    name: 'Tiramisu',
    price: 179,
    description: 'Classic Italian dessert with espresso and mascarpone',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'desserts',
  },
  {
    id: 'dessert-3',
    name: 'Gulab Jamun',
    price: 89,
    description: 'Soft milk dumplings soaked in rose-flavored sugar syrup',
    image: 'https://images.unsplash.com/photo-1666190060592-97c87353a503?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'desserts',
  },

  // Starters
  {
    id: 'starter-1',
    name: 'Paneer Tikka',
    price: 189,
    description: 'Marinated cottage cheese grilled in tandoor',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'starters',
  },
  {
    id: 'starter-2',
    name: 'Chicken Wings',
    price: 229,
    description: 'Crispy fried chicken wings with spicy dipping sauce',
    image: 'https://images.unsplash.com/photo-1608039829572-9b0081ef6285?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'starters',
  },
  {
    id: 'starter-3',
    name: 'Spring Rolls',
    price: 139,
    description: 'Crispy rolls stuffed with vegetables and noodles',
    image: 'https://images.unsplash.com/photo-1548507200-c26aa3dc6d87?w=400&h=300&fit=crop',
    isVeg: true,
    category: 'starters',
  },
  {
    id: 'starter-4',
    name: 'Fish Fingers',
    price: 199,
    description: 'Golden fried fish fingers with tartar sauce',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&fit=crop',
    isVeg: false,
    category: 'starters',
  },
];

export const offers = [
  {
    id: 1,
    title: '50% OFF on your first order!',
    subtitle: 'Use code WELCOME50 at checkout',
    emoji: '🔥',
    gradient: 'from-primary to-secondary',
  },
  {
    id: 2,
    title: 'Buy 1 Get 1 Free on Pizzas',
    subtitle: 'Every Friday & Saturday',
    emoji: '🍕',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    title: 'Free Delivery above ₹299',
    subtitle: 'No minimum order for delivery',
    emoji: '🚚',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 4,
    title: 'Weekend Special: Flat ₹100 OFF',
    subtitle: 'Valid on orders above ₹499',
    emoji: '🎉',
    gradient: 'from-primary via-secondary to-yellow-500',
  },
  {
    id: 5,
    title: 'Combo Meals starting at ₹199',
    subtitle: 'Burger + Fries + Drink',
    emoji: '🍔',
    gradient: 'from-orange-600 to-primary',
  },
];

export const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
];

export const notifications = [
  {
    id: 1,
    message: 'Your order is on the way! 🚚',
    time: '2 min ago',
    isNew: true,
  },
  {
    id: 2,
    message: 'New offer: 20% off on Pizzas! 🍕',
    time: '1 hour ago',
    isNew: true,
  },
  {
    id: 3,
    message: 'Rate your last order from IndianFork Demo',
    time: '3 hours ago',
    isNew: false,
  },
];
