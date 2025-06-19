
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Plus, Calendar, Users, Trophy, Settings, Megaphone, BarChart3, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface Hackathon {
  id: string;
  title: string;
  status: 'draft' | 'active' | 'completed';
  participants: number;
  startDate: string;
  endDate: string;
  submissions: number;
}

const OrganizerDashboard = () => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);

  useEffect(() => {
    // Mock data - replace with API call
    setHackathons([
      {
        id: '1',
        title: 'AI Innovation Challenge',
        status: 'active',
        participants: 156,
        startDate: '2024-01-15',
        endDate: '2024-01-17',
        submissions: 23
      },
      {
        id: '2',
        title: 'Web3 Builder Hackathon',
        status: 'completed',
        participants: 89,
        startDate: '2024-01-01',
        endDate: '2024-01-03',
        submissions: 45
      },
      {
        id: '3',
        title: 'Climate Tech Solutions',
        status: 'draft',
        participants: 0,
        startDate: '2024-02-01',
        endDate: '2024-02-03',
        submissions: 0
      }
    ]);
  }, []);

  const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: "Dashboard", href: "/dashboard/organizer" },
    { icon: <Plus className="w-5 h-5" />, label: "Create Hackathon", href: "/dashboard/organizer/create" },
    { icon: <Calendar className="w-5 h-5" />, label: "My Hackathons", href: "/dashboard/organizer/hackathons" },
    { icon: <Megaphone className="w-5 h-5" />, label: "Announcements", href: "/dashboard/organizer/announcements" },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Analytics", href: "/dashboard/organizer/analytics" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", href: "/dashboard/organizer/settings" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'completed':
        return 'bg-gray-500';
      case 'draft':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const totalParticipants = hackathons.reduce((sum, h) => sum + h.participants, 0);
  const activeHackathons = hackathons.filter(h => h.status === 'active').length;
  const totalSubmissions = hackathons.reduce((sum, h) => sum + h.submissions, 0);

  return (
    <DashboardLayout
      userRole="organizer"
      userName="Sarah Johnson"
      userEmail="sarah@techcorp.com"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Organizer Dashboard</h1>
            <p className="text-gray-600">Manage your hackathons and track participant engagement</p>
          </div>
          <Link to="/dashboard/organizer/create">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Plus className="w-4 h-4 mr-2" />
              Create Hackathon
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Hackathons</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{hackathons.length}</div>
              <p className="text-xs text-muted-foreground">
                {activeHackathons} currently active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalParticipants}</div>
              <p className="text-xs text-muted-foreground">
                Across all hackathons
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSubmissions}</div>
              <p className="text-xs text-muted-foreground">
                Projects submitted
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">
                Completion rate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Hackathons */}
        <Card>
          <CardHeader>
            <CardTitle>Your Hackathons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hackathons.map((hackathon) => (
                <div key={hackathon.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{hackathon.title}</h3>
                      <Badge className={`${getStatusColor(hackathon.status)} text-white`}>
                        {hackathon.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{hackathon.participants} participants</span>
                      <span>{hackathon.submissions} submissions</span>
                    </div>
                    {hackathon.status === 'active' && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>65%</span>
                        </div>
                        <Progress value={65} className="w-full h-2" />
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/dashboard/organizer/hackathon/${hackathon.id}/manage`}>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
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
              <Plus className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-semibold mb-2">Create New Hackathon</h3>
              <p className="text-sm text-gray-600 mb-4">Start organizing your next event</p>
              <Link to="/dashboard/organizer/create">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Megaphone className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold mb-2">Send Announcement</h3>
              <p className="text-sm text-gray-600 mb-4">Notify all participants</p>
              <Link to="/dashboard/organizer/announcements">
                <Button variant="outline" className="w-full">Create Announcement</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-semibold mb-2">View Analytics</h3>
              <p className="text-sm text-gray-600 mb-4">Track performance metrics</p>
              <Link to="/dashboard/organizer/analytics">
                <Button variant="outline" className="w-full">View Reports</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrganizerDashboard;
