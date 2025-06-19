
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Calendar, Users, Trophy, Upload, Search, Star, Home, User } from "lucide-react";
import { Link } from "react-router-dom";

interface ParticipantHackathon {
  id: string;
  title: string;
  status: 'upcoming' | 'active' | 'completed';
  teamName?: string;
  teamMembers: number;
  progress: number;
  daysLeft: number;
  myRank?: number;
  totalTeams: number;
}

const ParticipantDashboard = () => {
  const [hackathons, setHackathons] = useState<ParticipantHackathon[]>([]);

  useEffect(() => {
    // Mock data - replace with API call
    setHackathons([
      {
        id: '1',
        title: 'AI Innovation Challenge',
        status: 'active',
        teamName: 'Code Warriors',
        teamMembers: 4,
        progress: 65,
        daysLeft: 2,
        myRank: 5,
        totalTeams: 23
      },
      {
        id: '2',
        title: 'Web3 Builder Hackathon',
        status: 'completed',
        teamName: 'Blockchain Builders',
        teamMembers: 3,
        progress: 100,
        daysLeft: 0,
        myRank: 3,
        totalTeams: 18
      },
      {
        id: '3',
        title: 'Climate Tech Solutions',
        status: 'upcoming',
        teamMembers: 0,
        progress: 0,
        daysLeft: 15,
        totalTeams: 0
      }
    ]);
  }, []);

  const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: "Dashboard", href: "/dashboard/participant" },
    { icon: <Search className="w-5 h-5" />, label: "Browse Hackathons", href: "/dashboard/participant/browse" },
    { icon: <Calendar className="w-5 h-5" />, label: "My Hackathons", href: "/dashboard/participant/hackathons" },
    { icon: <Users className="w-5 h-5" />, label: "My Teams", href: "/dashboard/participant/teams" },
    { icon: <Upload className="w-5 h-5" />, label: "Submissions", href: "/dashboard/participant/submissions" },
    { icon: <Trophy className="w-5 h-5" />, label: "Achievements", href: "/dashboard/participant/achievements" },
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "/dashboard/participant/profile" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'completed':
        return 'bg-gray-500';
      case 'upcoming':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const activeHackathons = hackathons.filter(h => h.status === 'active').length;
  const completedHackathons = hackathons.filter(h => h.status === 'completed').length;
  const avgRank = hackathons.filter(h => h.myRank).reduce((sum, h) => sum + (h.myRank || 0), 0) / hackathons.filter(h => h.myRank).length || 0;

  return (
    <DashboardLayout
      userRole="participant"
      userName="Alex Chen"
      userEmail="alex@student.edu"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-gray-600">Track your hackathon journey and build amazing projects</p>
          </div>
          <Link to="/dashboard/participant/browse">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Search className="w-4 h-4 mr-2" />
              Browse Hackathons
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Hackathons</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeHackathons}</div>
              <p className="text-xs text-muted-foreground">
                Currently participating
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedHackathons}</div>
              <p className="text-xs text-muted-foreground">
                Hackathons finished
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rank</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{Math.round(avgRank) || 'N/A'}</div>
              <p className="text-xs text-muted-foreground">
                Across all hackathons
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Total collaborations
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Active Hackathons */}
        <Card>
          <CardHeader>
            <CardTitle>Your Hackathons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hackathons.map((hackathon) => (
                <div key={hackathon.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{hackathon.title}</h3>
                      <Badge className={`${getStatusColor(hackathon.status)} text-white`}>
                        {hackathon.status}
                      </Badge>
                      {hackathon.myRank && (
                        <Badge variant="outline">
                          Rank #{hackathon.myRank}
                        </Badge>
                      )}
                    </div>
                    
                    {hackathon.teamName && (
                      <p className="text-sm text-gray-600">
                        Team: <span className="font-medium">{hackathon.teamName}</span> ({hackathon.teamMembers} members)
                      </p>
                    )}
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{hackathon.totalTeams} teams participating</span>
                      {hackathon.daysLeft > 0 && (
                        <span>{hackathon.daysLeft} days left</span>
                      )}
                    </div>
                    
                    {hackathon.status === 'active' && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{hackathon.progress}%</span>
                        </div>
                        <Progress value={hackathon.progress} className="w-full h-2" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <Link to={`/dashboard/participant/hackathon/${hackathon.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    {hackathon.status === 'active' && (
                      <Link to={`/dashboard/participant/submit/${hackathon.id}`}>
                        <Button size="sm">
                          Submit Work
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-semibold mb-2">Find Hackathons</h3>
              <p className="text-sm text-gray-600 mb-4">Discover new challenges to join</p>
              <Link to="/dashboard/participant/browse">
                <Button className="w-full">Browse Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold mb-2">Join a Team</h3>
              <p className="text-sm text-gray-600 mb-4">Connect with other participants</p>
              <Link to="/dashboard/participant/teams">
                <Button variant="outline" className="w-full">Find Teams</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-semibold mb-2">View Achievements</h3>
              <p className="text-sm text-gray-600 mb-4">Track your progress and badges</p>
              <Link to="/dashboard/participant/achievements">
                <Button variant="outline" className="w-full">View Achievements</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ParticipantDashboard;
