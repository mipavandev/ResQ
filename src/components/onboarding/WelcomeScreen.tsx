
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Phone, MapPin, BookOpen, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: AlertCircle,
      title: "Instant SOS Alerts",
      description: "Send emergency alerts to trusted contacts and nearby helpers instantly"
    },
    {
      icon: MapPin,
      title: "Real-time Location",
      description: "Share your live location with trusted contacts during emergencies"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with verified helpers and volunteers in your area"
    },
    {
      icon: BookOpen,
      title: "Safety Education",
      description: "Learn self-defense techniques and safety tips from experts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col">
      {/* Header */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ResQ</h1>
          <p className="text-xl text-gray-600 mb-2">Your Personal Safety Companion</p>
          <p className="text-base text-gray-500 max-w-sm mx-auto leading-relaxed">
            Empowering you with instant emergency response, community support, and safety education
          </p>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-md space-y-4 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <feature.icon className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                  <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="px-6 pb-8">
        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/signup')}
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl text-lg font-medium shadow-lg"
          >
            Get Started
          </Button>
          <Button 
            onClick={() => navigate('/login')}
            variant="outline"
            className="w-full py-4 rounded-xl text-lg font-medium border-gray-200"
          >
            Sign In
          </Button>
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
