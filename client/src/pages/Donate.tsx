import { useState } from 'react';
import { CreditCard, Shield, CheckCircle, Heart, Lock, Star, Zap } from 'lucide-react';

const Donate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const [selectedAmount, setSelectedAmount] = useState('');

  const presetAmounts = [
    { value: '500', label: '₹500', desc: 'Books for a child' },
    { value: '1000', label: '₹1,000', desc: 'School fees' },
    { value: '2500', label: '₹2,500', desc: 'Scholarship' },
    { value: '5000', label: '₹5,000', desc: 'Workshop' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAmountSelect = (value: string) => {
    setSelectedAmount(value);
    setFormData({
      ...formData,
      amount: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation form submitted:', formData);
    alert('Thank you for your donation! We will process it shortly.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-20 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-emerald-300 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 space-y-2">
            <span>Make a</span>
            <span className="block text-emerald-200">Difference</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Your generosity transforms lives and builds stronger communities.
            Every contribution counts towards creating lasting change.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-green-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="glass-card-premium p-10 rounded-3xl border border-green-100/50">
                <div className="flex items-center mb-10">
                  <div className="relative">
                    <Heart className="h-10 w-10 text-red-500 mr-4 animate-pulse" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Make Your Donation</h2>
                </div>

                {/* Preset Amounts */}
                <div className="mb-10">
                  <label className="block text-lg font-bold text-gray-900 mb-6">Choose Your Impact</label>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount.value}
                        onClick={() => handleAmountSelect(amount.value)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                          selectedAmount === amount.value
                            ? 'border-green-600 bg-green-50 shadow-lg'
                            : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-2xl font-bold text-gray-900">{amount.label}</div>
                        <div className="text-sm text-gray-600 font-medium">{amount.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="amount" className="block text-sm font-bold text-gray-800 mb-3">
                      Custom Amount (₹) *
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      required
                      min="1"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Enter amount"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 resize-none text-lg"
                      placeholder="Tell us about your donation or any specific cause..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg text-lg"
                  >
                    <Lock className="h-5 w-5 mr-2" />
                    Donate Securely
                  </button>
                </form>
              </div>
            </div>

            {/* Trust Elements and Info */}
            <div className="space-y-8">
              {/* Trust Badges */}
              <div className="glass-card-premium p-8 rounded-3xl border border-green-100/50">
                <div className="flex items-center mb-8">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Your Trust Matters</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'CIN', value: 'U88900JK2025NPL017922' },
                    { label: 'PAN', value: 'AAJCE1436G' },
                    { label: 'TAN', value: 'AMRE11647G' }
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-gray-900">{cert.label}:</span>
                        <span className="text-gray-700 ml-2">{cert.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-green-900 font-semibold text-sm leading-relaxed">
                    ✓ All donations are tax-exempt under Section 80G of the Income Tax Act, 1961
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="glass-card-premium p-8 rounded-3xl border border-green-100/50">
                <div className="flex items-center mb-8">
                  <CreditCard className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Secure Payments</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Industry-standard security protocols protect your information.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {['Credit/Debit Cards', 'Net Banking', 'UPI', 'Bank Transfer'].map((method, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700 font-medium">{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Your Impact</h3>
                </div>
                <p className="mb-6 text-green-50 text-lg leading-relaxed">
                  Every rupee goes directly to our programs. Here's your power:
                </p>
                <div className="space-y-4">
                  {[
                    { amount: '₹500', impact: 'Books for one child/month' },
                    { amount: '₹1,000', impact: 'Sponsor child\'s school fees' },
                    { amount: '₹5,000', impact: 'Fund community workshop' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                      <Star className="h-5 w-5 text-yellow-300 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold">{item.amount}</span>
                        <span className="text-green-100 ml-2">{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;