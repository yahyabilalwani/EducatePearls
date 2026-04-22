import { BookOpen, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: "Education Support Program",
      description: "Comprehensive educational support for underprivileged students, ensuring equal access to quality education and future opportunities.",
      icon: <BookOpen className="h-10 w-10" />,
      color: "from-blue-500 to-blue-600",
      details: [
        "Scholarship programs for deserving students",
        "Distribution of books and educational materials",
        "One-on-one mentorship and tutoring sessions",
        "School fee assistance and uniform support"
      ],
      impact: "10,000+ students supported annually"
    },
    {
      title: "Community Development Initiative",
      description: "Building sustainable infrastructure and essential services to improve living conditions and quality of life.",
      icon: <Users className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-500",
      details: [
        "Infrastructure development in rural areas",
        "Clean water and sanitation projects",
        "Community health and hygiene awareness",
        "Local capacity building and skill training"
      ],
      impact: "500+ communities transformed"
    },
    {
      title: "Women & Youth Empowerment",
      description: "Empowering women and youth through skill development, entrepreneurship training, and leadership programs for self-reliance.",
      icon: <Heart className="h-10 w-10" />,
      color: "from-purple-500 to-blue-500",
      details: [
        "Vocational training for women",
        "Youth leadership development programs",
        "Entrepreneurship and business skills training",
        "Financial literacy and savings programs"
      ],
      impact: "5,000+ individuals empowered"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 space-y-2">
            <span>Our</span>
            <span className="block text-cyan-200">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive initiatives designed to create lasting impact
            and sustainable change in communities worldwide.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="section-title text-gray-900 mb-6">Comprehensive Impact Programs</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Each program is carefully designed to address specific community needs and create measurable change.
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${program.color} rounded-2xl text-white mb-8 shadow-lg hover:scale-110 transition-transform`}>
                    {program.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">{program.title}</h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">{program.description}</p>

                  <div className="mb-10">
                    <h4 className="text-2xl font-semibold text-gray-900 mb-6">Key Activities:</h4>
                    <ul className="space-y-4">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start group hover:translate-x-2 transition-transform">
                          <CheckCircle className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-gray-700 text-lg font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 p-8 rounded-2xl">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-blue-600 mr-6">{program.impact}</div>
                      <div className="text-gray-700 font-semibold">Impact Achieved</div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="glass-card-premium p-10 rounded-3xl hover:scale-105 transition-all duration-300 border border-blue-100/50">
                    <div className="grid grid-cols-2 gap-8">
                      {[
                        { value: "98%", label: "Success Rate" },
                        { value: "24/7", label: "Support" },
                        { value: "50+", label: "Partners" },
                        { value: "15+", label: "Years" }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-6 bg-white/40 hover:bg-white/60 rounded-2xl transition-all duration-300">
                          <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
                          <div className="text-sm text-gray-600 font-semibold">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your support enables us to expand these programs and reach more communities in need.
            Join thousands of donors making lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-ghost text-lg px-8 py-4">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;