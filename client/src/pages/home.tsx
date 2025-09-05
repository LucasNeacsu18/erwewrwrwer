import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { AnimatedSection } from "@/components/animated-section";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

export default function Home() {
  const whyChooseUsItems = [
    {
      title: "Independently Regulated by CQC",
      description: "Every aspect of our care activity is independently regulated and monitored by the Care Quality Commission with a 'Good' rating"
    },
    {
      title: "25+ Years of Excellence",
      description: "Since 1998, our dedicated domiciliary care team has helped adults of working age with mental conditions maintain their independence"
    },
    {
      title: "Naturally Kind & Compassionate Carers",
      description: "We only hire carers to our teams who are naturally kind and compassionate, ensuring you receive care from competent individuals"
    },
    {
      title: "Comprehensive Training Program",
      description: "Our staff receive induction training and thorough assessment; every new staff member works at least two weeks in supernumerary capacity"
    },
    {
      title: "Direct Employment Model",
      description: "All carers are directly employed, background screened, expertly trained, constantly supported, fully regulated, and selectively recruited"
    },
    {
      title: "Person-Centred Mental Health Care",
      description: "We understand mental illness affects people differently, providing tailored support through experienced workers in your own home"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3)), url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-12 floating-animation perspective-hover"
            style={{ animation: "gentleSway 12s ease-in-out infinite" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold text-white mb-6 scale-breathe"
              data-testid="hero-title"
            >
              Supporting people with mental health illness{" "}
              <span className="gradient-text glow-pulse">since 1998</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8"
              data-testid="hero-subtitle"
            >
              For over 25 years, we've supported adults with mental health conditions in West Sussex, maintaining their independence and supporting them in their community. Covering the western regions of West Sussex, we've been the domiciliary care provider of choice to many families for almost three decades.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/about">
                <motion.button
                  className="glass-card px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-learn-more"
                >
                  Learn More
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="button-get-started"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
              data-testid="services-title"
            >
              Our Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
              data-testid="services-subtitle"
            >
              For a quarter-century, Rendezvous Care Services has been at the forefront of mental health care in West Sussex
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard delay={0.1}>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                alt="Professional healthcare team" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
                data-testid="img-mental-health-care"
              />
              <h3 className="text-2xl font-bold text-white mb-4" data-testid="text-mental-health-title">Person-Centred Mental Health Care</h3>
              <p className="text-white/80" data-testid="text-mental-health-desc">
                We understand mental illness can affect people in different ways, with various different challenges. At Rendezvous Care, we help people with all types of mental conditions through experienced and dedicated support workers assisting you in your own home.
              </p>
            </GlassCard>
            
            <GlassCard delay={0.3}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                alt="Caring elderly support" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
                data-testid="img-domiciliary-care"
              />
              <h3 className="text-2xl font-bold text-white mb-4" data-testid="text-domiciliary-title">Domiciliary Care Excellence</h3>
              <p className="text-white/80" data-testid="text-domiciliary-desc">
                Domiciliary care gives you the opportunity to receive personalised care in your own home. The package of care required will be individualised based on a thorough specialist assessment of needs, ensuring full flexibility over the support you receive.
              </p>
            </GlassCard>
            
            <GlassCard delay={0.5}>
              <img 
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                alt="Modern medical facility" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
                data-testid="img-supported-living"
              />
              <h3 className="text-2xl font-bold text-white mb-4" data-testid="text-supported-title">Comprehensive Home Support</h3>
              <p className="text-white/80" data-testid="text-supported-desc">
                Our comprehensive approach means every aspect of your support needs will be part of your care package - from personal care and housework to mobility support, medication assistance, and community engagement activities.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 px-4" delay={0.2}>
        <div className="container mx-auto max-w-6xl">
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-12" data-testid="why-choose-title">
              Why Choose Rendezvous Care?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {whyChooseUsItems.slice(0, 3).map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 hover-scale transition-all duration-300 p-4 rounded-2xl hover:bg-white/10"
                    data-testid={`why-choose-item-${index}`}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-why-title-${index}`}>
                        {item.title}
                      </h3>
                      <p className="text-white/80" data-testid={`text-why-desc-${index}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="space-y-6">
                {whyChooseUsItems.slice(3).map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                    className="flex items-start space-x-4 hover-scale transition-all duration-300 p-4 rounded-2xl hover:bg-white/10"
                    data-testid={`why-choose-item-${index + 3}`}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2" data-testid={`text-why-title-${index + 3}`}>
                        {item.title}
                      </h3>
                      <p className="text-white/80" data-testid={`text-why-desc-${index + 3}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  );
}
