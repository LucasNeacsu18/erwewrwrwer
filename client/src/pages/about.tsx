import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { AnimatedSection } from "@/components/animated-section";

export default function About() {
  const supportWorkerQualities = [
    "Directly employed",
    "Background screened", 
    "Expertly trained",
    "Constantly supported",
    "Fully regulated",
    "Selectively recruited"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* About Hero */}
      <AnimatedSection className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <GlassCard className="p-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-white mb-6"
              data-testid="about-title"
            >
              About Rendezvous Care
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
              data-testid="about-subtitle"
            >
              Nurturing Mental Well-being for 25 Years in West Sussex
            </motion.p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Mission & Values */}
      <AnimatedSection className="py-20 px-4" delay={0.2}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <GlassCard delay={0.1}>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Healthcare professionals in consultation" 
                className="w-full h-80 object-cover rounded-2xl mb-8"
                data-testid="img-healthcare-professionals"
              />
            </GlassCard>
            
            <div className="space-y-8">
              <GlassCard delay={0.3}>
                <h2 className="text-3xl font-bold text-white mb-6" data-testid="mission-title">Mission and Values</h2>
                <p className="text-white/90 text-lg leading-relaxed" data-testid="mission-text">
                  At Rendezvous Care Services, our mission is simple yet profound – to enhance the quality of life for individuals coping with mental health challenges. We believe in providing personalized, dignified, and client-centred care that empowers each individual on their unique journey towards recovery and stability. Our team is driven by values of empathy, respect, and a genuine commitment to fostering a nurturing environment.
                </p>
              </GlassCard>
              
              <GlassCard delay={0.5}>
                <h2 className="text-3xl font-bold text-white mb-6" data-testid="values-title">Expertise in Mental Health Care</h2>
                <p className="text-white/90 text-lg leading-relaxed" data-testid="values-text">
                  For a quarter-century, Rendezvous Care Services has been at the forefront of mental health care in West Sussex. Our experienced and highly-trained staff specialize in understanding the diverse needs of clients, offering tailored support that goes beyond mere physical assistance. We recognize the importance of holistic care, addressing not just the symptoms but the individual's overall well-being.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* What We Do */}
      <AnimatedSection className="py-20 px-4" delay={0.4}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12 fade-in" data-testid="what-we-do-title">
            What We Do
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <GlassCard delay={0.1}>
                <h3 className="text-2xl font-bold text-white mb-4" data-testid="domiciliary-care-title">
                  Comprehensive Domiciliary Care Services
                </h3>
                <p className="text-white/90 leading-relaxed mb-4" data-testid="domiciliary-care-description">
                  Our range of domiciliary care services encompasses a spectrum of mental health illnesses, including but not limited to depression, anxiety disorders, obsessive-compulsive disorder, and schizophrenia. We collaborate with healthcare professionals, families, and, most importantly, the clients themselves to create customized care plans that evolve with their changing needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90">Personal care and one-to-one support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90">Housework and domestic assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90">Mobility support and physical exercise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90">Medication management and assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/90">Community engagement and social activities</span>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard delay={0.3}>
                <h3 className="text-2xl font-bold text-white mb-4" data-testid="support-workers-title">
                  What Makes Our Support Workers Good at What They Do?
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  We're very proud of our exceptional support workers who are always going above and beyond to ensure every customer receives the brilliant support that they deserve. Our workforce is what makes Rendezvous Care a brilliant domiciliary care employer and we are continuously trying to keep their credentials in check at all times.
                </p>
                <ul className="text-white/90 space-y-2">
                  {supportWorkerQualities.map((quality, index) => (
                    <motion.li
                      key={quality}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                      data-testid={`support-quality-${index}`}
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>{quality}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </div>
            
            <GlassCard delay={0.5}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                alt="Caring elderly support in home setting" 
                className="w-full h-96 object-cover rounded-2xl"
                data-testid="img-elderly-support"
              />
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* How We Help */}
      <AnimatedSection className="py-20 px-4" delay={0.6}>
        <div className="container mx-auto max-w-4xl">
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-8" data-testid="how-we-help-title">
              Community Integration and Our Approach
            </h2>
            <p className="text-white/90 text-lg leading-relaxed text-center mb-8" data-testid="how-we-help-intro">
              Rendezvous Care Services is not just a care provider; we are an active participant in the community. We strive to reduce stigma surrounding mental health by engaging in outreach programs, educational initiatives, and partnerships with local organizations. Our goal is to create an inclusive and supportive community that understands, accepts, and champions mental health.
            </p>
            <p className="text-white/90 text-lg leading-relaxed" data-testid="how-we-help-description">
              At Rendezvous Care, our mental health care is always person centred. In the UK, one in four people experience some form of mental health illness. We understand that trusting a stranger to care for you is a significant step, which is why we focus on building lasting, trust-based relationships with our clients and their families.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  );
}
