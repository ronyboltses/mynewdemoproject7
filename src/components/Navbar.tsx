import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Calculator, Info, FileText, PenTool as Tool, User, MessageSquare } from 'lucide-react';
import { useAdminStore } from '../store/adminStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const { isAuthenticated, logout, settings } = useAdminStore();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/calculator/advanced', label: 'Calculator', icon: Calculator },
    { path: '/about', label: 'About', icon: Info },
    { path: '/factors', label: 'Factors', icon: FileText },
    { path: '/tools', label: 'Tools', icon: Tool },
    { path: '/contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-lg z-50 glass-effect"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            {settings.logoUrl ? (
              <img src={settings.logoUrl} alt="Logo" className="w-8 h-8 object-contain" />
            ) : (
              <Building2 className="w-8 h-8" style={{ color: settings.primaryColor }} />
            )}
            <span className="text-xl font-bold" style={{ color: settings.textColor }}>
              {settings.siteName}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <AnimatePresence mode="wait">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.path}
                      className="flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300"
                      style={{
                        backgroundColor: isActive(item.path) ? settings.primaryColor : 'transparent',
                        color: isActive(item.path) ? '#ffffff' : settings.textColor
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/admin"
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: isActive('/admin') ? settings.primaryColor : 'transparent',
                    color: isActive('/admin') ? '#ffffff' : settings.textColor
                  }}
                >
                  <User className="w-4 h-4" />
                  <span>Admin</span>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={logout}
                  className="px-4 py-2 rounded-lg transition-colors"
                  style={{ color: settings.accentColor }}
                >
                  Logout
                </motion.button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors"
                style={{ color: settings.textColor }}
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}