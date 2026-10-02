import { useState, useEffect, useRef } from 'react';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiUsers, FiBook, FiTruck, FiStar, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

const stats = [
  { icon: FiUsers, label: 'Happy Customers', value: '5000+', color: 'from-primary to-secondary' },
  { icon: FiBook, label: 'Menu Items', value: '200+', color: 'from-orange-400 to-primary' },
  { icon: FiTruck, label: 'Delivery Areas', value: '50+', color: 'from-secondary to-yellow-500' },
  { icon: FiStar, label: 'Rating', value: '4.8★', color: 'from-amber-400 to-primary' },
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.", {
      style: {
        background: 'linear-gradient(135deg, #FF6B00, #FF8C00)',
        color: 'white',
        fontWeight: 500,
        borderRadius: '12px',
      },
      duration: 4000,
    });
    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-light-orange via-white to-light-orange">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-dark-gray leading-tight">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-medium-gray text-base md:text-lg mt-6 leading-relaxed max-w-xl">
                Welcome to <span className="text-primary font-semibold">IndianFork Demo</span>! We are passionate about delivering the most delicious food right to your doorstep. Established in 2020, we have been serving fresh, flavorful, and quality meals made with love.
              </p>
              <p className="text-medium-gray text-base md:text-lg mt-4 leading-relaxed max-w-xl">
                Our chefs use the finest ingredients to craft every dish, ensuring a memorable dining experience every time. Whether you crave a cheesy pizza, a refreshing drink, or a delightful dessert — we've got you covered!
              </p>
            </div>

            <div className="relative animate-slide-up">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=450&fit=crop"
                  alt="Inside the IndianFork Demo restaurant kitchen"
                  className="w-full h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce-in hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🍽️</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark-gray">Since 2020</p>
                    <p className="text-sm text-medium-gray">Serving happiness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-light-gray" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-white rounded-2xl p-6 text-center card-hover ${
                  visibleStats ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-black text-dark-gray">{stat.value}</p>
                <p className="text-medium-gray text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-dark-gray">
              Need Help? <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Reach Out!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-dark-gray mb-1.5">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      className="input-field"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-dark-gray mb-1.5">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      className="input-field"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-dark-gray mb-1.5">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="input-field"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-dark-gray mb-1.5">Subject</label>
                    <select
                      id="contact-subject"
                      className="input-field appearance-none cursor-pointer"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option>General Inquiry</option>
                      <option>Order Issue</option>
                      <option>Feedback</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-dark-gray mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary flex items-center gap-2 !px-8">
                  <FiSend className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 md:p-8 text-white">
                <h3 className="font-bold text-xl mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919876543210" className="text-white/80 text-sm hover:text-white transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:support@foodiehub.com" className="text-white/80 text-sm hover:text-white transition-colors">
                        support@foodiehub.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/80 text-sm">
                        123, Food Street, Mumbai, India
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-white/20 my-6" />

                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { Icon: FiInstagram, label: 'Instagram' },
                    { Icon: FiFacebook, label: 'Facebook' },
                    { Icon: FiTwitter, label: 'Twitter' },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-48">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=200&fit=crop"
                  alt="Map showing IndianFork Demo location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
