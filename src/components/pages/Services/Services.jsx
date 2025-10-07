import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: Code,
      description: 'Build powerful, scalable web applications with cutting-edge technologies and best practices.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'API Development & Integration',
        'Performance Optimization'
      ],
      link: '/services/web-development',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Create stunning, user-centric designs that captivate your audience and drive engagement.',
      features: [
        'User Interface Design',
        'User Experience Research',
        'Prototyping & Wireframing',
        'Design System Development'
      ],
      link: '/services/ui-ux-design',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: TrendingUp,
      description: 'Grow your brand with data-driven marketing strategies that deliver measurable results.',
      features: [
        'SEO & Content Strategy',
        'Social Media Marketing',
        'PPC Campaigns',
        'Analytics & Reporting'
      ],
      link: '/services/digital-marketing',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and achieve your goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-400 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  {/* Decorative gradient border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-orange-100 text-lg mb-8">
                Let's discuss how we can help transform your digital presence
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;