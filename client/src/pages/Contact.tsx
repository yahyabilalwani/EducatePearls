import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, MapPin as LocationIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      value: "+91-9906583999",
      description: "Speak directly with our team",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      value: "info.educatepearls@gmail.com",
      description: "Send us a detailed message",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Website",
      value: "www.educatepearls.org",
      description: "Learn more about our work",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 space-y-2">
            <span>Get in</span>
            <span className="block text-emerald-200">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out with questions, partnership opportunities,
            or ways to get involved in our mission.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-green-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card-premium p-10 rounded-3xl border border-green-100/50">
                <div className="flex items-center mb-10">
                  <MessageCircle className="h-10 w-10 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
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
                    <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 resize-none text-lg"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg text-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="glass-card-premium p-6 rounded-3xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-100/50 group">
                    <div className="flex items-start">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${method.color} rounded-2xl text-white mr-5 group-hover:scale-110 transition-transform flex-shrink-0`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-600 mb-2 text-sm">{method.description}</p>
                        <p className="text-green-600 font-bold text-lg">{method.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="glass-card-premium p-8 rounded-3xl border border-green-100/50">
                <div className="flex items-center mb-8">
                  <Clock className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
                    { day: 'Sunday', time: 'Closed', isClosed: true }
                  ].map((hour, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-bold text-gray-900">{hour.day}</span>
                      <span className={hour.isClosed ? 'text-red-600 font-bold' : 'text-gray-600'}>{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="glass-card-premium p-8 rounded-3xl border border-green-100/50">
                <div className="flex items-center mb-8">
                  <LocationIcon className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200/50">
                  <LocationIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-900 font-bold text-lg mb-2">Jammu & Kashmir, India</p>
                  <p className="text-sm text-gray-600">Serving communities across the region</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our network of supporters and partners working towards educational excellence and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="inline-flex items-center justify-center bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Make a Donation
            </a>
            <a href="/programs" className="btn-ghost text-lg px-8 py-4">
              Learn About Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;