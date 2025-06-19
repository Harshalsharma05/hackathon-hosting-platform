
export interface Hackathon {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'active' | 'completed' | 'upcoming';
  organizerId: string;
  startDate: string;
  endDate: string;
  registrationDeadline: string;
  maxParticipants?: number;
  currentParticipants: number;
  tracks: Track[];
  stages: Stage[];
  problemStatements: ProblemStatement[];
  rubric: Rubric;
  judges: Judge[];
  teams: Team[];
  createdAt: string;
  updatedAt: string;
}

export interface Track {
  id: string;
  name: string;
  description: string;
  maxTeams?: number;
  currentTeams: number;
}

export interface Stage {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  deliverables: string[];
  submissionRequired: boolean;
}

export interface ProblemStatement {
  id: string;
  title: string;
  description: string;
  trackId?: string;
  attachments: Attachment[];
  difficultyLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface Attachment {
  id: string;
  filename: string;
  url: string;
  type: 'pdf' | 'image' | 'video' | 'other';
  size: number;
}

export interface Rubric {
  id: string;
  criteria: RubricCriteria[];
  totalWeight: number;
}

export interface RubricCriteria {
  id: string;
  name: string;
  description: string;
  weight: number; // Percentage (0-100)
  maxScore: number;
}

export interface Judge {
  id: string;
  userId: string;
  name: string;
  email: string;
  expertise: string[];
  assignedTracks: string[];
  assignedTeams: string[];
}

export interface Team {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  hackathonId: string;
  trackId?: string;
  members: TeamMember[];
  submissions: Submission[];
  currentScore?: number;
  rank?: number;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: 'leader' | 'member';
  skills: string[];
  joinedAt: string;
}

export interface Submission {
  id: string;
  teamId: string;
  stageId: string;
  title: string;
  description: string;
  repositoryUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  attachments: Attachment[];
  submittedAt: string;
  evaluations: Evaluation[];
  averageScore?: number;
}

export interface Evaluation {
  id: string;
  submissionId: string;
  judgeId: string;
  scores: RubricScore[];
  comments: string;
  totalScore: number;
  evaluatedAt: string;
}

export interface RubricScore {
  criteriaId: string;
  score: number;
  maxScore: number;
  comments?: string;
}
