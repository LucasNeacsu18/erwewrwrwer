import { motion } from "framer-motion";
import { GlassCard } from "@/components/glass-card";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you soon.",
      });
      reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Contact Hero */}
      <AnimatedSection className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <GlassCard className="p-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-white mb-6"
              data-testid="contact-title"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
              data-testid="contact-subtitle"
            >
              Ready to start your journey towards better mental health support? We're here to help.
            </motion.p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Contact Form & Info */}
      <AnimatedSection className="py-20 px-4" delay={0.2}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-white mb-8" data-testid="form-title">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white/90 font-medium mb-2 block">First Name</Label>
                    <Input
                      {...register("firstName")}
                      placeholder="Your first name"
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                      data-testid="input-first-name"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1" data-testid="error-first-name">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-white/90 font-medium mb-2 block">Last Name</Label>
                    <Input
                      {...register("lastName")}
                      placeholder="Your last name"
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                      data-testid="input-last-name"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1" data-testid="error-last-name">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label className="text-white/90 font-medium mb-2 block">Email Address</Label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1" data-testid="error-email">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label className="text-white/90 font-medium mb-2 block">Phone Number</Label>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="Your phone number"
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400"
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label className="text-white/90 font-medium mb-2 block">How can we help?</Label>
                  <Select onValueChange={(value) => setValue("service", value)} data-testid="select-service">
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-blue-400">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="domiciliary">Domiciliary Care</SelectItem>
                      <SelectItem value="supported">Supported Living</SelectItem>
                      <SelectItem value="mental-health">Mental Health Support</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-white/90 font-medium mb-2 block">Message</Label>
                  <Textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your needs or ask any questions..."
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-blue-400 resize-none"
                    data-testid="textarea-message"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1" data-testid="error-message">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl"
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <GlassCard delay={0.3}>
                <h3 className="text-2xl font-bold text-white mb-6" data-testid="contact-info-title">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold" data-testid="text-address-label">Address</p>
                      <p className="text-white/80" data-testid="text-address">
                        75 Manor Rd, Selsey, Chichester PO20 0DE, UK
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold" data-testid="text-phone-label">Phone</p>
                      <p className="text-white/80" data-testid="text-phone">07826468841</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold" data-testid="text-email-label">Email</p>
                      <p className="text-white/80" data-testid="text-email">info@rendezvouscare.co.uk</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard delay={0.5}>
                <h3 className="text-2xl font-bold text-white mb-6" data-testid="office-hours-title">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between" data-testid="hours-monday-friday">
                    <span className="text-white/80">Monday - Friday:</span>
                    <span className="text-white font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between" data-testid="hours-weekend">
                    <span className="text-white/80">Saturday & Sunday:</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </GlassCard>
              
              <GlassCard delay={0.7}>
                <img 
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300" 
                  alt="Modern medical facility" 
                  className="w-full h-48 object-cover rounded-2xl"
                  data-testid="img-medical-facility"
                />
              </GlassCard>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
