export interface TechLayer {
  category: string;
  technology: string;
  role: string;
  whyChosen: string;
  beginnerAdvantage: string;
  productionConsideration: string;
  alternatives: string[];
}

export interface ApiRouteExample {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  description: string;
  reqBody?: string;
  resBody: string;
}

export interface MernSchemaExample {
  collection: string;
  description: string;
  mongooseCode: string;
}

export const MERN_STACK_DETAILS: TechLayer[] = [
  {
    category: 'Frontend Library',
    technology: 'React 19 + Vite + TypeScript',
    role: 'Single Page Application (SPA) user interface, interactive assessment quizzes, dynamic filters, and role dashboards.',
    whyChosen: 'Vite provides near-instant Hot Module Replacement (HMR) and fast builds. React is component-driven, making reusable UI elements (career cards, track selectors) straightforward to compose.',
    beginnerAdvantage: 'Zero complex Webpack configuration. Standard React hooks (useState, useEffect, useMemo) are sufficient to build 95% of features.',
    productionConsideration: 'Ensure code splitting via dynamic imports (React.lazy) and proper state organization to prevent unnecessary re-renders.',
    alternatives: ['Next.js (App Router)', 'Vue.js 3', 'Svelte 5']
  },
  {
    category: 'Styling & Design System',
    technology: 'Tailwind CSS (v4)',
    role: 'Responsive styling, mobile-first layouts, dignified typography, and custom theme tokens.',
    whyChosen: 'Utility-first CSS keeps styles collocated with JSX components, eliminating naming collision issues and dead CSS files. Highly optimized bundle size in production.',
    beginnerAdvantage: 'No context switching between .css files and JSX. Instant auto-completion and standard design tokens (spacing, flexbox, grid).',
    productionConsideration: 'Enforce clean component extraction for repetitive patterns (e.g. Card, Button, FormInput) rather than pasting long class strings.',
    alternatives: ['CSS Modules', 'Shadcn UI', 'Chakra UI']
  },
  {
    category: 'Backend Runtime & Framework',
    technology: 'Node.js + Express.js',
    role: 'RESTful API gateway, authentication middleware, business logic, email notifications, and AI recommendation proxy.',
    whyChosen: 'Unifies the entire stack in JavaScript/TypeScript. Express is minimalistic, battle-tested, unopinionated, and has a vast ecosystem of middleware (cors, helmet, morgan, express-rate-limit).',
    beginnerAdvantage: 'Extremely easy to understand: requests flow through simple middleware functions (req, res, next). Reuses JavaScript syntax learned in React.',
    productionConsideration: 'Use async/await with centralized error handling middleware. Implement express-rate-limit and Helmet for HTTP security headers.',
    alternatives: ['Fastify (higher throughput)', 'NestJS (opinionated enterprise architecture)']
  },
  {
    category: 'Database & ODM',
    technology: 'MongoDB + Mongoose ODM',
    role: 'NoSQL document store for students, academic tracks, careers, institutions, assessment logs, and mentorship appointments.',
    whyChosen: 'The Cameroon educational matrix has varied document structures (e.g., Grammar tracks have GCE subject series; Technical tracks have CAP/F-series; Institutions have diverse faculties and concours). Document-oriented JSON/BSON naturally models nested sub-documents.',
    beginnerAdvantage: 'JSON-like documents map 1:1 with JavaScript objects. Mongoose adds schemas, validation, middleware, and type safety on top of MongoDB.',
    productionConsideration: 'Add compound indexes on frequently queried fields (e.g. `{ stream: 1, region: 1 }`). Use lean() queries in Mongoose for fast read-only data.',
    alternatives: ['PostgreSQL with Prisma/Drizzle (Relational)', 'Supabase', 'Firebase Firestore']
  },
  {
    category: 'Authentication & Security',
    technology: 'JWT (JSON Web Tokens) + bcryptjs + HTTP-Only Cookies',
    role: 'Secure user login, registration, and role-based access control (Student, Parent, Counsellor, Admin).',
    whyChosen: 'Stateless authentication that works seamlessly between decoupled React SPAs and Express backends without complex server-side session stores.',
    beginnerAdvantage: 'Direct, transparent mechanism: user submits credentials -> server hashes with bcrypt -> server issues JWT -> client passes JWT in header or secure cookie.',
    productionConsideration: 'Store JWT in HTTP-Only, Secure, SameSite cookies to mitigate XSS attacks. Implement refresh token rotation.',
    alternatives: ['Firebase Auth', 'Auth0', 'Supabase Auth']
  },
  {
    category: 'AI Recommendation Integration',
    technology: '@google/genai (Gemini 2.5 Flash / Flash Lite)',
    role: 'Personalized career pathway synthesis based on student assessment answers, academic strengths, and Cameroon job market trends.',
    whyChosen: 'Ultra-fast inference latency, generous cost-efficiency, and deep multilingual comprehension (handling both English and French Cameroon education terminologies).',
    beginnerAdvantage: 'Simple Node.js SDK call on the Express backend (`ai.models.generateContent`) with structured JSON schema outputs.',
    productionConsideration: 'Always call Gemini from the Express backend proxy (`/api/recommend`) to keep API keys secure and enforce rate limits per student.',
    alternatives: ['Rule-based scoring matrix (client-side fallback)', 'OpenAI API']
  },
  {
    category: 'Deployment & Hosting',
    technology: 'Vercel / Render / Google Cloud Run + MongoDB Atlas',
    role: 'Cloud deployment, managed database clusters, and global CDN delivery.',
    whyChosen: 'MongoDB Atlas provides a generous free tier with automatic backups and monitoring. Frontend deploys effortlessly to Vercel/Netlify; backend on Render or Cloud Run.',
    beginnerAdvantage: 'Zero server maintenance. Push to GitHub triggers automatic CI/CD builds with HTTPS enabled out of the box.',
    productionConsideration: 'Set connection pooling limits in Mongoose to prevent hitting Atlas free-tier connection limits.',
    alternatives: ['DigitalOcean Droplets', 'AWS ECS / Elastic Beanstalk']
  }
];

