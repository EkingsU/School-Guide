import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Copy, 
  Check, 
  BookOpen, 
  Terminal, 
  ArrowRight,
  GitBranch,
  Sparkles,
  Download
} from 'lucide-react';
import { 
  MERN_STACK_DETAILS, 
  MONGOOSE_SCHEMAS, 
  API_ROUTES, 
  BEGINNER_LEARNING_ROADMAP 
} from '../data/mernStackData';
import { Language } from '../types';

interface MernStackGuideProps {
  currentLang: Language;
  onClose?: () => void;
}

export const MernStackGuide: React.FC<MernStackGuideProps> = ({
  currentLang,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'schemas' | 'api' | 'scalability' | 'roadmap'>('architecture');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="max-w-4xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 px-3 py-1 rounded-full">
            <Layers className="w-3.5 h-3.5" />
            <span>Recommended Full-Stack Engineering Architecture</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            MERN Technical Stack Proposal for School Guide
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            A comprehensive, battle-tested blueprint tailored for a beginner React developer aiming to construct scalable, full-stack web applications. Covers MongoDB, Express.js, React, Node.js, REST APIs, and performance optimizations for Cameroon.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <strong>Language:</strong> TypeScript / JavaScript
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <strong>Stack:</strong> MERN (MongoDB · Express · React · Node.js)
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <strong>Level:</strong> Beginner-to-Intermediate Friendly
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200">
        {[
          { id: 'architecture', label: '1. Stack Layers & Rationale', icon: Layers },
          { id: 'schemas', label: '2. Database Schemas (Mongoose)', icon: Database },
          { id: 'api', label: '3. REST API Contracts', icon: Server },
          { id: 'scalability', label: '4. Scalability & Performance', icon: Zap },
          { id: 'roadmap', label: '5. Beginner React-to-MERN Roadmap', icon: BookOpen },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                isActive
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Architecture Overview */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          {/* Visual Architecture Flow */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                End-to-End System Architecture & Data Flow
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                How user requests travel from the React client to Express, MongoDB, and external AI services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              {/* Frontend Card */}
              <div className="p-4 rounded-xl border-2 border-emerald-500/30 bg-emerald-50/40 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>React 19 + Tailwind</span>
                </div>
                <p className="text-slate-600">
                  Client-side SPA with responsive UI components, RIASEC assessment state, and language toggles.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-emerald-200">
                  Communicates via native <code>fetch</code> or Axios.
                </div>
              </div>

              {/* Express API Card */}
              <div className="p-4 rounded-xl border-2 border-teal-500/30 bg-teal-50/40 space-y-2">
                <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                  <Server className="w-4 h-4 text-teal-600" />
                  <span>Express.js REST API</span>
                </div>
                <p className="text-slate-600">
                  Routes, controllers, bcrypt password hashing, JWT authorization middleware, and input validation.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-teal-200">
                  Runs on Node.js runtime.
                </div>
              </div>

              {/* Database Card */}
              <div className="p-4 rounded-xl border-2 border-indigo-500/30 bg-indigo-50/40 space-y-2">
                <div className="flex items-center gap-2 font-bold text-indigo-900 text-sm">
                  <Database className="w-4 h-4 text-indigo-600" />
                  <span>MongoDB Atlas + Mongoose</span>
                </div>
                <p className="text-slate-600">
                  Flexible document collections for Students, Careers, Institutions, and Mentorship Bookings.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-indigo-200">
                  Document indexing & pooling.
                </div>
              </div>

              {/* AI & Services Card */}
              <div className="p-4 rounded-xl border-2 border-amber-500/30 bg-amber-50/40 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Gemini AI / External</span>
                </div>
                <p className="text-slate-600">
                  Generates personalized student orientation advice and Cameroon university matching summaries.
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-amber-200">
                  Secured behind Express backend.
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Layer Breakdown */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Technology Evaluation Matrix
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MERN_STACK_DETAILS.map((layer, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {layer.category}
                      </span>
                      <h4 className="font-bold text-base text-slate-900 mt-1">
                        {layer.technology}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {layer.role}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <span className="font-bold text-slate-800">Why for School Guide: </span>
                      <span className="text-slate-600">{layer.whyChosen}</span>
                    </div>

                    <div className="bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100 text-emerald-900">
                      <strong>Beginner Advantage: </strong>
                      <span>{layer.beginnerAdvantage}</span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-700">
                      <strong>Production Consideration: </strong>
                      <span>{layer.productionConsideration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Database Schemas */}
      {activeTab === 'schemas' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                MongoDB Schema Design with Mongoose
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Why MongoDB is uniquely suited for Cameroon’s education system: academic sub-tracks (Grammar, Technical, Commercial) possess differing subject combinations, certification codes, and admission criteria. NoSQL documents store these nested variants without convoluted relational joins.
              </p>
            </div>

            <div className="space-y-6">
              {MONGOOSE_SCHEMAS.map((schema, sIdx) => (
                <div 
                  key={sIdx}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-950 text-slate-100"
                >
                  <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                    <div>
                      <span className="font-bold text-sm text-emerald-400">
                        {schema.collection} Model
                      </span>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {schema.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopy(`schema-${sIdx}`, schema.mongooseCode)}
                      className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedCodeId === `schema-${sIdx}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Mongoose Schema</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-emerald-300/90 overflow-x-auto leading-relaxed max-h-80">
                    {schema.mongooseCode}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: REST API Contracts */}
      {activeTab === 'api' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Express.js RESTful API Route Contracts
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Standard JSON endpoints designed with predictable HTTP verbs, clear response envelopes, and role authorization.
            </p>
          </div>

          <div className="space-y-4">
            {API_ROUTES.map((route, rIdx) => (
              <div 
                key={rIdx}
                className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50/50 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                      route.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      route.method === 'GET' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
                    }`}>
                      {route.method}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-900">
                      {route.endpoint}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    JSON Response
                  </span>
                </div>

                <p className="text-xs text-slate-600">
                  {route.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1 font-mono">
                  {route.reqBody && (
                    <div className="bg-white p-3 rounded border border-slate-200">
                      <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block mb-1">
                        Request Body:
                      </span>
                      <pre className="text-slate-700 whitespace-pre-wrap">{route.reqBody}</pre>
                    </div>
                  )}
                  <div className={`bg-slate-900 p-3 rounded border border-slate-800 text-emerald-400 ${!route.reqBody ? 'sm:col-span-2' : ''}`}>
                    <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block mb-1">
                      Response Body:
                    </span>
                    <pre className="whitespace-pre-wrap">{route.resBody}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Scalability & Performance */}
      {activeTab === 'scalability' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Performance & Low-Bandwidth Optimizations for Cameroon
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Students and parents in Cameroon often access the internet using mobile 3G/4G with metered bundles. The platform must be resilient, lightweight, and fast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span>1. MongoDB Indexing Strategy</span>
                </div>
                <p className="text-xs text-slate-600">
                  Add compound indexes on <code>{`{ streams: 1, sector: 1 }`}</code> and <code>{`{ region: 1 }`}</code>. This allows instantaneous career and university queries across thousands of records without scanning entire collections.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Globe className="w-4 h-4 text-teal-600" />
                  <span>2. Offline PWA & Service Workers</span>
                </div>
                <p className="text-xs text-slate-600">
                  Use Workbox / Service Worker caching so students can review saved GCE subject combinations, career profiles, and scholarship deadlines even during power outages or intermittent connectivity.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                  <span>3. Lean Queries & Pagination</span>
                </div>
                <p className="text-xs text-slate-600">
                  Use Mongoose <code>.lean()</code> queries for read-only listings to bypass heavy document hydration. Always enforce cursor or page-based pagination (default 15 items per page) to reduce JSON payload sizes over mobile networks.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>4. Security & DDoS Protection</span>
                </div>
                <p className="text-xs text-slate-600">
                  Employ <code>express-rate-limit</code> to curb brute-force login attempts, <code>helmet</code> for hardened HTTP headers, and <code>bcryptjs</code> with 10 salt rounds for password safety. Store JWT tokens in secure, HTTP-only cookies.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Beginner Roadmap */}
      {activeTab === 'roadmap' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Step-by-Step Learning Roadmap: From Beginner React to Full MERN
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Follow this structured sequence to turn the School Guide platform into your landmark full-stack portfolio project.
            </p>
          </div>

          <div className="space-y-6">
            {BEGINNER_LEARNING_ROADMAP.map((step, idx) => (
              <div 
                key={idx}
                className="relative pl-8 pb-6 border-l-2 border-emerald-500 last:border-l-0 last:pb-0"
              >
                {/* Timeline Circle */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-xs"></div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                      Step {idx + 1}
                    </span>
                    <h3 className="font-bold text-base text-slate-900">
                      {step.step}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium">
                    Core Focus: {step.focus}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 mt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Concrete Implementation Milestones:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      {step.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
