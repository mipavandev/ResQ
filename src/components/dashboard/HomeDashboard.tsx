
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AlertCircle, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Camera, 
  Users, 
  Newspaper, 
  BookOpen,
  Settings,
  Bell,
  Shield,
  Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BottomNavigation from '../shared/BottomNavigation';

const HomeDashboard = () => {
  const navigate = useNavigate();
  const [sosActive, setSosActive] = useState(false);

  const quickActions = [
    { 
      icon: MapPin, 
      label: 'Share Location', 
      action: () => navigate('/location'),
      bg: 'bg-blue-500'
    },
    { 
      icon: Phone, 
      label: 'Call Police', 
      action: () => window.location.href = 'tel:100',
      bg: 'bg-red-500'
    },
    { 
      icon: MessageSquare, 
      label: 'Anonymous Report', 
      action: () => navigate('/report'),
      bg: 'bg-purple-500'
    },
    { 
      icon: Camera, 
      label: 'Record Evidence', 
      action: () => navigate('/report'),
      bg: 'bg-orange-500'
    }
  ];

  const nearbyAlerts = [
    { type: 'Emergency', location: '0.5 km away', time: '2 min ago', severity: 'high' },
    { type: 'Safety Alert', location: '1.2 km away', time: '15 min ago', severity: 'medium' }
  ];

  const handleSOSPress = () => {
    setSosActive(true);
    navigate('/sos');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Stay Safe</h1>
          <p className="text-gray-600 text-sm">You're protected with ResQ</p>
        </div>
        <div className="flex space-x-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/settings')}
            className="p-2 bg-white/80 rounded-full"
          >
            <Bell className="w-5 h-5 text-gray-600" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/profile')}
            className="p-2 bg-white/80 rounded-full"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>

      <div className="px-6 pb-24">
        {/* SOS Button */}
        <Card className="p-8 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="text-center">
            <div className="mb-4">
              <Shield className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <h2 className="text-lg font-semibold text-gray-900">Emergency SOS</h2>
              <p className="text-gray-600 text-sm">Press and hold to send alert</p>
            </div>
            
            <Button
              onClick={handleSOSPress}
              className={`w-32 h-32 rounded-full text-white font-bold text-xl shadow-lg transition-all duration-200 ${
                sosActive 
                  ? 'bg-red-600 scale-95' 
                  : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-105'
              }`}
            >
              <div className="flex flex-col items-center">
                <AlertCircle className="w-8 h-8 mb-1" />
                <span>SOS</span>
              </div>
            </Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                onClick={action.action}
                variant="outline"
                className="h-16 flex-col space-y-1 border-gray-200 hover:bg-gray-50"
              >
                <div className={`p-2 rounded-lg ${action.bg}`}>
                  <action.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium">{action.label}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Trusted Contacts</p>
                <p className="text-xs text-gray-600">5 active</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Navigation className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Location</p>
                <p className="text-xs text-gray-600">Sharing: Off</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Alerts */}
        <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-3">Nearby Activity</h3>
          <div className="space-y-3">
            {nearbyAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    alert.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{alert.type}</p>
                    <p className="text-xs text-gray-600">{alert.location} • {alert.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-teal-600 text-xs">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* News Preview */}
        <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Safety News</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/news')}
              className="text-teal-600 text-xs"
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium text-gray-900 mb-1">New Safety Zones Added</p>
              <p className="text-xs text-gray-600">5 new verified safe spaces in your area</p>
            </div>
          </div>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default HomeDashboard;
