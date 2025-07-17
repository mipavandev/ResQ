
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MapPin, Users, Newspaper, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: MapPin, label: 'Location', path: '/location' },
    { icon: Users, label: 'Contacts', path: '/contacts' },
    { icon: Newspaper, label: 'News', path: '/news' },
    { icon: BookOpen, label: 'Learn', path: '/learn' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-sm mx-auto bg-white/90 backdrop-blur-md border-t border-gray-200/60 shadow-2xl shadow-black/5">
        <div className="flex justify-around px-2 py-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all duration-200 touch-target min-w-[60px] ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
