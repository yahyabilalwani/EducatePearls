import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, ensuring maximum impact."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "Our work is driven by genuine care for people and communities."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe in the power of partnerships and collective action."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously seek new and better ways to address social challenges."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Service" },
    { number: "500+", label: "Communities Served" },
    { number: "10,000+", label: "Lives Transformed" },
    { number: "50+", label: "Partner Organizations" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="container-max text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 space-y-2">
            <span>About</span>
            <span className="block text-emerald-200">Educate Pearls</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to create lasting change through education and empowerment,
            building brighter futures for communities worldwide.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Mission */}
            <div className="glass-card-premium p-10 rounded-3xl text-center group hover:scale-105 transition-all duration-300 border border-green-100/50">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white mb-8 group-hover:scale-125 transition-transform shadow-lg">
                <Target className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower underprivileged communities through comprehensive education and skill development programs,
                fostering sustainable growth and social transformation.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-card-premium p-10 rounded-3xl text-center group hover:scale-105 transition-all duration-300 border border-green-100/50">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl text-white mb-8 group-hover:scale-125 transition-transform shadow-lg">
                <Eye className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A world where every individual has access to quality education and opportunities to build a better future
                for themselves and their communities.
              </p>
            </div>

            {/* Impact */}
            <div className="glass-card-premium p-10 rounded-3xl text-center group hover:scale-105 transition-all duration-300 border border-green-100/50">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl text-white mb-8 group-hover:scale-125 transition-transform shadow-lg">
                <Award className="h-10 w-10" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Creating measurable, sustainable change through evidence-based programs that transform lives and communities.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to creating positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card-premium p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105 border border-green-100/50">
                <div className="text-green-600 mb-4 group-hover:scale-125 transition-transform group-hover:text-green-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900 mb-4">Our Achievements</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Numbers that tell our story of impact</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white border border-green-100/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center text-gray-900 mb-16">Our Story</h2>
            <div className="glass-card-premium p-12 rounded-3xl border border-green-100/50">
              <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                <p className="text-xl">
                  Educate Pearls Association was founded with a simple yet powerful belief: that education is the key to
                  unlocking human potential and breaking the cycle of poverty. Our journey began when a group of passionate
                  educators and social workers witnessed firsthand the challenges faced by underprivileged communities in
                  accessing quality education.
                </p>
                <p className="text-lg">
                  What started as a small initiative to provide books and school supplies has grown into a comprehensive
                  organization dedicated to holistic development. We work tirelessly to ensure that no child is left behind
                  due to financial constraints or lack of resources.
                </p>
                <p className="text-lg">
                  Today, we continue to expand our reach, partnering with schools, communities, and individuals to create
                  sustainable solutions that empower lives and enrich society. Every pearl we educate becomes a beacon of
                  hope and a catalyst for positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-max text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of the change. Whether through volunteering, partnerships, or donations,
            your support helps us create brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="btn-primary text-lg px-8 py-4">
              Make a Donation
            </a>
            <a href="/contact" className="btn-ghost text-lg px-8 py-4">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;