
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Shield, 
  MapPin, 
  Bell, 
  Settings,
  FileText,
  Award,
  Users,
  Phone,
  Edit,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';


const ProfileScreen = () => {
  const navigate = useNavigate();

  const userStats = [
    { label: 'Trusted Contacts', value: '5', icon: Users },
    { label: 'Safety Score', value: '92%', icon: Shield },
    { label: 'Lessons Completed', value: '12/16', icon: Award },
    { label: 'Reports Submitted', value: '2', icon: FileText }
  ];

  const menuItems = [
    { 
      icon: User, 
      label: 'Personal Information', 
      description: 'Name, phone, email',
      action: () => navigate('/profile/edit')
    },
    { 
      icon: Users, 
      label: 'Trusted Contacts', 
      description: 'Manage emergency contacts',
      action: () => navigate('/contacts')
    },
    { 
      icon: Shield, 
      label: 'Privacy & Security', 
      description: 'Location sharing, biometrics',
      action: () => navigate('/settings/privacy')
    },
    { 
      icon: Bell, 
      label: 'Notifications', 
      description: 'Alerts and updates',
      action: () => navigate('/settings/notifications')
    },
    { 
      icon: MapPin, 
      label: 'Location Settings', 
      description: 'GPS and sharing preferences',
      action: () => navigate('/settings/location')
    },
    { 
      icon: FileText, 
      label: 'My Reports', 
      description: 'View submitted reports',
      action: () => navigate('/profile/reports')
    },
    { 
      icon: Settings, 
      label: 'App Settings', 
      description: 'Preferences and configuration',
      action: () => navigate('/settings')
    }
  ];

  return (
    <div className="mobile-app">
      <div className="mobile-screen page-transition bg-gradient-to-br from-safe-teal to-safe-blue overflow-y-auto">
        {/* Header */}
        <div className="mobile-header">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/dashboard')}
            className="p-2 smooth-transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">Profile</h1>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/settings')}
            className="p-2 smooth-transition"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        <div className="mobile-content">
        {/* User Info */}
        <Card className="p-6 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">Ananya Sharma</h2>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600 text-sm">ananya.sharma@email.com</p>
            </div>
            <Button variant="ghost" size="sm" className="p-2">
              <Edit className="w-5 h-5 text-gray-500" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-teal-50 rounded-lg">
              <p className="text-sm text-gray-600">Member Since</p>
              <p className="font-semibold text-gray-900">Dec 2024</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Role</p>
              <p className="font-semibold text-gray-900">General User</p>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {userStats.map((stat, index) => (
            <Card key={index} className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm text-center">
              <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-3 rounded-lg inline-block mb-2">
                <stat.icon className="w-6 h-6 text-teal-600" />
              </div>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Menu Items */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="divide-y divide-gray-100">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
              >
                <div className="bg-gray-100 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180" />
              </button>
            ))}
          </div>
        </Card>

        {/* Emergency Contacts Preview */}
        <Card className="p-4 mt-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Emergency Contacts</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/contacts')}
              className="text-teal-600"
            >
              View All
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold">S</span>
              </div>
              <div>
                <p className="text-sm font-medium">Sarah (Sister)</p>
                <p className="text-xs text-gray-600">Online • 2.3 km away</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-semibold">M</span>
              </div>
              <div>
                <p className="text-sm font-medium">Mom</p>
                <p className="text-xs text-gray-600">Available • 12.4 km away</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Emergency Numbers */}
        <Card className="p-4 mt-6 bg-red-50 border-red-200">
          <h3 className="font-semibold text-red-900 mb-3">Emergency Numbers</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={() => window.location.href = 'tel:100'}
              className="bg-red-500 hover:bg-red-600 text-white h-12"
            >
              <Phone className="w-4 h-4 mr-2" />
              Police (100)
            </Button>
            <Button 
              onClick={() => window.location.href = 'tel:1091'}
              className="bg-red-500 hover:bg-red-600 text-white h-12"
            >
              <Phone className="w-4 h-4 mr-2" />
              Women Helpline
            </Button>
          </div>
        </Card>

        {/* Sign Out */}
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="w-full mt-6 py-4 rounded-xl border-red-200 text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </Button>
        </div>

        
      </div>
    </div>
  );
};

export default ProfileScreen;