export const MONGOOSE_SCHEMAS: MernSchemaExample[] = [
  {
    collection: 'User (Students, Parents, Counsellors)',
    description: 'Manages user authentication, profile data, education sub-system, and enrolled tracks.',
    mongooseCode: `import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['student', 'parent', 'counsellor', 'admin'], 
    default: 'student' 
  },
  preferredLanguage: { type: String, enum: ['en', 'fr'], default: 'en' },
  profile: {
    educationStream: { 
      type: String, 
      enum: ['grammar', 'technical', 'commercial', 'vocational'] 
    },
    subSystem: { type: String, enum: ['Anglophone', 'Francophone'] },
    currentLevel: { type: String }, // e.g. "Lower Sixth", "Terminale", "Form 5"
    targetCity: { type: String },   // e.g. "Douala", "Yaoundé", "Buea"
    interests: [{ type: String }],
    savedCareerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Career' }]
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);`
  },
  {
    collection: 'CareerPathway',
    description: 'Stores career profiles, required high school subjects in Cameroon, entry concours, and salary ranges.',
    mongooseCode: `import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  titleEn: { type: String, required: true },
  titleFr: { type: String, required: true },
  sector: { type: String, required: true, index: true },
  streams: [{ 
    type: String, 
    enum: ['grammar', 'technical', 'commercial', 'vocational'] 
  }],
  recommendedSubjectsEn: [{ type: String }],
  recommendedSubjectsFr: [{ type: String }],
  concoursRequired: { type: String }, // e.g. "Concours d'Entrée à l'ENSPY"
  localInstitutions: [{ type: String }], // e.g. ["ENSP Yaoundé", "COLTECH Bamenda"]
  demandLevel: { 
    type: String, 
    enum: ['Moderate', 'High', 'Very High'], 
    default: 'High' 
  },
  salaryRangeXAF: { type: String }, // e.g. "250,000 - 600,000 XAF/mo"
  riasecCode: { type: String }       // e.g. "RIC"
}, { timestamps: true });

careerSchema.index({ sector: 1, streams: 1 });
export const Career = mongoose.model('Career', careerSchema);`
  },
  {
    collection: 'AssessmentResult',
    description: 'Tracks students Holland Code (RIASEC) quiz scores and recommendations.',
    mongooseCode: `import mongoose from 'mongoose';

const assessmentResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  scores: {
    realistic: { type: Number, default: 0 },
    investigative: { type: Number, default: 0 },
    artistic: { type: Number, default: 0 },
    social: { type: Number, default: 0 },
    enterprising: { type: Number, default: 0 },
    conventional: { type: Number, default: 0 }
  },
  dominantCodes: [{ type: String }], // e.g. ["Investigative", "Realistic"]
  recommendedCareerIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Career' }],
  aiSummary: { type: String }
}, { timestamps: true });

export const AssessmentResult = mongoose.model('AssessmentResult', assessmentResultSchema);`
  },
  {
    collection: 'MentorshipBooking',
    description: 'Handles 1-on-1 counseling appointments between students/parents and licensed guidance counsellors.',
    mongooseCode: `import mongoose from 'mongoose';

const mentorshipBookingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  counsellorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  preferredDate: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  topics: [{ type: String }], // e.g. ["Subject Combination", "University Concours"]
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
    default: 'pending' 
  },
  meetingLink: { type: String },
  notes: { type: String }
}, { timestamps: true });

export const MentorshipBooking = mongoose.model('MentorshipBooking', mentorshipBookingSchema);`
  }
];

