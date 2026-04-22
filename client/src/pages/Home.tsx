import { Link } from 'react-router-dom';
import { Heart, Users, GraduationCap, TrendingUp, ArrowRight, CheckCircle, Star, Sparkles } from 'lucide-react';
import Card from '../components/Card';

const Home = () => {
  const stats = [
    { number: "10,000+", label: "Lives Impacted" },
    { number: "500+", label: "Communities Served" },
    { number: "50+", label: "Schools Partnered" },
    { number: "95%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      content: "Educate Pearls has transformed our community. The education programs have given our children hope for a better future.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Dr. Michael Chen",
      role: "Education Director",
      content: "Their innovative approach to skill development has created sustainable change in underprivileged areas.",
      rating: 5,
      image: "👨‍🏫"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container-max relative z-10 py-20">
          <div className="text-center text-white space-y-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Sparkles className="h-5 w-5 text-yellow-300 mr-3 group-hover:animate-spin" />
              <span className="text-sm font-semibold">🌟 Partnering with communities and CSR leaders</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight space-y-4">
              <span>Building resilient</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
                communities through education
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Educate Pearls Association delivers measurable social impact through high-quality learning programs,
              sustainable skill training, and community-led welfare initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/donate" className="btn-primary group text-lg px-8 py-5">
                Support Our Work
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-ghost text-lg px-8 py-5">
                Explore Our Impact
              </Link>
            </div>
          </div>

          {/* Floating Feature Cards */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <GraduationCap className="h-6 w-6" />, title: "Education Support", desc: "Scholarships and mentorship" },
              { icon: <TrendingUp className="h-6 w-6" />, title: "Skill Development", desc: "Vocational training programs" },
              { icon: <Heart className="h-6 w-6" />, title: "Community Welfare", desc: "Health and development" }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 group" style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`,
                opacity: 0
              }}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-all duration-300 text-white">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-blue-100">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Our Impact By Numbers</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Real change, real impact, real transformation in communities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white border border-blue-100/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title text-gray-900 mb-6">
                Creating Lasting Change
                <span className="block text-blue-600">Through Education</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that education is the foundation of sustainable development.
                Our comprehensive programs address the root causes of poverty and inequality,
                creating pathways to opportunity for underserved communities.
              </p>
              <div className="space-y-4">
                {[
                  "Proven track record of success",
                  "Transparent and accountable operations",
                  "Community-driven initiatives"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="relative">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-4 group-hover:text-blue-700" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card-premium p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "98%", label: "Success Rate" },
                    { value: "24/7", label: "Support" },
                    { value: "50+", label: "Partners" },
                    { value: "15+", label: "Years" }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center p-6 bg-white/40 rounded-2xl hover:bg-white/60 transition-all duration-300">
                      <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
                      <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Our Impact Programs</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Discover how we're making a difference in communities across the region
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Education Support"
              description="Providing scholarships, books, and mentorship to help children access quality education and build brighter futures."
              icon={<GraduationCap className="h-8 w-8" />}
            />
            <Card
              title="Community Development"
              description="Building sustainable infrastructure and essential services to improve living conditions in underserved areas."
              icon={<Users className="h-8 w-8" />}
            />
            <Card
              title="Women & Youth Empowerment"
              description="Empowering women and youth through skill development, entrepreneurship training, and leadership programs."
              icon={<Heart className="h-8 w-8" />}
            />
          </div>
          <div className="text-center mt-16">
            <Link to="/programs" className="btn-primary group text-lg px-8 py-4">
              Explore All Programs
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">What Communities Say</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Real stories from the people we've helped</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card-premium p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center pt-6 border-t border-blue-200/30">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of donors who are creating lasting change in communities worldwide.
            Your support transforms lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Donate Now
            </Link>
            <Link to="/contact" className="btn-ghost text-lg px-8 py-4">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;