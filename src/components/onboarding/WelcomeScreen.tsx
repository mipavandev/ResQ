
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Phone, MapPin, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Instant SOS",
      description: "One-tap emergency alerts to trusted contacts and authorities"
    },
    {
      icon: MapPin,
      title: "Safe Location Sharing",
      description: "Share your real-time location with people you trust"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with verified helpers and volunteers nearby"
    },
    {
      icon: Heart,
      title: "Always Protected",
      description: "24/7 safety monitoring and emergency response"
    }
  ];

  return (
    <div className="mobile-container bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/40">
      {/* Hero Section */}
      <div className="px-6 pt-16 pb-8">
        <div className="text-center fade-in">
          {/* Logo */}
          <div className="relative mx-auto mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-teal-600 rounded-3xl flex items-center justify-center shadow-xl shadow-primary/25 mx-auto">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Brand */}
          <h1 className="text-4xl font-bold text-foreground mb-3 text-shadow">
            ResQ
          </h1>
          <p className="text-xl font-medium text-primary mb-2">
            Your Personal Safety Guardian
          </p>
          <p className="text-base text-muted-foreground max-w-sm mx-auto leading-relaxed">
            Stay protected with instant emergency response, trusted community support, and smart safety features
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 mb-8">
        <div className="grid grid-cols-2 gap-4 slide-up">
          {features.map((feature, index) => (
            <Card key={index} className="safe-card p-4 scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="px-6 mb-8">
        <Card className="glass-card p-6 border border-green-200/60 fade-in">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-foreground italic mb-2">
                "ResQ helped me feel safe during my late night commute. The community support is amazing!"
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                Sarah M. • Verified User
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="px-6 pb-12">
        <div className="space-y-4 scale-in">
          <Button 
            onClick={() => navigate('/signup')}
            className="w-full primary-button h-14 rounded-2xl text-lg font-semibold touch-target focus-ring"
          >
            Get Started - It's Free
          </Button>
          
          <Button 
            onClick={() => navigate('/login')}
            variant="outline"
            className="w-full h-12 rounded-xl border-2 border-gray-200 text-base font-medium touch-target focus-ring hover:bg-gray-50 transition-colors"
          >
            I Already Have an Account
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-3">
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-xs text-muted-foreground font-medium">Verified Safe</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-muted-foreground font-medium">10K+ Users</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-purple-500" />
              <span className="text-xs text-muted-foreground font-medium">24/7 Support</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            By continuing, you agree to our{' '}
            <span className="text-primary font-medium">Terms</span> and{' '}
            <span className="text-primary font-medium">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
