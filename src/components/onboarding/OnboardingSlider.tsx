import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, AlertTriangle, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OnboardingSlider = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      icon: Shield,
      title: "Welcome to ResQ",
      subtitle: "Your Safety Companion",
      description: "ResQ helps you stay safe and connected with trusted contacts and emergency services when you need help most.",
      bgGradient: "from-blue-500 via-teal-500 to-blue-600",
      iconBg: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      icon: AlertTriangle,
      title: "Quick Emergency Alerts",
      subtitle: "Help in One Tap",
      description: "Send instant SOS alerts to trusted contacts, nearby users, and emergency services with just one tap.",
      bgGradient: "from-orange-500 via-red-500 to-pink-600",
      iconBg: "from-orange-400 to-red-600"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Live Location Sharing",
      subtitle: "Stay Connected Always",
      description: "Stay connected. Share your real-time location with trusted contacts so they always know where you are when it matters.",
      bgGradient: "from-green-500 via-teal-500 to-cyan-600",
      iconBg: "from-green-400 to-teal-600"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/signup');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const skipOnboarding = () => {
    navigate('/signup');
  };

  return (
    <div className="mobile-app">
      <div className="mobile-screen relative overflow-hidden">
        
        {/* Skip Button */}
        <div className="absolute top-12 right-6 z-50">
          <Button 
            variant="ghost" 
            onClick={skipOnboarding}
            className="text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200"
          >
            Skip
          </Button>
        </div>

        {/* Slides Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out ${
                index === currentSlide 
                  ? 'translate-x-0 opacity-100' 
                  : index < currentSlide 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-full opacity-0'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center text-white">
                
                {/* Icon */}
                <div className={`w-24 h-24 bg-gradient-to-br ${slide.iconBg} rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-black/20 animate-scale-in`}>
                  <slide.icon className="w-12 h-12 text-white" />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl font-medium mb-6 text-white/90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p className="text-base leading-relaxed max-w-sm text-white/80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-32 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/40 scale-100'
              }`}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 right-0 px-8 z-20">
          <div className="flex items-center justify-between">
            
            {/* Previous Button */}
            <Button
              variant="ghost"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`flex items-center space-x-2 text-white hover:bg-white/20 transition-all duration-200 ${
                currentSlide === 0 ? 'opacity-30' : 'opacity-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </Button>

            {/* Next/Get Started Button */}
            <Button
              onClick={nextSlide}
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-105 px-6 py-3 rounded-xl"
            >
              <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}</span>
              {currentSlide < slides.length - 1 && <ChevronRight className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-bounce-gentle" />
        <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-bounce-gentle" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default OnboardingSlider;