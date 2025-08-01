
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  MapPin, 
  Bell, 
  Fingerprint,
  Eye,
  EyeOff,
  Smartphone,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Globe,
  HelpCircle,
  FileText,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import BottomNavigation from '../shared/BottomNavigation';

const SettingsScreen = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    biometricLogin: true,
    locationSharing: false,
    pushNotifications: true,
    emergencyAlerts: true,
    soundAlerts: true,
    vibration: true,
    darkMode: false,
    autoRecord: false,
    silentMode: false
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const settingsCategories = [
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        {
          key: 'biometricLogin',
          label: 'Biometric Login',
          description: 'Use fingerprint or face recognition',
          icon: Fingerprint
        },
        {
          key: 'locationSharing',
          label: 'Location Sharing',
          description: 'Share location with trusted contacts',
          icon: MapPin
        },
        {
          key: 'autoRecord',
          label: 'Auto Evidence Recording',
          description: 'Automatically start recording during SOS',
          icon: Eye
        }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        {
          key: 'pushNotifications',
          label: 'Push Notifications',
          description: 'Receive app notifications',
          icon: Smartphone
        },
        {
          key: 'emergencyAlerts',
          label: 'Emergency Alerts',
          description: 'Get notified of nearby emergencies',
          icon: Shield
        },
        {
          key: 'soundAlerts',
          label: 'Sound Alerts',
          description: 'Audio notifications for alerts',
          icon: Volume2
        },
        {
          key: 'vibration',
          label: 'Vibration',
          description: 'Vibrate for important notifications',
          icon: Smartphone
        }
      ]
    },
    {
      title: 'App Preferences',
      icon: Globe,
      items: [
        {
          key: 'darkMode',
          label: 'Dark Mode',
          description: 'Use dark theme',
          icon: Moon
        },
        {
          key: 'silentMode',
          label: 'Silent Mode',
          description: 'Reduce visual elements for discretion',
          icon: EyeOff
        }
      ]
    }
  ];

  const supportItems = [
    {
      label: 'Help & FAQ',
      description: 'Get answers to common questions',
      icon: HelpCircle,
      action: () => {}
    },
    {
      label: 'Privacy Policy',
      description: 'How we protect your data',
      icon: FileText,
      action: () => {}
    },
    {
      label: 'Terms of Service',
      description: 'App usage terms and conditions',
      icon: FileText,
      action: () => {}
    },
    {
      label: 'Contact Support',
      description: 'Get help from our team',
      icon: Mail,
      action: () => {}
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
            onClick={() => navigate('/profile')}
            className="p-2 smooth-transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">Settings</h1>
          <div className="w-9" />
        </div>

        <div className="mobile-content space-y-6">
        {/* Settings Categories */}
        {settingsCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-teal-100 p-2 rounded-lg">
                <category.icon className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
            </div>
            
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-gray-600" />
                    <div>
                      <Label className="text-sm font-medium text-gray-900">{item.label}</Label>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings[item.key as keyof typeof settings]}
                    onCheckedChange={() => toggleSetting(item.key)}
                    className="data-[state=checked]:bg-teal-500"
                  />
                </div>
              ))}
            </div>
          </Card>
        ))}

        {/* Emergency Settings */}
        <Card className="p-4 bg-red-50 border-red-200">
          <h2 className="text-lg font-semibold text-red-900 mb-4">Emergency Settings</h2>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg">
              <Label className="text-sm font-medium text-gray-900">SOS Activation Method</Label>
              <p className="text-xs text-gray-600 mb-2">How to trigger emergency alert</p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Press & Hold
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Triple Tap
                </Button>
              </div>
            </div>
            
            <div className="p-3 bg-white rounded-lg">
              <Label className="text-sm font-medium text-gray-900">Auto-Call Police</Label>
              <p className="text-xs text-gray-600 mb-2">Automatically call emergency services</p>
              <Switch
                checked={true}
                className="data-[state=checked]:bg-red-500"
              />
            </div>
          </div>
        </Card>

        {/* Support & Legal */}
        <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Support & Legal</h2>
          <div className="space-y-1">
            {supportItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full p-3 flex items-center space-x-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180" />
              </button>
            ))}
          </div>
        </Card>

        {/* App Info */}
        <Card className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">ResQ</h3>
          <p className="text-sm text-gray-600 mb-2">Version 1.0.0</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Your personal safety companion. Built with care to keep you protected and connected.
          </p>
        </Card>
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default SettingsScreen;
