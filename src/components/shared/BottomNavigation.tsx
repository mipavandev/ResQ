
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
    { icon: BookOpen, label: 'Lessons', path: '/learn' }
  ];

  return (
    <div className="mobile-bottom-nav">
      <div className="w-full bg-background/95 backdrop-blur-md border-t border-border/60 shadow-lg shadow-black/5">
        <div className="flex justify-around px-3 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center space-y-1 p-3 rounded-xl smooth-transition touch-target min-w-[60px] ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-current rounded-full mt-1"></div>
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
