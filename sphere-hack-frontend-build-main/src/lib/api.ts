
// Mock API functions for frontend development
// Replace with actual API calls when backend is ready

import { Hackathon, Team, Submission } from "@/types/hackathon";
import { User } from "@/types/user";

// Base API configuration
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// Mock delay to simulate network requests
const mockDelay = (ms: number = 1000) => new Promise(resolve => setTimeout(resolve, ms));

// Authentication
export const authAPI = {
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    await mockDelay(500);
    // Mock login logic
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'participant',
      profile: {
        skills: [],
        interests: [],
        experience: 'intermediate',
        socialLinks: {},
        preferences: {
          emailNotifications: true,
          smsNotifications: false,
          marketingEmails: true,
          timezone: 'UTC',
          language: 'en'
        }
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    return {
      user: mockUser,
      token: 'mock-jwt-token'
    };
  },

  signup: async (userData: Partial<User>): Promise<{ user: User; token: string }> => {
    await mockDelay(800);
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: userData.email || '',
      name: userData.name || '',
      role: userData.role || 'participant',
      profile: {
        skills: [],
        interests: [],
        experience: 'beginner',
        socialLinks: {},
        preferences: {
          emailNotifications: true,
          smsNotifications: false,
          marketingEmails: true,
          timezone: 'UTC',
          language: 'en'
        }
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    return {
      user: mockUser,
      token: 'mock-jwt-token'
    };
  },

  logout: async (): Promise<void> => {
    await mockDelay(200);
    // Clear token from storage
  },

  refreshToken: async (): Promise<{ token: string }> => {
    await mockDelay(300);
    return { token: 'new-mock-jwt-token' };
  }
};

// Hackathon API
export const hackathonAPI = {
  getAll: async (): Promise<Hackathon[]> => {
    await mockDelay();
    // Return mock hackathons
    return [];
  },

  getById: async (id: string): Promise<Hackathon> => {
    await mockDelay();
    // Return mock hackathon
    throw new Error('Hackathon not found');
  },

  create: async (hackathon: Partial<Hackathon>): Promise<Hackathon> => {
    await mockDelay(1200);
    // Create hackathon logic
    throw new Error('Not implemented');
  },

  update: async (id: string, updates: Partial<Hackathon>): Promise<Hackathon> => {
    await mockDelay(800);
    // Update hackathon logic
    throw new Error('Not implemented');
  },

  delete: async (id: string): Promise<void> => {
    await mockDelay(500);
    // Delete hackathon logic
  },

  getParticipants: async (hackathonId: string): Promise<User[]> => {
    await mockDelay();
    return [];
  },

  getTeams: async (hackathonId: string): Promise<Team[]> => {
    await mockDelay();
    return [];
  },

  getSubmissions: async (hackathonId: string): Promise<Submission[]> => {
    await mockDelay();
    return [];
  }
};

// Team API
export const teamAPI = {
  create: async (teamData: Partial<Team>): Promise<Team> => {
    await mockDelay(800);
    throw new Error('Not implemented');
  },

  join: async (teamId: string): Promise<Team> => {
    await mockDelay(600);
    throw new Error('Not implemented');
  },

  leave: async (teamId: string): Promise<void> => {
    await mockDelay(400);
  },

  getMembers: async (teamId: string): Promise<User[]> => {
    await mockDelay();
    return [];
  },

  updateRole: async (teamId: string, userId: string, role: string): Promise<void> => {
    await mockDelay(500);
  }
};

// Submission API
export const submissionAPI = {
  create: async (submissionData: Partial<Submission>): Promise<Submission> => {
    await mockDelay(1000);
    throw new Error('Not implemented');
  },

  update: async (id: string, updates: Partial<Submission>): Promise<Submission> => {
    await mockDelay(800);
    throw new Error('Not implemented');
  },

  delete: async (id: string): Promise<void> => {
    await mockDelay(400);
  },

  getByTeam: async (teamId: string): Promise<Submission[]> => {
    await mockDelay();
    return [];
  },

  evaluate: async (submissionId: string, evaluation: any): Promise<void> => {
    await mockDelay(600);
  }
};

// User API
export const userAPI = {
  getProfile: async (): Promise<User> => {
    await mockDelay();
    throw new Error('Not implemented');
  },

  updateProfile: async (updates: Partial<User>): Promise<User> => {
    await mockDelay(700);
    throw new Error('Not implemented');
  },

  uploadAvatar: async (file: File): Promise<string> => {
    await mockDelay(1500);
    // Return mock URL
    return 'https://example.com/avatar.jpg';
  },

  getNotifications: async (): Promise<any[]> => {
    await mockDelay();
    return [];
  },

  markNotificationRead: async (notificationId: string): Promise<void> => {
    await mockDelay(200);
  }
};

// Analytics API
export const analyticsAPI = {
  getHackathonStats: async (hackathonId: string): Promise<any> => {
    await mockDelay();
    return {
      participants: 0,
      teams: 0,
      submissions: 0,
      completionRate: 0
    };
  },

  getUserStats: async (userId: string): Promise<any> => {
    await mockDelay();
    return {
      hackathonsParticipated: 0,
      projectsSubmitted: 0,
      averageRank: 0,
      achievements: 0
    };
  },

  getLeaderboard: async (hackathonId?: string): Promise<any[]> => {
    await mockDelay();
    return [];
  }
};

// File upload helper
export const uploadFile = async (file: File, type: 'avatar' | 'attachment' | 'logo'): Promise<string> => {
  await mockDelay(2000);
  // Mock file upload
  return `https://example.com/uploads/${type}/${file.name}`;
};

// WebSocket connection for real-time updates
export const wsConnect = (token: string) => {
  // Mock WebSocket connection
  console.log('WebSocket connected with token:', token);
  return {
    disconnect: () => console.log('WebSocket disconnected'),
    subscribe: (channel: string, callback: (data: any) => void) => {
      console.log('Subscribed to channel:', channel);
      return () => console.log('Unsubscribed from channel:', channel);
    }
  };
};
