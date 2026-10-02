import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiSearch,
  FiMapPin,
  FiShoppingBag,
  FiBell,
  FiUser,
  FiX,
  FiMenu,
  FiChevronDown,
} from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';
import { cities, notifications } from '../data/menuData';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const cityRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cityRef.current && !cityRef.current.contains(event.target as Node)) {
        setShowCityDropdown(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="IndianFork Demo Home">
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                IndianFork Demo
              </span>
            </Link>

            {/* Center: Search Bar (hidden on mobile) */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-medium-gray w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for dishes, cuisines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm bg-light-gray"
                  aria-label="Search dishes"
                />
              </div>
            </div>

            {/* Right: Icons */}
            <div className="hidden md:flex items-center gap-2">
              {/* Location */}
              <div className="relative" ref={cityRef}>
                <button
                  onClick={() => setShowCityDropdown(!showCityDropdown)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-light-gray transition-colors text-sm"
                  aria-label="Select location"
                  aria-expanded={showCityDropdown}
                >
                  <FiMapPin className="w-4 h-4 text-primary" />
                  <span className="text-dark-gray font-medium max-w-[100px] truncate">
                    {selectedCity || 'Select Location'}
                  </span>
                  <FiChevronDown className={`w-3.5 h-3.5 text-medium-gray transition-transform duration-200 ${showCityDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showCityDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                    {cities.map(city => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setShowCityDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-light-orange transition-colors flex items-center gap-2 ${selectedCity === city ? 'text-primary font-semibold bg-light-orange' : 'text-dark-gray'}`}
                      >
                        <FiMapPin className="w-4 h-4" />
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-lg hover:bg-light-gray transition-colors"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <FiShoppingBag className="w-5 h-5 text-dark-gray" />
                {totalItems > 0 && (
                  <span className="badge animate-bounce-in">{totalItems}</span>
                )}
              </button>

              {/* Notifications */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2.5 rounded-lg hover:bg-light-gray transition-colors"
                  aria-label="Notifications"
                  aria-expanded={showNotifications}
                >
                  <FiBell className="w-5 h-5 text-dark-gray" />
                  <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                    <h3 className="px-4 py-2 font-semibold text-dark-gray text-sm border-b border-gray-100">
                      Notifications
                    </h3>
                    {notifications.map(notif => (
                      <div
                        key={notif.id}
                        className={`px-4 py-3 hover:bg-light-gray transition-colors border-b border-gray-50 last:border-0 ${notif.isNew ? 'bg-light-orange/30' : ''}`}
                      >
                        <p className="text-sm text-dark-gray">{notif.message}</p>
                        <p className="text-xs text-medium-gray mt-1">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Login Button */}
              <button
                onClick={() => setShowAuthModal(true)}
                className="btn-outline text-sm !px-4 !py-2 flex items-center gap-1.5"
                aria-label="Login or Register"
              >
                <FiUser className="w-4 h-4" />
                Login
              </button>

              {/* About Link */}
              <Link
                to="/about"
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${location.pathname === '/about' ? 'text-primary bg-light-orange' : 'text-dark-gray hover:text-primary hover:bg-light-gray'}`}
              >
                About
              </Link>
            </div>

            {/* Mobile: hamburger + cart */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-light-gray transition-colors"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <FiShoppingBag className="w-5 h-5 text-dark-gray" />
                {totalItems > 0 && (
                  <span className="badge animate-bounce-in text-[10px] w-4 h-4">{totalItems}</span>
                )}
              </button>
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 rounded-lg hover:bg-light-gray transition-colors"
                aria-label="Toggle menu"
                aria-expanded={showMobileMenu}
              >
                {showMobileMenu ? (
                  <FiX className="w-5 h-5 text-dark-gray" />
                ) : (
                  <FiMenu className="w-5 h-5 text-dark-gray" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="md:hidden pb-3">
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-medium-gray w-4 h-4" />
              <input
                type="text"
                placeholder="Search for dishes, cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm bg-light-gray"
                aria-label="Search dishes"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {/* Location */}
              <div className="py-2">
                <p className="text-xs text-medium-gray font-medium mb-2 uppercase tracking-wider">Location</p>
                <div className="flex flex-wrap gap-2">
                  {cities.map(city => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm transition-colors ${selectedCity === city ? 'bg-primary text-white' : 'bg-light-gray text-dark-gray hover:bg-light-orange'}`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Nav Links */}
              <Link
                to="/"
                onClick={() => setShowMobileMenu(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-primary bg-light-orange' : 'text-dark-gray hover:bg-light-gray'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setShowMobileMenu(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-primary bg-light-orange' : 'text-dark-gray hover:bg-light-gray'}`}
              >
                About
              </Link>

              <hr className="border-gray-100" />

              {/* Notifications */}
              <div className="py-2">
                <p className="text-xs text-medium-gray font-medium mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <FiBell className="w-3.5 h-3.5" /> Notifications
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </p>
                {notifications.map(notif => (
                  <div key={notif.id} className={`px-3 py-2 rounded-lg mb-1 ${notif.isNew ? 'bg-light-orange/30' : 'bg-light-gray'}`}>
                    <p className="text-sm text-dark-gray">{notif.message}</p>
                    <p className="text-xs text-medium-gray mt-0.5">{notif.time}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-100" />

              <button
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowAuthModal(true);
                }}
                className="w-full btn-primary text-sm mt-2"
              >
                <FiUser className="w-4 h-4 inline mr-2" />
                Login / Register
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Login or Register">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowAuthModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-bounce-in overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-light-gray transition-colors z-10"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5 text-medium-gray" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary px-6 py-8 text-center">
              <h2 className="text-2xl font-bold text-white">Welcome to IndianFork Demo</h2>
              <p className="text-white/80 text-sm mt-1">Delicious food awaits you!</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button
                onClick={() => setAuthTab('login')}
                className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${authTab === 'login' ? 'text-primary border-b-2 border-primary' : 'text-medium-gray hover:text-dark-gray'}`}
              >
                Login
              </button>
              <button
                onClick={() => setAuthTab('register')}
                className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${authTab === 'register' ? 'text-primary border-b-2 border-primary' : 'text-medium-gray hover:text-dark-gray'}`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form
              className="p-6 space-y-4"
              onSubmit={e => {
                e.preventDefault();
                setShowAuthModal(false);
                import('react-hot-toast').then(({ default: t }) =>
                  t.success(authTab === 'login' ? 'Logged in successfully!' : 'Registered successfully!', {
                    style: { background: 'linear-gradient(135deg, #FF6B00, #FF8C00)', color: 'white', fontWeight: 500, borderRadius: '12px' },
                  })
                );
              }}
            >
              {authTab === 'register' && (
                <div>
                  <label htmlFor="auth-name" className="block text-sm font-medium text-dark-gray mb-1.5">Full Name</label>
                  <input id="auth-name" type="text" className="input-field" placeholder="John Doe" required />
                </div>
              )}
              <div>
                <label htmlFor="auth-email" className="block text-sm font-medium text-dark-gray mb-1.5">Email</label>
                <input id="auth-email" type="email" className="input-field" placeholder="you@example.com" required />
              </div>
              {authTab === 'register' && (
                <div>
                  <label htmlFor="auth-phone" className="block text-sm font-medium text-dark-gray mb-1.5">Phone Number</label>
                  <input id="auth-phone" type="tel" className="input-field" placeholder="+91 98765 43210" required />
                </div>
              )}
              <div>
                <label htmlFor="auth-password" className="block text-sm font-medium text-dark-gray mb-1.5">Password</label>
                <input id="auth-password" type="password" className="input-field" placeholder="••••••••" required />
              </div>
              <button type="submit" className="w-full btn-primary text-sm !py-3">
                {authTab === 'login' ? 'Login' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
