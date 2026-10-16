import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  Target, 
  Users, 
  Sparkles, 
  ArrowRight,
  Compass,
  GraduationCap,
  Building2
} from 'lucide-react';
import { Language } from '../types';

interface PresentationGuideModalProps {
  currentLang: Language;
  onClose: () => void;
  onStartJourney?: () => void;
}

export const PresentationGuideModal: React.FC<PresentationGuideModalProps> = ({
  currentLang,
  onClose,
  onStartJourney
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      slideNumber: '01 / 09',
      category: 'EDUCATION × CAREER PATHWAYS',
      title: 'M Learning Guide',
      subtitle: 'A digital pathway from school choices to career confidence.',
      tag: 'FOR STUDENTS, FAMILIES, AND EDUCATORS',
      type: 'cover',
      content: {
        points: [
          'Comprehensive guidance platform for secondary and high school learners in Cameroon.',
          'Integrated pathways for Grammar, Technical, and Commercial education systems.',
          'Bilingual English and French accessibility nationwide.'
        ]
      }
    },
    {
      slideNumber: '02 / 09',
      category: 'THE CONTEXT',
      title: 'The decision gap',
      subtitle: 'Too many learners are asked to choose a future before they have the information to see it clearly.',
      tag: '01 A GUIDANCE PROBLEM · A CLEARER START CHANGES THE PATH',
      type: 'numbered',
      content: {
        items: [
          { num: '01', text: 'Many students make subject and career choices without enough guidance' },
          { num: '02', text: 'Peer pressure and social expectations can outweigh personal interests and abilities' },
          { num: '03', text: 'School leavers often struggle to find credible training, scholarships, and internships' },
          { num: '04', text: 'The result: weaker motivation, poor choices, and a harder transition into work' }
        ]
      }
    },
    {
      slideNumber: '03 / 09',
      category: 'WHO IT SERVES',
      title: 'Built for the full guidance community',
      subtitle: 'The learner is at the center, but better decisions happen when the people around them can see the same path.',
      tag: 'STUDENTS · FAMILIES · EDUCATORS',
      type: 'audience',
      content: {
        audiences: [
          'Secondary and high school students',
          'Grammar, Technical, and Commercial learners',
          'School leavers and young adults',
          'Parents supporting education decisions',
          'Teachers and school guidance counsellors'
        ],
        highlight: 'SHARED VISIBILITY: A stronger support system around every learner.'
      }
    },
    {
      slideNumber: '04 / 09',
      category: 'THE PLATFORM',
      title: 'One place to plan what comes next',
      subtitle: 'A single home for the next decision: discover, compare, and choose with confidence.',
      tag: 'DISCOVER · COMPARE · CHOOSE',
      type: 'numbered',
      content: {
        items: [
          { num: '01', text: 'Academic guidance across Grammar, Technical, and Commercial pathways' },
          { num: '02', text: 'Career pathway recommendations shaped by interests and goals' },
          { num: '03', text: 'University and vocational training information' },
          { num: '04', text: 'Scholarship, internship, and digital skills opportunities' },
          { num: '05', text: 'English and French language support for wider access' }
        ]
      }
    },
    {
      slideNumber: '05 / 09',
      category: 'THE EXPERIENCE',
      title: 'A journey from uncertainty to direction',
      subtitle: 'A path that gets clearer one step at a time.',
      tag: '5-STEP LEARNER JOURNEY',
      type: 'journey',
      content: {
        steps: [
          { num: '01', name: 'Discover', desc: 'Understand subjects, pathways, and career possibilities' },
          { num: '02', name: 'Assess', desc: 'Reflect on aptitude, personality, interests, and strengths' },
          { num: '03', name: 'Explore', desc: 'Compare universities, vocational options, and skills programmes' },
          { num: '04', name: 'Plan', desc: 'Turn recommendations into clear education and career goals' },
          { num: '05', name: 'Connect', desc: 'Access mentorship, counselling, and development opportunities' }
        ]
      }
    },
    {
      slideNumber: '06 / 09',
      category: 'THE PERSONAL LAYER',
      title: 'Guidance that feels personal',
      subtitle: 'A recommendation is useful when a learner can see themselves in it.',
      tag: 'RECOMMENDATION + REFLECTION + HUMAN SUPPORT',
      type: 'numbered',
      content: {
        items: [
          { num: '01', text: 'AI-powered recommendations tailored to each learner' },
          { num: '02', text: 'Career aptitude and personality assessments' },
          { num: '03', text: 'One-on-one mentorship and career counselling' },
          { num: '04', text: 'Separate dashboards for students, parents, and counsellors' },
          { num: '05', text: 'Resources that keep learners focused on their goals' }
        ]
      }
    },
    {
      slideNumber: '07 / 09',
      category: 'THE MODEL',
      title: 'Accessible first. Deeper support when needed.',
      subtitle: 'Sustainable access through a balanced freemium model and institutional partnerships.',
      tag: 'SUSTAINABLE ACCESS',
      type: 'model',
      content: {
        free: [
          'Career guidance, academic pathways, and learning resources',
          'Basic career assessments',
          'Scholarship and university information'
        ],
        premium: [
          'Personalized mentorship and career counselling',
          'Advanced reports, admission guidance, CV writing, and interview preparation',
          'Webinars and coaching sessions'
        ],
        partnerships: 'Partnerships can extend value through universities, training centres, education organizations, and employers.'
      }
    },
    {
      slideNumber: '08 / 09',
      category: 'THE OUTCOME',
      title: 'The impact to design for',
      subtitle: 'Information that becomes momentum.',
      tag: 'IMPACT & RESULTS',
      type: 'grid',
      content: {
        impacts: [
          { num: '01', text: 'Improve academic and career awareness' },
          { num: '02', text: 'Reduce poor subject and career choices' },
          { num: '03', text: 'Promote vocational and digital skill acquisition' },
          { num: '04', text: 'Strengthen school guidance and counselling' },
          { num: '05', text: 'Bridge the gap between education and employment' },
          { num: '06', text: 'Help young people make informed decisions about their future' }
        ]
      }
    },
    {
      slideNumber: '09 / 09',
      category: 'THE VISION',
      title: 'A clearer future starts with better guidance',
      subtitle: 'M Learning Guide can become a trusted digital home for academic guidance, career planning, mentorship, and skill development in Cameroon.',
      tag: 'PROJECT VISION · EMPOWER EVERY STUDENT TO DISCOVER AND PURSUE THEIR FULL POTENTIAL',
      type: 'vision',
      content: {
        visionStatement: 'Empower every student to discover and pursue their full potential.',
        nextStep: 'Validate the first learner journey with students, parents, and counsellors.'
      }
    }
  ];

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full text-slate-100 shadow-2xl relative flex flex-col overflow-hidden max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="bg-slate-950/90 border-b border-slate-800 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="font-bold text-xs uppercase tracking-wider text-slate-300">
              M LEARNING GUIDE · PRESENTATION GUIDE
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-emerald-400 font-mono font-semibold">
              Slide {slide.slideNumber}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Canvas Area */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto space-y-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              {slide.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {slide.subtitle}
            </p>
          </div>

          {/* Slide 1: Cover */}
          {slide.type === 'cover' && (
            <div className="p-6 bg-slate-800/60 rounded-xl border border-slate-700/80 space-y-4">
              <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider">
                Core Mission & Audience
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {slide.content.points?.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Slide 2, 4, 6: Numbered Items */}
          {slide.type === 'numbered' && (
            <div className="space-y-3">
              {slide.content.items?.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:bg-slate-800/70 transition-colors"
                >
                  <span className="text-sm font-extrabold font-mono text-emerald-400 shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Slide 3: Audience */}
          {slide.type === 'audience' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/80 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Target Beneficiaries
                </span>
                <ul className="space-y-2 text-xs text-slate-200">
                  {slide.content.audiences?.map((aud, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex flex-col justify-center space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Shared Visibility
                </span>
                <p className="text-sm font-semibold text-white">
                  A stronger support system around every learner.
                </p>
                <p className="text-xs text-slate-300">
                  When parents, students, and counsellors share the same dashboard data, subject drop-out and career mismatch plunge.
                </p>
              </div>
            </div>
          )}

          {/* Slide 5: 5-Step Journey */}
          {slide.type === 'journey' && (
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {slide.content.steps?.map((st, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 space-y-2 text-center flex flex-col justify-between">
                  <span className="w-7 h-7 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-xs">
                    {st.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-white">{st.name}</h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Slide 7: Model */}
          {slide.type === 'model' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700 space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Free Services (Start with access)
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {slide.content.free?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-700/60 space-y-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  Premium Services (Go further with support)
                </span>
                <ul className="space-y-2 text-xs text-emerald-100">
                  {slide.content.premium?.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Slide 8: Impacts */}
          {slide.type === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {slide.content.impacts?.map((imp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-1.5">
                  <span className="text-xs font-bold font-mono text-emerald-400">{imp.num}</span>
                  <p className="text-xs font-semibold text-slate-200">{imp.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Slide 9: Vision */}
          {slide.type === 'vision' && (
            <div className="p-6 bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-700/60 rounded-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Project Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                "{slide.content.visionStatement}"
              </h3>
              <div className="pt-3 border-t border-emerald-800/60 flex items-center justify-between text-xs text-slate-300">
                <span>Next Step: {slide.content.nextStep}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === idx ? 'w-6 bg-emerald-500' : 'bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentSlide === 0}
              onClick={() => setCurrentSlide(curr => Math.max(0, curr - 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-medium text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentSlide < slides.length - 1 ? (
              <button
                onClick={() => setCurrentSlide(curr => Math.min(slides.length - 1, curr + 1))}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  if (onStartJourney) onStartJourney();
                }}
                className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
              >
                <span>Explore Live App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