export const API_ROUTES: ApiRouteExample[] = [
  {
    method: 'POST',
    endpoint: '/api/v1/auth/register',
    description: 'Registers a new student, parent, or counsellor. Hashes password with bcrypt and returns a signed JWT.',
    reqBody: `{ "fullName": "Amina Etoa", "email": "amina@example.com", "password": "...", "role": "student" }`,
    resBody: `{ "success": true, "token": "jwt.ey...", "user": { "id": "64f...", "role": "student" } }`
  },
  {
    method: 'POST',
    endpoint: '/api/v1/auth/login',
    description: 'Authenticates existing user credentials and returns session tokens.',
    reqBody: `{ "email": "amina@example.com", "password": "..." }`,
    resBody: `{ "success": true, "token": "jwt.ey...", "user": { "id": "64f...", "fullName": "Amina Etoa" } }`
  },
  {
    method: 'GET',
    endpoint: '/api/v1/careers?stream=grammar&sector=tech',
    description: 'Fetches filtered career guidance records with pagination and search queries.',
    resBody: `{ "total": 24, "page": 1, "data": [ { "titleEn": "Software Engineer", "streams": ["grammar", "technical"] } ] }`
  },
  {
    method: 'POST',
    endpoint: '/api/v1/assessments/submit',
    description: 'Submits answers for RIASEC questionnaire, computes Holland profile, and triggers AI recommendation synthesis.',
    reqBody: `{ "answers": [ { "questionId": 1, "selectedRiasec": "Investigative" } ] }`,
    resBody: `{ "dominantCodes": ["Investigative", "Realistic"], "suggestedCareers": [...], "aiInsights": "..." }`
  },
  {
    method: 'POST',
    endpoint: '/api/v1/mentorship/book',
    description: 'Schedules a 1-on-1 career guidance appointment with an accredited counselor in Douala/Yaoundé/Buea.',
    reqBody: `{ "counsellorId": "64f...", "date": "2026-10-15", "slot": "14:00", "topic": "GCE Subject Choice" }`,
    resBody: `{ "bookingId": "64f...", "status": "confirmed" }`
  }
];

export const BEGINNER_LEARNING_ROADMAP = [
  {
    step: 'Phase 1: React Fundamentals & UI Components',
    focus: 'Master React state, props, and Tailwind layout',
    tasks: [
      'Build reusable UI cards for Cameroon academic tracks (Grammar, Technical, Commercial).',
      'Manage multi-step quiz state with useState and useReducer.',
      'Implement client-side search and filters using Array.filter and useMemo.',
      'Implement bilingual toggling (EN/FR) with React Context API.'
    ]
  },
  {
    step: 'Phase 2: Express Server & REST API Design',
    focus: 'Set up Node.js backend and clean controllers',
    tasks: [
      'Initialize Express app with cors, express.json(), and helmet.',
      'Organize code using MVC (Models, Controllers, Routes, Middlewares).',
      'Create CRUD endpoints for Careers, Institutions, and Opportunities.',
      'Test all API endpoints using Thunder Client or Postman.'
    ]
  },
  {
    step: 'Phase 3: MongoDB Atlas & Mongoose Schemas',
    focus: 'Data persistence and query optimization',
    tasks: [
      'Create free MongoDB Atlas cluster and connect via mongoose.connect(process.env.MONGODB_URI).',
      'Define schemas with validation rules for Users, Careers, and Assessments.',
      'Use MongoDB compound indexing for high-speed queries on sector and stream.',
      'Seed the database with authentic Cameroon universities and Grande Écoles.'
    ]
  },
  {
    step: 'Phase 4: Authentication & Security',
    focus: 'User accounts and Role-Based Access Control',
    tasks: [
      'Hash passwords with bcryptjs (salt rounds = 10).',
      'Generate JWT tokens on login and verify via custom authMiddleware.',
      'Protect role-specific routes (e.g. only guidance counsellors can view student dossiers).',
      'Store JWT in HTTP-Only cookies to protect beginner apps from XSS.'
    ]
  },
  {
    step: 'Phase 5: Full Integration & Deployment',
    focus: 'Connect React client to Express backend and deploy',
    tasks: [
      'Use native fetch or Axios with central API client for backend requests.',
      'Deploy Express backend to Render or Cloud Run with production env variables.',
      'Deploy React frontend to Vercel/Netlify with VITE_API_URL pointing to the backend.',
      'Enable PWA / Service Worker caching for offline viewing on low-connectivity networks.'
    ]
  }
];
