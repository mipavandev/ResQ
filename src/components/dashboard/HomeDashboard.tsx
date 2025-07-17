
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Users, 
  Bell,
  Settings,
  AlertTriangle,
  Heart,
  Navigation,
  Star,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BottomNavigation from '../shared/BottomNavigation';

const HomeDashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState('Sarah');

  const quickActions = [
    { 
      icon: MapPin, 
      label: 'Share Location', 
      action: () => navigate('/location'),
      bg: 'from-blue-500 to-blue-600',
      description: 'Let trusted contacts know where you are'
    },
    { 
      icon: MessageSquare, 
      label: 'Quick Report', 
      action: () => navigate('/report'),
      bg: 'from-purple-500 to-purple-600',
      description: 'Report an incident anonymously'
    },
    { 
      icon: Users, 
      label: 'My Contacts', 
      action: () => navigate('/contacts'),
      bg: 'from-green-500 to-green-600',
      description: 'Manage your trusted network'
    },
    { 
      icon: Phone, 
      label: 'Emergency Call', 
      action: () => window.location.href = 'tel:100',
      bg: 'from-orange-500 to-orange-600',
      description: 'Direct line to emergency services'
    }
  ];

  const safetyStatus = {
    score: 92,
    contacts: 5,
    location: 'shared',
    lastUpdate: '2 min ago'
  };

  const nearbyActivity = [
    { 
      type: 'safety_zone', 
      title: 'Safe Zone Verified',
      location: 'Central Mall - 0.3km',
      time: '5 min ago',
      icon: Shield,
      color: 'text-green-600 bg-green-100'
    },
    { 
      type: 'helper_online', 
      title: 'Community Helper Available',
      location: 'Volunteer Sarah - 0.8km',
      time: '12 min ago',
      icon: Heart,
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const handleSOSPress = () => {
    navigate('/sos');
  };

  return (
    <div className="mobile-container bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/40 pb-20">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="fade-in">
            <h1 className="text-2xl font-bold text-foreground">
              Good evening, {userName}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              You're safe and protected
            </p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/settings')}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all focus-ring"
            >
              <Bell className="w-5 h-5 text-muted-foreground" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/profile')}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all focus-ring"
            >
              <Settings className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Safety Status Card */}
        <Card className="safe-card p-4 mb-6 scale-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Safety Score</h3>
                <p className="text-xs text-muted-foreground">Updated {safetyStatus.lastUpdate}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{safetyStatus.score}%</div>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs text-muted-foreground">Excellent</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-2 bg-blue-50 rounded-lg">
              <Users className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">{safetyStatus.contacts} Contacts</p>
            </div>
            <div className="text-center p-2 bg-green-50 rounded-lg">
              <Navigation className="w-4 h-4 text-green-600 mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">Location On</p>
            </div>
            <div className="text-center p-2 bg-purple-50 rounded-lg">
              <Zap className="w-4 h-4 text-purple-600 mx-auto mb-1" />
              <p className="text-xs font-medium text-foreground">Protected</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Emergency SOS Section */}
      <div className="px-6 mb-8">
        <Card className="glass-card p-6 border-2 border-red-200/60 slide-up">
          <div className="text-center">
            <h2 className="text-lg font-bold text-foreground mb-2">Emergency SOS</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Press and hold to send instant alerts to your trusted contacts and emergency services
            </p>
            
            <Button
              onClick={handleSOSPress}
              className="w-32 h-32 rounded-full emergency-button text-2xl font-bold touch-target focus-ring mx-auto"
            >
              <div className="flex flex-col items-center">
                <AlertTriangle className="w-8 h-8 mb-1" />
                <span>SOS</span>
              </div>
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4">
              Hold for 3 seconds to activate
            </p>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <Card 
              key={index}
              className="safe-card p-4 cursor-pointer hover:shadow-lg transition-all duration-200 scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={action.action}
            >
              <div className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${action.bg} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {action.label}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {action.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Nearby Activity */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Nearby Activity</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/news')}
            className="text-primary text-sm font-medium"
          >
            View All
          </Button>
        </div>
        
        <div className="space-y-3">
          {nearbyActivity.map((activity, index) => (
            <Card key={index} className="safe-card p-4 fade-in">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activity.color}`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground text-sm">{activity.title}</h4>
                  <p className="text-xs text-muted-foreground">{activity.location}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default HomeDashboard;
