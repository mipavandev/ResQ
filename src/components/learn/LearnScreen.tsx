
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Play, 
  Book, 
  Shield, 
  Users, 
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  Star,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const LearnScreen = () => {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 3, 5]);

  const categories = [
    { id: 'basics', label: 'Safety Basics', icon: Shield },
    { id: 'defense', label: 'Self-Defense', icon: Users },
    { id: 'legal', label: 'Legal Rights', icon: Book },
    { id: 'emergency', label: 'Emergency Response', icon: Phone }
  ];

  const lessons = [
    {
      id: 1,
      category: 'basics',
      title: 'Personal Safety Awareness',
      description: 'Learn to identify potential threats and stay alert in various situations',
      duration: '8 min',
      difficulty: 'Beginner',
      rating: 4.8,
      completed: true
    },
    {
      id: 2,
      category: 'basics',
      title: 'Safe Travel Practices',
      description: 'Essential tips for staying safe while traveling alone or in groups',
      duration: '12 min',
      difficulty: 'Beginner',
      rating: 4.7,
      completed: false
    },
    {
      id: 3,
      category: 'defense',
      title: 'Basic Self-Defense Moves',
      description: 'Simple but effective techniques to defend yourself in dangerous situations',
      duration: '15 min',
      difficulty: 'Intermediate',
      rating: 4.9,
      completed: true
    },
    {
      id: 4,
      category: 'defense',
      title: 'Using Everyday Objects for Defense',
      description: 'How to use common items as defensive tools when needed',
      duration: '10 min',
      difficulty: 'Beginner',
      rating: 4.6,
      completed: false
    },
    {
      id: 5,
      category: 'legal',
      title: 'Know Your Rights',
      description: 'Understanding your legal rights and protections under Indian law',
      duration: '20 min',
      difficulty: 'Advanced',
      rating: 4.8,
      completed: true
    },
    {
      id: 6,
      category: 'legal',
      title: 'Reporting Procedures',
      description: 'Step-by-step guide to reporting incidents to authorities',
      duration: '14 min',
      difficulty: 'Intermediate',
      rating: 4.5,
      completed: false
    },
    {
      id: 7,
      category: 'emergency',
      title: 'Emergency Response Plan',
      description: 'Creating and practicing your personal emergency response strategy',
      duration: '18 min',
      difficulty: 'Intermediate',
      rating: 4.7,
      completed: false
    },
    {
      id: 8,
      category: 'emergency',
      title: 'Using Technology for Safety',
      description: 'Maximizing safety apps and features on your smartphone',
      duration: '11 min',
      difficulty: 'Beginner',
      rating: 4.6,
      completed: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const completionPercentage = (completedLessons.length / lessons.length) * 100;

  const startLesson = (lessonId: number) => {
    // Simulate starting a lesson
    console.log(`Starting lesson ${lessonId}`);
  };

  const markComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

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
          <h1 className="text-lg font-semibold text-foreground">Safety Learning</h1>
          <div className="w-9" />
        </div>

        <div className="mobile-content">
        {/* Progress Overview */}
        <Card className="p-6 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Your Progress</h2>
              <p className="text-gray-600 text-sm">Keep learning to stay safer</p>
            </div>
            <div className="text-right">
              <div className="bg-gradient-to-r from-teal-400 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Lessons Completed</span>
              <span className="font-semibold text-gray-900">{completedLessons.length}/{lessons.length}</span>
            </div>
            <Progress value={completionPercentage} className="h-2 bg-gray-200" />
            <p className="text-xs text-gray-500">
              {completionPercentage.toFixed(0)}% complete • Keep going!
            </p>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-4 mb-6 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-purple-200 hover:bg-purple-50"
            >
              <Play className="w-5 h-5 text-purple-600" />
              <span className="text-xs font-medium">Continue Learning</span>
            </Button>
            
            <Button
              variant="outline"
              className="h-16 flex-col space-y-1 border-green-200 hover:bg-green-50"
            >
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-xs font-medium">Practice Quiz</span>
            </Button>
          </div>
        </Card>

        {/* Learning Categories */}
        <Tabs defaultValue="basics" className="mb-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs data-[state=active]:bg-teal-500 data-[state=active]:text-white"
              >
                <category.icon className="w-4 h-4 mb-1" />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4">
              {lessons
                .filter(lesson => lesson.category === category.id)
                .map((lesson) => (
                  <Card key={lesson.id} className="p-4 bg-white/90 backdrop-blur-sm border-0 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm">{lesson.title}</h3>
                          {lesson.completed && (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                          {lesson.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {lesson.duration}
                          </div>
                          <span className={`px-2 py-1 rounded-full ${getDifficultyColor(lesson.difficulty)}`}>
                            {lesson.difficulty}
                          </span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {lesson.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => startLesson(lesson.id)}
                        size="sm"
                        className={`flex-1 ${
                          lesson.completed 
                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                            : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white'
                        }`}
                      >
                        <Play className="w-4 h-4 mr-1" />
                        {lesson.completed ? 'Review' : 'Start'}
                      </Button>
                      
                      {!lesson.completed && (
                        <Button 
                          onClick={() => markComplete(lesson.id)}
                          variant="outline" 
                          size="sm"
                          className="border-green-200 hover:bg-green-50"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Tip */}
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Safety Tip of the Day</h3>
              <p className="text-blue-800 text-sm mb-3">
                Always trust your instincts. If a situation feels unsafe, remove yourself immediately. 
                Your intuition is often your best early warning system.
              </p>
              <Button 
                size="sm" 
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                Learn More Tips
              </Button>
            </div>
          </div>
        </Card>
        </div>

        
      </div>
    </div>
  );
};

export default LearnScreen;
