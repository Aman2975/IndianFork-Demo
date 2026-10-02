import { FiX, FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

export default function CartDrawer() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[55]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-light-orange rounded-xl flex items-center justify-center">
              <FiShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-dark-gray text-lg">Your Cart</h2>
              <p className="text-medium-gray text-sm">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg hover:bg-light-gray transition-colors"
            aria-label="Close cart"
          >
            <FiX className="w-5 h-5 text-medium-gray" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-light-orange rounded-full flex items-center justify-center mb-4">
                <FiShoppingBag className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-dark-gray text-lg">Your cart is empty</h3>
              <p className="text-medium-gray text-sm mt-2">
                Add some delicious items from the menu!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary mt-6 text-sm"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-light-gray rounded-xl hover:bg-light-orange/30 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-4 h-4 rounded-sm border flex items-center justify-center ${item.isVeg ? 'border-veg' : 'border-non-veg'}`}>
                            <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-veg' : 'bg-non-veg'}`}></span>
                          </span>
                          <h4 className="font-medium text-dark-gray text-sm truncate">{item.name}</h4>
                        </div>
                        <p className="text-primary font-bold text-sm mt-1">₹{item.price * item.quantity}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-medium-gray hover:text-non-veg transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center bg-white rounded-lg border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1.5 hover:bg-light-gray transition-colors rounded-l-lg"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 py-1.5 font-semibold text-sm text-dark-gray border-x border-gray-200 min-w-[36px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1.5 hover:bg-light-gray transition-colors rounded-r-lg"
                          aria-label="Increase quantity"
                        >
                          <FiPlus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-xs text-medium-gray">₹{item.price} each</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-4 space-y-3 bg-white">
            {/* Clear cart */}
            <button
              onClick={() => {
                clearCart();
                toast.success('Cart cleared!', {
                  style: { borderRadius: '12px', background: '#333', color: '#fff' },
                });
              }}
              className="text-xs text-medium-gray hover:text-non-veg transition-colors underline"
            >
              Clear entire cart
            </button>

            {/* Subtotal */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-medium-gray">Subtotal</span>
                <span className="font-medium text-dark-gray">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-medium-gray">Delivery Fee</span>
                <span className="font-medium text-veg">{totalPrice >= 299 ? 'FREE' : '₹40'}</span>
              </div>
              <hr className="border-gray-100" />
              <div className="flex justify-between text-base">
                <span className="font-bold text-dark-gray">Total</span>
                <span className="font-bold text-primary text-lg">
                  ₹{totalPrice + (totalPrice >= 299 ? 0 : 40)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                toast.success('Order placed successfully! 🎉', {
                  style: {
                    background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '12px',
                  },
                  duration: 3000,
                });
              }}
              className="w-full btn-primary !py-3.5 text-sm animate-pulse-orange"
            >
              Checkout — ₹{totalPrice + (totalPrice >= 299 ? 0 : 40)}
            </button>

            {totalPrice < 299 && (
              <p className="text-xs text-center text-medium-gray">
                Add ₹{299 - totalPrice} more for <span className="text-veg font-semibold">free delivery!</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
