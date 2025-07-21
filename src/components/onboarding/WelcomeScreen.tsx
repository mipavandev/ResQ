
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, Phone, MapPin, Heart, Star, ArrowRight } from 'lucide-react';
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
    <div className="mobile-app">
      <div className="mobile-screen bg-gradient-to-br from-blue-50 via-teal-50/50 to-green-50/30 overflow-y-auto">
        
        {/* Hero Section */}
        <div className="mobile-content pt-8 pb-8">
          <div className="text-center animate-fade-in">
            
            {/* Logo */}
            <div className="relative mx-auto mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/30 mx-auto">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Brand */}
            <h1 className="text-4xl font-bold text-foreground mb-3">
              ResQ
            </h1>
            <p className="text-xl font-semibold text-primary mb-3">
              Your Personal Safety Guardian
            </p>
            <p className="text-base text-muted-foreground max-w-xs mx-auto leading-relaxed">
              Stay protected with instant emergency response, trusted community support, and smart safety features
            </p>
          </div>

          {/* Features */}
          <div className="my-12">
            <div className="grid grid-cols-2 gap-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              {features.map((feature, index) => (
                <Card key={index} className="comfort-card p-4" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-2">
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
          <Card className="glass-card p-6 border border-green-200/60 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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

          {/* CTA Section */}
          <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <Button 
              onClick={() => navigate('/onboarding')}
              className="w-full primary-button h-14 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
            >
              <span>Get Started - It's Free</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => navigate('/login')}
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-border text-base font-medium transition-all duration-200 hover:bg-muted/50"
            >
              I Already Have an Account
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center space-x-4 mb-4">
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
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto">
              By continuing, you agree to our{' '}
              <span className="text-primary font-medium">Terms</span> and{' '}
              <span className="text-primary font-medium">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
