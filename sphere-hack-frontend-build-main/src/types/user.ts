
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  profile: UserProfile;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

export type UserRole = 'admin' | 'organizer' | 'judge' | 'participant';

export interface UserProfile {
  phone?: string;
  organization?: string;
  bio?: string;
  skills: string[];
  interests: string[];
  experience: ExperienceLevel;
  socialLinks: SocialLinks;
  preferences: UserPreferences;
}

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface UserPreferences {
  emailNotifications: boolean;
  smsNotifications: boolean;
  marketingEmails: boolean;
  timezone: string;
  language: string;
}

export interface Organizer extends User {
  role: 'organizer';
  organizerProfile: OrganizerProfile;
}

export interface OrganizerProfile {
  organization: string;
  position: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  hackathonsOrganized: number;
  totalParticipants: number;
  rating: number;
  reviews: OrganizerReview[];
}

export interface OrganizerReview {
  id: string;
  hackathonId: string;
  participantId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Judge extends User {
  role: 'judge';
  judgeProfile: JudgeProfile;
}

export interface JudgeProfile {
  expertise: string[];
  yearsOfExperience: number;
  companiesWorkedAt: string[];
  hackathonsJudged: number;
  averageRating: number;
  certifications: Certification[];
  availability: JudgeAvailability;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialUrl?: string;
}

export interface JudgeAvailability {
  weekdays: boolean;
  weekends: boolean;
  preferredTimeSlots: string[];
  timezone: string;
}

export interface Participant extends User {
  role: 'participant';
  participantProfile: ParticipantProfile;
}

export interface ParticipantProfile {
  university?: string;
  graduationYear?: number;
  major?: string;
  hackathonsAttended: number;
  projectsCompleted: number;
  achievements: Achievement[];
  teamPreferences: TeamPreferences;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
  hackathonId?: string;
}

export interface TeamPreferences {
  preferredTeamSize: number;
  preferredRoles: string[];
  communicationStyle: 'formal' | 'casual' | 'flexible';
  workingHours: 'flexible' | 'standard' | 'evening' | 'weekend';
}

export interface Admin extends User {
  role: 'admin';
  adminProfile: AdminProfile;
}

export interface AdminProfile {
  permissions: AdminPermission[];
  department: string;
  accessLevel: 'read' | 'write' | 'admin' | 'super_admin';
}

export type AdminPermission = 
  | 'manage_users'
  | 'manage_hackathons'
  | 'manage_content'
  | 'view_analytics'
  | 'system_settings'
  | 'user_support';
