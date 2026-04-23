import { Link } from 'react-router-dom';
import { Heart, ArrowRight, CheckCircle, BookOpen, Lightbulb, Home as HomeIcon, Code2, Users2, Award } from 'lucide-react';

const Home = () => {
  const whatWeDo = [
    {
      number: "1",
      title: "Academic Support & Mentorship",
      description: "Structured coaching, training, and personalized guidance to help students improve academically and make informed career decisions."
    },
    {
      number: "2",
      title: "Scholarships & Financial Support",
      description: "Support for school fees, learning materials, and essential academic resources ensuring continuity in education."
    },
    {
      number: "3",
      title: "Digital & Personalized Learning",
      description: "Digital platforms delivering personalized learning experiences with student-focused content and progress tracking."
    },
    {
      number: "4",
      title: "Health & Awareness Programs",
      description: "Education on drug abuse prevention, harmful habits, and healthy lifestyle choices."
    },
    {
      number: "5",
      title: "Sports & Physical Development",
      description: "Sports activities promoting fitness, discipline, and team spirit for holistic development."
    },
    {
      number: "6",
      title: "Institutional Support",
      description: "Collaboration with schools and communities to improve learning environments and resource access."
    }
  ];

  const solutions = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Community Learning Centers",
      points: ["Access to internet and digital tools", "Training in digital literacy, coding, and AI basics", "Guided self-learning and mentorship"]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation & Excellence Institute",
      points: ["Advanced education and skill development", "Focus on innovation, problem-solving, and project-based learning", "Free education for deserving students + paid programs"]
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Residential Learning (Boarding)",
      points: ["Safe and structured environment", "Focus on nutrition, discipline, and project-based learning"]
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Technology & Innovation Programs",
      points: ["Hands-on exposure to Coding, AI tools, Robotics basics", "Build projects and solve real-world problems"]
    }
  ];

  const roadmap = [
    { phase: "Phase 1", title: "Pilot learning centers", desc: "(1–2 villages)" },
    { phase: "Phase 2", title: "Expand to multiple communities", desc: "" },
    { phase: "Phase 3", title: "Launch centralized innovation institute", desc: "" },
    { phase: "Phase 4", title: "Scale across regions", desc: "" }
  ];

  const problems = [
    "Limited access to quality education",
    "Lack of awareness about digital learning",
    "Minimal exposure to technology and innovation",
    "Traditional teaching methods with little focus on creativity",
    "Limited access to internet, devices, and modern tools"
  ];

  const getInvolvedOptions = [
    { icon: <Heart className="h-8 w-8" />, title: "Support Our Mission", cta: "Sponsor a student", items: ["Sponsor a student", "Fund a learning center", "Partner with us"] },
    { icon: <Users2 className="h-8 w-8" />, title: "Volunteer With Us", cta: "Join as Volunteer", items: ["Teaching", "Mentoring", "Supporting community programs"] },
    { icon: <Lightbulb className="h-8 w-8" />, title: "Partner With Us", cta: "Become a Partner", items: ["Schools", "Organizations", "CSR initiatives"] }
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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight space-y-4">
              <span>Empowering Rural Children with</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
                Education, Technology & Innovation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We are building a future where every child—regardless of background—has access to quality education, digital tools, and opportunities to innovate.
            </p>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between traditional learning and future-ready skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/donate" className="btn-primary group text-lg px-8 py-5">
                Join Us
                <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/donate" className="btn-ghost text-lg px-8 py-5">
                Support a Child
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="section-title text-gray-900 mb-4">🌟 About Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Educate Pearls Association is a social impact organization dedicated to transforming the lives of children through education, technology, and holistic development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is to create a scalable, tech-enabled learning ecosystem that empowers children to not just learn—but to think, innovate, and lead.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100/50">
              <h3 className="text-xl font-bold text-gray-900 mb-6">We work at the grassroots level to address gaps in:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: "📚", title: "Access to quality education" },
                  { icon: "💻", title: "Digital literacy" },
                  { icon: "🚀", title: "Innovation and skill development" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-gray-700 font-semibold">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-gray-900 mb-6">🎯 Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To build a generation of confident, skilled, and innovation-driven individuals from underserved communities who can shape a better future.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="section-title text-gray-900 mb-12 text-center">🚀 What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-100/30">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold">
                    {item.number}
                  </div>
                  <h3 className="ml-4 text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-red-50 to-orange-50">
        <div className="container-max">
          <h2 className="section-title text-gray-900 mb-12 text-center">⚠️ The Problem We Are Solving</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center font-semibold">
              Millions of children in rural areas face challenges such as:
            </p>
            <div className="space-y-4">
              {problems.map((problem, idx) => (
                <div key={idx} className="flex items-start p-4 bg-white rounded-lg border border-red-100/50 hover:border-red-200 transition-colors duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="ml-4 text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 font-semibold mt-8 p-6 bg-red-100/20 rounded-lg border border-red-200/50">
              Without intervention, these gaps continue to widen the inequality in opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="section-title text-gray-900 mb-4 text-center">💡 Our Solution</h2>
          <p className="text-center text-lg text-gray-600 mb-12">The Pearls Learning & Innovation Model</p>
          <p className="text-center text-gray-600 mb-12">A scalable, hybrid approach combining technology, community, and innovation.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-100/30">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white">
                    {solution.icon}
                  </div>
                  <h3 className="ml-4 text-lg font-bold text-gray-900">{solution.title}</h3>
                </div>
                <ul className="space-y-3">
                  {solution.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start text-gray-600">
                      <span className="text-blue-600 mr-3 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-max">
          <h2 className="section-title text-gray-900 mb-12 text-center">📊 Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Students Supported" },
              { value: "3+", label: "Community Initiatives Launched" },
              { value: "📈", label: "Improved Academic Performance" },
              { value: "💻", label: "Growing Digital Adoption" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-blue-100/50 hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                  {item.value}
                </div>
                <div className="text-gray-600 font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="section-padding bg-gradient-to-b from-white to-blue-50">
        <div className="container-max">
          <h2 className="section-title text-gray-900 mb-12 text-center">🚀 Our Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {roadmap.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-100/30 text-center">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">{item.phase}</h3>
                  <p className="text-gray-700 font-semibold mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                {idx < roadmap.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="section-title text-gray-900 mb-12 text-center">🤝 Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getInvolvedOptions.map((option, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-blue-100/30">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-6">{option.title}</h3>
                <ul className="space-y-3 mb-8">
                  {option.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-center text-gray-600 justify-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary text-center">
                  {option.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-max">
          <h2 className="section-title text-gray-900 mb-12 text-center">📞 Contact Us</h2>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-blue-100/30">
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-bold">Educate Pearls Association</span>
              </p>
              <p className="text-lg text-gray-600 mb-3">📍 Jammu & Kashmir, India</p>
              <p className="text-lg text-gray-600 mb-3">📧 <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">[Your Email]</Link></p>
              <p className="text-lg text-gray-600">📞 <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">[Your Phone Number]</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🔥 Empowering minds. Enabling futures. Building innovators.
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in our mission to transform the lives of children through education, technology, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
              Get Involved
            </Link>
            <Link to="/contact" className="btn-ghost text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;