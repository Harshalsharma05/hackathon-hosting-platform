import mongoose from 'mongoose';

const hackathonSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    coverImageUrl: { 
        type: String 
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
    organizer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    stages: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Stage' 
        }
    ],
    rubric: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Rubric' 
    },
    problemStatements: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'ProblemStatement' 
        }
    ],
    judges: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Judge' 
        }
    ],
    participants: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Team' 
        }
    ],
    announcements: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Announcement' 
        }
    ],
    isPublished: { 
        type: Boolean, default: false 
    },
}, { timestamps: true });

export const Hackathon = mongoose.model('Hackathon', hackathonSchema);