
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Trophy, Zap, Star, Code, Calendar, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Multi-Role Platform",
      description: "Organize, judge, and participate - all in one seamless platform"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Real-time Leaderboard",
      description: "Live scoring and rankings that update as judges evaluate"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Timeline Management",
      description: "Structured phases with deadlines and milestone tracking"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Custom Rubrics",
      description: "Create detailed scoring criteria with weighted evaluations"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Organizer, TechCorp",
      content: "HackSphere transformed how we run hackathons. The real-time features are incredible!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Developer",
      content: "Best hackathon platform I've used. Clean interface and powerful features.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Student, MIT",
      content: "Love how easy it is to form teams and track our progress throughout the event.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg"></div>
            <span className="text-2xl font-bold text-white">HackSphere</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth/login">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link to="/auth/signup">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              🚀 The Future of Hackathons
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Host & Join
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Epic Hackathons
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              The ultimate platform for organizing, judging, and participating in hackathons. 
              Real-time collaboration, powerful management tools, and seamless experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/signup">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg group">
                  Host a Hackathon
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  View Leaderboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Everything you need to run successful hackathons
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From ideation to evaluation, HackSphere provides all the tools to create memorable hackathon experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 transition-all duration-300 ${
                    hoveredFeature === index ? 'scale-110' : ''
                  }`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-gray-300">Hackathons Hosted</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">25K+</div>
              <div className="text-gray-300">Active Participants</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Loved by organizers and participants
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to create your next hackathon?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of organizers who trust HackSphere to deliver exceptional hackathon experiences.
              </p>
              <Link to="/auth/signup">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/20 bg-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded"></div>
              <span className="text-xl font-bold text-white">HackSphere</span>
            </div>
            <div className="text-gray-400">
              © 2024 HackSphere. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
