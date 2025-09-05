import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import logoImage from "@assets/image_1757087096190.png";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
      data-testid="navigation"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-3 perspective-hover"
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            rotateX: 5,
            z: 50
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center float-gentle">
            <img 
              src={logoImage} 
              alt="Rendezvous Care Logo" 
              className="w-12 h-12 object-contain"
              data-testid="logo-image"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Rendezvous Care</h1>
            <p className="text-sm text-white/70">Supported Living & Domiciliary Care Services</p>
          </div>
        </motion.div>
        
        <div className="flex items-center space-x-6">
          {/* CQC Rating Badge */}
          <motion.div
            className="glass-card px-4 py-2 rounded-full flex items-center space-x-2 glow-pulse"
            whileHover={{ scale: 1.05 }}
            data-testid="cqc-rating-badge"
          >
            <Award className="w-4 h-4 text-green-400" />
            <span className="text-white font-semibold text-sm">CQC: Good</span>
          </motion.div>
          
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.button
                className={`text-white font-medium transition-colors duration-300 ${
                  location === item.path ? "text-blue-300" : "hover:text-blue-300"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </motion.button>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
