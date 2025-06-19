
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Medal, Award, Users, ArrowLeft, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LeaderboardEntry {
  rank: number;
  teamName: string;
  members: string[];
  score: number;
  hackathon: string;
  track: string;
  avatar?: string;
}

const Leaderboard = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [selectedHackathon, setSelectedHackathon] = useState('all');
  const [selectedTrack, setSelectedTrack] = useState('all');

  useEffect(() => {
    // Mock data - replace with API call
    setEntries([
      {
        rank: 1,
        teamName: "AI Innovators",
        members: ["Sarah Chen", "Mike Rodriguez", "Emma Wilson", "David Kim"],
        score: 95.5,
        hackathon: "AI Innovation Challenge",
        track: "Machine Learning"
      },
      {
        rank: 2,
        teamName: "Code Warriors",
        members: ["Alex Thompson", "Lisa Zhang", "John Doe"],
        score: 92.3,
        hackathon: "AI Innovation Challenge",
        track: "Natural Language Processing"
      },
      {
        rank: 3,
        teamName: "Blockchain Builders",
        members: ["Tom Wilson", "Anna Lee", "Chris Park"],
        score: 89.7,
        hackathon: "Web3 Builder Hackathon",
        track: "DeFi"
      },
      {
        rank: 4,
        teamName: "Data Wizards",
        members: ["Sophie Martin", "Jake Johnson", "Maria Garcia"],
        score: 87.2,
        hackathon: "AI Innovation Challenge",
        track: "Data Science"
      },
      {
        rank: 5,
        teamName: "Green Tech Heroes",
        members: ["Oliver Brown", "Eva Davis", "Ryan Miller"],
        score: 85.9,
        hackathon: "Climate Tech Solutions",
        track: "Sustainability"
      }
    ]);
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
            {rank}
          </div>
        );
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600";
      default:
        return "bg-white";
    }
  };

  const filteredEntries = entries.filter(entry => {
    const hackathonMatch = selectedHackathon === 'all' || entry.hackathon === selectedHackathon;
    const trackMatch = selectedTrack === 'all' || entry.track === selectedTrack;
    return hackathonMatch && trackMatch;
  });

  const hackathons = [...new Set(entries.map(e => e.hackathon))];
  const tracks = [...new Set(entries.map(e => e.track))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5 text-white" />
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg"></div>
            <span className="text-2xl font-bold text-white">HackSphere</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/auth/login">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
            <Link to="/auth/signup">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Live Leaderboard
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Real-time rankings across all hackathons
          </p>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Filter by:</span>
            </div>
            <Select value={selectedHackathon} onValueChange={setSelectedHackathon}>
              <SelectTrigger className="w-[200px] bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select Hackathon" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/20">
                <SelectItem value="all" className="text-white hover:bg-white/10">All Hackathons</SelectItem>
                {hackathons.map(hackathon => (
                  <SelectItem key={hackathon} value={hackathon} className="text-white hover:bg-white/10">
                    {hackathon}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedTrack} onValueChange={setSelectedTrack}>
              <SelectTrigger className="w-[200px] bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select Track" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/20">
                <SelectItem value="all" className="text-white hover:bg-white/10">All Tracks</SelectItem>
                {tracks.map(track => (
                  <SelectItem key={track} value={track} className="text-white hover:bg-white/10">
                    {track}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredEntries.slice(0, 3).map((entry, index) => {
            const positions = [1, 0, 2]; // Center first place
            const actualIndex = positions[index];
            const actualEntry = filteredEntries[actualIndex];
            if (!actualEntry) return null;
            
            return (
              <Card
                key={actualEntry.rank}
                className={`${getRankColor(actualEntry.rank)} border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 ${
                  actualEntry.rank === 1 ? 'md:order-2 scale-110' : actualEntry.rank === 2 ? 'md:order-1' : 'md:order-3'
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    {getRankIcon(actualEntry.rank)}
                  </div>
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={actualEntry.avatar} />
                    <AvatarFallback className="bg-purple-500 text-white text-lg font-bold">
                      {actualEntry.teamName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className={`text-xl font-bold mb-2 ${actualEntry.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                    {actualEntry.teamName}
                  </h3>
                  <div className={`text-3xl font-bold mb-2 ${actualEntry.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                    {actualEntry.score}
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {actualEntry.track}
                  </Badge>
                  <div className={`flex items-center justify-center space-x-1 text-sm ${
                    actualEntry.rank <= 3 ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    <Users className="w-4 h-4" />
                    <span>{actualEntry.members.length} members</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Complete Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredEntries.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12">
                      {getRankIcon(entry.rank)}
                    </div>
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={entry.avatar} />
                      <AvatarFallback className="bg-purple-500 text-white font-bold">
                        {entry.teamName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{entry.teamName}</h3>
                      <p className="text-gray-300 text-sm">
                        {entry.members.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <Badge variant="outline" className="text-white border-white/30 mb-1">
                        {entry.track}
                      </Badge>
                      <p className="text-gray-400 text-xs">{entry.hackathon}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{entry.score}</div>
                      <p className="text-gray-400 text-sm">points</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to compete?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Join upcoming hackathons and climb the leaderboard!
              </p>
              <Link to="/auth/signup">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3">
                  Start Your Journey
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
