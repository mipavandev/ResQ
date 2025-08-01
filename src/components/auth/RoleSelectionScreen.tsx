
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Eye, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const RoleSelectionScreen = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>('');

  const roles = [
    {
      id: 'user',
      title: 'General User',
      description: 'Access all safety features, send SOS alerts, and connect with trusted contacts',
      icon: Shield,
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 'guardian',
      title: 'Guardian',
      description: 'Monitor and respond to alerts from people who trust you',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'volunteer',
      title: 'Community Volunteer',
      description: 'Help respond to nearby emergency alerts in your community',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'authority',
      title: 'Police/Authority',
      description: 'Official emergency responder with advanced alert management',
      icon: BadgeCheck,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const handleContinue = () => {
    localStorage.setItem('userRole', selectedRole);
    navigate('/dashboard');
  };

  return (
    <div className="mobile-app">
      <div className="mobile-screen page-transition bg-gradient-to-br from-safe-teal to-safe-blue overflow-y-auto">
        {/* Header */}
        <div className="text-center p-6 pt-12">
          <h1 className="text-2xl font-bold text-foreground mb-2">Choose Your Role</h1>
          <p className="text-muted-foreground text-sm">Select how you'll use ResQ to personalize your experience</p>
        </div>

        <div className="mobile-content">
        <div className="space-y-4 mb-8">
          {roles.map((role) => (
            <Card 
              key={role.id}
              className={`p-4 cursor-pointer transition-all duration-200 ${
                selectedRole === role.id 
                  ? 'ring-2 ring-teal-500 bg-white shadow-lg' 
                  : 'bg-white/80 hover:bg-white hover:shadow-md'
              }`}
              onClick={() => setSelectedRole(role.id)}
            >
              <div className="flex items-start space-x-4">
                <div className={`bg-gradient-to-r ${role.color} p-3 rounded-xl`}>
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{role.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 transition-colors ${
                  selectedRole === role.id 
                    ? 'border-teal-500 bg-teal-500' 
                    : 'border-gray-300'
                }`}>
                  {selectedRole === role.id && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button 
          onClick={handleContinue}
          disabled={!selectedRole}
          className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl text-base font-medium mb-6"
        >
          Continue to ResQ
        </Button>

        <p className="text-center text-xs text-muted-foreground px-4 leading-relaxed">
          You can change your role anytime in settings. Different roles have access to different features.
        </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionScreen;
