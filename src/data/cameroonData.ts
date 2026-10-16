import {
  EducationTrackInfo,
  CareerItem,
  InstitutionItem,
  AssessmentQuestion,
  OpportunityItem,
  MentorItem,
  Subject,
  CareerRoadmap,
  LearningResource
} from '../types';

export const EDUCATION_TRACKS: EducationTrackInfo[] = [
  {
    id: 'grammar',
    titleEn: 'Grammar Education (General)',
    titleFr: 'Enseignement Général (Grammaire)',
    taglineEn: 'Arts, Humanities, Pure & Applied Sciences',
    taglineFr: 'Lettres, Sciences Humaines, Sciences Pures et Appliquées',
    descriptionEn: 'The traditional academic track preparing students for university degrees in medicine, law, engineering, natural sciences, languages, economics, and social sciences.',
    descriptionFr: 'La filière académique classique préparant les élèves aux études universitaires en médecine, droit, ingénierie, sciences pures, lettres et sciences humaines.',
    subTracks: [
      {
        nameEn: 'General Sciences (STEM)',
        nameFr: 'Série Scientifique (C & D / S-Series)',
        subSystem: 'Both',
        certificates: ['GCE O-Level (Sciences)', 'GCE A-Level (S1-S8)', 'BEPC', 'Probatoire C/D', 'Baccalauréat C/D'],
        coreSubjects: ['Mathematics / Pure Math', 'Physics', 'Chemistry', 'Biology', 'Further Mathematics'],
        typicalCareerOutcomes: ['Medical Doctor', 'Software Engineer', 'Civil Engineer', 'Biochemist', 'Data Analyst']
      },
      {
        nameEn: 'General Arts & Humanities',
        nameFr: 'Série Littéraire (A-Series)',
        subSystem: 'Both',
        certificates: ['GCE O-Level (Arts)', 'GCE A-Level (A1-A5)', 'BEPC', 'Probatoire A', 'Baccalauréat A1/A2/A4'],
        coreSubjects: ['Literature in English', 'French / English Language', 'History', 'Philosophy', 'Geography'],
        typicalCareerOutcomes: ['Lawyer & Magistrate', 'Diplomat / International Relations', 'Journalist', 'Teacher / Academic', 'Translator']
      }
    ],
    keyInstitutions: [
      'University of Yaoundé I',
      'University of Buea',
      'University of Bamenda',
      'University of Douala',
      'University of Dschang',
      'ENS (École Normale Supérieure)'
    ]
  },
  {
    id: 'technical',
    titleEn: 'Technical & Industrial Education',
    titleFr: 'Enseignement Technique & Industriel',
    taglineEn: 'Hands-on engineering, mechanical, electrical, and construction disciplines',
    taglineFr: 'Ingénierie pratique, mécanique, électricité, génie civil et maintenance',
    descriptionEn: 'Technical education equips students with practical vocational and engineering competencies, bridging the gap between theoretical schooling and direct industrial productivity.',
    descriptionFr: 'L\'enseignement technique dote les élèves de compétences industrielles et d\'ingénierie concrètes, reliant le savoir théorique à la pratique industrielle.',
    subTracks: [
      {
        nameEn: 'Electrical & Electronics (F2 / F3)',
        nameFr: 'Électrotechnique & Électronique (F2 / F3)',
        subSystem: 'Both',
        certificates: ['CAP Électricité', 'Probatoire F2/F3', 'Baccalauréat F2/F3', 'GCE Tech A-Level (Electrical)'],
        coreSubjects: ['Applied Electricity', 'Electronics', 'Technical Drawing', 'Industrial Math', 'Physics'],
        typicalCareerOutcomes: ['Electrical Engineer', 'Solar & Renewable Energy Tech', 'Instrumentation Specialist', 'Automation Tech']
      },
      {
        nameEn: 'Civil & Building Construction (F4)',
        nameFr: 'Génie Civil & Bâtiment (F4 / BA)',
        subSystem: 'Both',
        certificates: ['CAP Maçonnerie/Dessin', 'Probatoire F4', 'Baccalauréat F4', 'GCE Tech A-Level (Building Construction)'],
        coreSubjects: ['Civil Engineering Technology', 'Strength of Materials', 'Architectural Drafting', 'Quantity Surveying'],
        typicalCareerOutcomes: ['Site Engineer', 'Architectural Draftsman', 'Surveyor', 'Public Works Contractor']
      },
      {
        nameEn: 'Mechanical Engineering & Automotive (F1)',
        nameFr: 'Fabrication Mécanique & Automobile (F1 / MA)',
        subSystem: 'Both',
        certificates: ['CAP Mécanique', 'Probatoire F1', 'Baccalauréat F1', 'GCE Tech A-Level (Mechanical)'],
        coreSubjects: ['Mechanical Technology', 'Material Science', 'Hydraulics', 'Thermodynamics'],
        typicalCareerOutcomes: ['Mechanical Engineer', 'Automotive Diagnostics Specialist', 'Heavy Machinery Technician']
      }
    ],
    keyInstitutions: [
      'ENSPY (National Advanced School of Engineering Yaoundé)',
      'COLTECH (College of Technology Bamenda)',
      'IUT Douala',
      'IUT Bandjoun (Dschang)',
      'ENSET Douala & Bambili'
    ]
  },
  {
    id: 'commercial',
    titleEn: 'Commercial & Business Education',
    titleFr: 'Enseignement Commercial & Tertiaire',
    taglineEn: 'Accounting, corporate management, marketing, and office administration',
    taglineFr: 'Comptabilité, gestion d\'entreprise, marketing, finance et secrétariat',
    descriptionEn: 'Focused on business operations, financial analysis, marketing strategies, and organizational management across the private and banking sectors in Cameroon and CEMAC.',
    descriptionFr: 'Orienté vers la gestion d\'entreprise, l\'analyse financière, le marketing et l\'administration au Cameroun et dans l\'espace CEMAC.',
    subTracks: [
      {
        nameEn: 'Accounting & Corporate Finance (G2)',
        nameFr: 'Comptabilité & Gestion (Série G2 / CG)',
        subSystem: 'Both',
        certificates: ['Probatoire G2', 'Baccalauréat G2', 'GCE Commercial A-Level (Accounting Series)'],
        coreSubjects: ['Financial Accounting', 'Cost Accounting (OHADA)', 'Business Mathematics', 'Economics', 'Commercial Law'],
        typicalCareerOutcomes: ['Chartered Accountant (ONECCA)', 'Auditor', 'Financial Analyst', 'Tax Consultant']
      },
      {
        nameEn: 'Marketing & Commercial Action (G3)',
        nameFr: 'Action & Communication Commerciales (G3 / ACC)',
        subSystem: 'Both',
        certificates: ['Probatoire G3', 'Baccalauréat G3', 'GCE Commercial (Marketing)'],
        coreSubjects: ['Marketing Principles', 'Sales Techniques', 'Business Communication', 'Consumer Behavior'],
        typicalCareerOutcomes: ['Brand Strategist', 'Sales Director', 'Supply Chain Coordinator', 'Digital Marketer']
      },
      {
        nameEn: 'Office Automation & Secretarial (G1)',
        nameFr: 'Secrétariat & Bureautique (Série G1 / ACA)',
        subSystem: 'Both',
        certificates: ['Probatoire G1', 'Baccalauréat G1', 'GCE Commercial (Secretarial)'],
        coreSubjects: ['Office Procedures', 'Business English/French', 'Information Systems', 'Public Relations'],
        typicalCareerOutcomes: ['Executive Assistant', 'Human Resource Specialist', 'Office Administrator']
      }
    ],
    keyInstitutions: [
      'ESSEC Douala (École Supérieure des Sciences Économiques et Commerciales)',
      'University of Yaoundé II (Soa)',
      'HICM (Higher Institute of Commerce and Management Bamenda)',
      'Siantou Supérieur / ISTAG'
    ]
  },
  {
    id: 'vocational',
    titleEn: 'Vocational & TVET Quick-Entry Skills',
    titleFr: 'Formation Professionnelle & Compétences Numériques',
    taglineEn: 'Accredited short-cycle certificates, digital bootcamps, and direct employment pathways',
    taglineFr: 'Certificats professionnels courts, bootcamps numériques et insertion directe',
    descriptionEn: 'Tailored for school leavers and young adults seeking fast employment or self-reliance through recognized certificates (DQP, CQP) and digital tech competencies.',
    descriptionFr: 'Conçu pour les jeunes diplômés et autodidactes recherchant une insertion rapide ou l\'auto-emploi via des diplômes qualifiants (DQP, CQP) et compétences digitales.',
    subTracks: [
      {
        nameEn: 'Digital Skills & Software Development',
        nameFr: 'Compétences Numériques & Développement Web',
        subSystem: 'Both',
        certificates: ['DQP Développement Web', 'Google Cloud / AWS Certs', 'Full-Stack Bootcamp Certificate'],
        coreSubjects: ['JavaScript / Python', 'Frontend UI / React', 'Database Design', 'Cloud Deployments'],
        typicalCareerOutcomes: ['Junior Web Developer', 'Mobile App Builder', 'UI/UX Designer', 'Freelancer']
      },
      {
        nameEn: 'Agropastoral & Poultry Management',
        nameFr: 'Entrepreneuriat Agro-pastoral & Élevage',
        subSystem: 'Both',
        certificates: ['CQP Exploitation Agricole', 'Certificat MINEPIA/MINADER'],
        coreSubjects: ['Poultry & Fish Farming', 'Greenhouse Horticulture', 'Agro-processing', 'Farm Economics'],
        typicalCareerOutcomes: ['Farm Manager', 'Agri-food Entrepreneur', 'Livestock Specialist']
      }
    ],
    keyInstitutions: [
      'CFPR Yaoundé (Centre de Formation Professionnelle Rapide)',
      'Local Digital Innovation Hubs (Silicon Mountain Buea, Douala Tech Hub)',
      'Centers of Excellence in Renewable Energy (Sangmelima)'
    ]
  }
];

export const CAREER_PROFILES: CareerItem[] = [
  {
    id: 'software-engineer',
    titleEn: 'Full-Stack Software Engineer',
    titleFr: 'Ingénieur Logiciel Full-Stack',
    sector: 'Tech & Engineering',
    descriptionEn: 'Designs and builds modern web and mobile applications for fintech, healthtech, and logistics in Cameroon and international remote markets.',
    descriptionFr: 'Conçoit et développe des applications web et mobiles modernes pour la fintech, la santé et la logistique au Cameroun et à l\'international.',
    requiredStream: ['grammar', 'technical', 'vocational'],
    recommendedSubjectsEn: ['Mathematics', 'Computer Science / ICT', 'Physics'],
    recommendedSubjectsFr: ['Mathématiques', 'Informatique', 'Physique'],
    concoursRequired: 'Concours ENSPY Yaoundé / COLTECH Bamenda / IUT Douala (or self-taught portfolio)',
    localInstitutions: ['ENSP Yaoundé', 'COLTECH Bamenda', 'Univ of Buea (Faculty of Engineering & Tech)', 'IUT Douala'],
    demandLevel: 'Very High',
    salaryRangeXAF: '300,000 – 1,200,000 XAF/month',
    dailyTasksEn: [
      'Write scalable React frontend components and Express backend APIs',
      'Design MongoDB and PostgreSQL database schemas',
      'Integrate Mobile Money (MTN MoMo, Orange Money) payment gateways',
      'Collaborate on GitHub with product managers and UI designers'
    ],
    dailyTasksFr: [
      'Écrire des composants React et des API backend Express robustes',
      'Concevoir des schémas de base de données MongoDB et PostgreSQL',
      'Intégrer les passerelles de paiement Mobile Money (MTN, Orange)',
      'Collaborer sur GitHub avec des chefs de projet et designers'
    ]
  },
  {
    id: 'civil-engineer',
    titleEn: 'Civil & Infrastructure Engineer',
    titleFr: 'Ingénieur en Génie Civil & Bâtiment',
    sector: 'Tech & Engineering',
    descriptionEn: 'Plans, oversees, and manages the construction of bridges, roads, multi-storey buildings, and municipal water supply systems in Cameroon.',
    descriptionFr: 'Planifie, supervise et gère la construction de ponts, routes, immeubles et réseaux d\'eau au Cameroun.',
    requiredStream: ['technical', 'grammar'],
    recommendedSubjectsEn: ['Pure Mathematics', 'Physics', 'Technical Drawing / Building Construction'],
    recommendedSubjectsFr: ['Mathématiques C/D/F4', 'Physique', 'Dessin Technique & Mécanique Appliquée'],
    concoursRequired: 'Concours ENSPY Génie Civil / ENSET Douala / ENSTP Yaoundé/Buea',
    localInstitutions: ['ENSPY Yaoundé', 'National Advanced School of Public Works (ENSTP)', 'IUT Bandjoun'],
    demandLevel: 'High',
    salaryRangeXAF: '350,000 – 950,000 XAF/month',
    dailyTasksEn: [
      'Compute load calculations and structural safety margins',
      'Inspect construction sites in Douala, Yaoundé, and regional cities',
      'Produce technical drawings using AutoCAD and Revit',
      'Manage subcontractors and building materials procurement'
    ],
    dailyTasksFr: [
      'Calculer les charges et la résistance des matériaux',
      'Inspecter les chantiers de construction sur le terrain',
      'Produire des plans d\'exécution via AutoCAD et Revit',
      'Gérer les sous-traitants et l\'approvisionnement en matériaux'
    ]
  },
  {
    id: 'agronomist',
    titleEn: 'Agricultural Engineer & Agribusiness Leader',
    titleFr: 'Ingénieur Agronome & Gestionnaire Agro-industriel',
    sector: 'Agribusiness & Environment',
    descriptionEn: 'Drives high-yield, climate-smart farming, post-harvest transformation of cocoa, coffee, cassava, and poultry value chains in Cameroon.',
    descriptionFr: 'Développe une agriculture résiliente et productive, la transformation du cacao, café, manioc et l\'élevage avicole au Cameroun.',
    requiredStream: ['grammar', 'vocational'],
    recommendedSubjectsEn: ['Biology', 'Chemistry', 'Geography / Agriculture', 'Mathematics'],
    recommendedSubjectsFr: ['SVT / Biologie', 'Chimie', 'Géographie', 'Mathématiques'],
    concoursRequired: 'Concours FASA (Faculté d\'Agronomie et des Sciences Agricoles) Dschang',
    localInstitutions: ['FASA Dschang', 'Faculty of Agriculture Univ. of Buea', 'COLTECH Bamenda'],
    demandLevel: 'Very High',
    salaryRangeXAF: '250,000 – 800,000 XAF/month',
    dailyTasksEn: [
      'Analyze soil health and formulate biological pest management protocols',
      'Implement modern irrigation systems and greenhouse crop management',
      'Optimize agribusiness supply chains and exports to CEMAC region',
      'Train local farmer cooperatives on post-harvest storage techniques'
    ],
    dailyTasksFr: [
      'Analyser la fertilité des sols et mettre en place la lutte biologique',
      'Déployer des systèmes d\'irrigation et la culture sous serre',
      'Optimiser les circuits agro-industriels vers la zone CEMAC',
      'Former les coopératives agricoles au stockage et à la transformation'
    ]
  },
  {
    id: 'medical-doctor',
    titleEn: 'Medical Doctor / General Practitioner',
    titleFr: 'Médecin Généraliste / Chirurgien',
    sector: 'Healthcare',
    descriptionEn: 'Diagnoses illnesses, performs critical interventions, and leads patient care in public hospitals, private clinics, and rural health districts.',
    descriptionFr: 'Diagnostique les pathologies, réalise des interventions et coordonne les soins dans les hôpitaux et centres de santé.',
    requiredStream: ['grammar'],
    recommendedSubjectsEn: ['Biology', 'Chemistry', 'Physics / Mathematics (GCE A-Level Bio/Chem essential)'],
    recommendedSubjectsFr: ['SVT (Série D)', 'Chimie', 'Physique (Mention requise)'],
    concoursRequired: 'Concours National Unique de Médecine (FMSB Yaoundé, FHS Buea, FMSP Douala, FMSB Dschang)',
    localInstitutions: ['FMSB Univ. of Yaoundé I', 'Faculty of Health Sciences (FHS) Buea', 'FMSP Douala'],
    demandLevel: 'Very High',
    salaryRangeXAF: '320,000 – 900,000 XAF/month (Public + Call Allowances)',
    dailyTasksEn: [
      'Conduct patient clinical consultations and review laboratory blood tests',
      'Manage emergency admissions and obstetrical deliveries',
      'Perform ward rounds and prescribe targeted pharmaceuticals',
      'Supervise nursing staff and public health epidemic prevention'
    ],
    dailyTasksFr: [
      'Réaliser des consultations cliniques et analyser les examens',
      'Prendre en charge les urgences et accouchements',
      'Effectuer les visites en salle et prescrire les protocoles',
      'Superviser les équipes soignantes et la veille épidémiologique'
    ]
  },
  {
    id: 'chartered-accountant',
    titleEn: 'Chartered Accountant & Financial Auditor',
    titleFr: 'Expert-Comptable & Auditeur Financier',
    sector: 'Finance & Commerce',
    descriptionEn: 'Ensures OHADA accounting compliance, financial audits, corporate tax planning, and strategic capital allocation for businesses in Central Africa.',
    descriptionFr: 'Garantit la conformité aux normes OHADA, les audits financiers, la fiscalité et la gestion financière des entreprises en Afrique Centrale.',
    requiredStream: ['commercial', 'grammar'],
    recommendedSubjectsEn: ['Accounting', 'Business Mathematics', 'Economics', 'Commerce'],
    recommendedSubjectsFr: ['Comptabilité G2', 'Mathématiques Financières', 'Économie', 'Droit Commercial'],
    concoursRequired: 'ESSEC Concours / ONECCA Professional Registration / Master CCA',
    localInstitutions: ['ESSEC Douala', 'Univ. of Yaoundé II (Soa)', 'HICM Bamenda', 'Catholic University of Central Africa (UCAC)'],
    demandLevel: 'High',
    salaryRangeXAF: '400,000 – 1,500,000 XAF/month',
    dailyTasksEn: [
      'Prepare and certify balance sheets according to OHADA accounting standards',
      'Conduct internal and external audits to detect fraud and inefficiencies',
      'File monthly corporate taxes with the Directorate General of Taxation (DGI)',
      'Advise executive management on cash-flow optimization and investments'
    ],
    dailyTasksFr: [
      'Établir et certifier les états financiers sous le référentiel OHADA',
      'Conduire des audits internes et externes de régularité',
      'Effectuer les déclarations fiscales auprès de la DGI',
      'Conseiller la direction générale sur les investissements et la trésorerie'
    ]
  },
  {
    id: 'solar-renewable-tech',
    titleEn: 'Solar & Renewable Energy Technician',
    titleFr: 'Technicien en Énergie Solaire & Renouvelable',
    sector: 'Trades & Industry',
    descriptionEn: 'Installs and maintains solar photovoltaic arrays, inverters, and mini-grids for residential homes, hospitals, and rural communities across Cameroon.',
    descriptionFr: 'Installe et maintient des centrales photovoltaïques, onduleurs et mini-réseaux pour les ménages, hôpitaux et zones rurales du Cameroun.',
    requiredStream: ['technical', 'vocational'],
    recommendedSubjectsEn: ['Applied Electricity', 'Physics', 'Technical Drawing', 'Mathematics'],
    recommendedSubjectsFr: ['Électrotechnique F3', 'Physique', 'Dessin Technique'],
    concoursRequired: 'IUT Concours / Technical Baccalauréat / Professional CQP',
    localInstitutions: ['IUT Douala', 'IUT Bandjoun', 'CFPR Yaoundé', 'COLTECH Bamenda'],
    demandLevel: 'Very High',
    salaryRangeXAF: '220,000 – 650,000 XAF/month',
    dailyTasksEn: [
      'Calculate photovoltaic sizing and battery storage requirements',
      'Mount solar panels on roofs and connect hybrid inverters safely',
      'Troubleshoot electrical faults and replace degraded battery cells',
      'Educate clients on energy conservation and load scheduling'
    ],
    dailyTasksFr: [
      'Dimensionner les champs photovoltaïques et le parc de batteries',
      'Installer les panneaux solaires et connecter les onduleurs hybrides',
      'Diagnostiquer les pannes électriques et entretenir les installations',
      'Sensibiliser les clients à la gestion efficace de leur consommation'
    ]
  }
];

export const CAMEROON_INSTITUTIONS: InstitutionItem[] = [
  {
    id: 'univ-yaounde-1',
    name: 'University of Yaoundé I (Ngoa-Ekelle)',
    type: 'State University',
    region: 'Centre',
    city: 'Yaoundé',
    subSystem: 'Bilingual',
    establishedYear: 1962,
    popularFaculties: [
      {
        facultyName: 'Faculty of Science (UY1)',
        degrees: ['B.Sc. Computer Science', 'B.Sc. Physics', 'B.Sc. Mathematics', 'B.Sc. Biochemistry'],
        admissions: 'Direct Entry (A-Level / Bac)'
      },
      {
        facultyName: 'National Advanced School of Engineering (ENSPY)',
        degrees: ['Eng. Software & AI', 'Eng. Civil & Structural', 'Eng. Electrical & Telecoms', 'Eng. Mechanical'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Faculty of Medicine and Biomedical Sciences (FMSB)',
        degrees: ['Doctor of Medicine (M.D.)', 'Doctor of Pharmacy', 'B.Sc. Medical Laboratory Technology'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'École Normale Supérieure (ENS Yaoundé)',
        degrees: ['DIPES I & II (Secondary School Teacher Training)'],
        admissions: 'Concours (Competitive Exam)'
      }
    ],
    contactInfo: {
      website: 'https://www.uy1.uninet.cm',
      city: 'Yaoundé, Ngoa-Ekellé'
    }
  },
  {
    id: 'univ-buea',
    name: 'University of Buea (UB - "A Place to Be")',
    type: 'State University',
    region: 'South West',
    city: 'Buea',
    subSystem: 'Anglophone',
    establishedYear: 1993,
    popularFaculties: [
      {
        facultyName: 'Faculty of Engineering & Technology (FET)',
        degrees: ['B.Eng. Computer Engineering', 'B.Eng. Electrical & Electronic', 'B.Eng. Civil'],
        admissions: 'Study of Dossier'
      },
      {
        facultyName: 'Faculty of Health Sciences (FHS Buea)',
        degrees: ['Doctor of Medicine', 'B.Sc. Nursing', 'B.Sc. Medical Laboratory'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Advanced School of Translators and Interpreters (ASTI)',
        degrees: ['MA Translation', 'MA Interpretation (English/French/Spanish/Arabic)'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Faculty of Social & Management Sciences',
        degrees: ['B.Sc. Accounting', 'B.Sc. Economics', 'B.Sc. Journalism & Mass Communication'],
        admissions: 'Direct Entry (A-Level / Bac)'
      }
    ],
    contactInfo: {
      website: 'https://ubuea.cm',
      city: 'Buea, Molyko'
    }
  },
  {
    id: 'univ-bamenda',
    name: 'University of Bamenda (UBa - Bambili)',
    type: 'State University',
    region: 'North West',
    city: 'Bamenda',
    subSystem: 'Anglophone',
    establishedYear: 2010,
    popularFaculties: [
      {
        facultyName: 'College of Technology (COLTECH)',
        degrees: ['B.Tech. Computer Engineering', 'B.Tech. Civil Engineering', 'B.Tech. Agribusiness'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Higher Institute of Commerce and Management (HICM)',
        degrees: ['B.Sc. Accounting', 'B.Sc. Banking & Finance', 'B.Sc. Insurance'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Higher Institute of Transport and Logistics (HITL)',
        degrees: ['B.Tech. Land Transport', 'B.Tech. Maritime Logistics', 'B.Tech. Customs Transit'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Higher Teacher Training College (ENS Bambili)',
        degrees: ['DIPES I & II (Teacher Certification)'],
        admissions: 'Concours (Competitive Exam)'
      }
    ],
    contactInfo: {
      website: 'https://uniba-edu.cm',
      city: 'Bambili, Bamenda'
    }
  },
  {
    id: 'univ-douala',
    name: 'University of Douala (Univ-Douala)',
    type: 'State University',
    region: 'Littoral',
    city: 'Douala',
    subSystem: 'Bilingual',
    establishedYear: 1993,
    popularFaculties: [
      {
        facultyName: 'École Supérieure des Sciences Économiques et Commerciales (ESSEC)',
        degrees: ['Master Management & Finance', 'Master Audit & Marketing', 'B.Sc. Commerce'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Institut Universitaire de Technologie (IUT Douala)',
        degrees: ['DUT Génie Électrique', 'DUT Génie Mécanique & Productique', 'DUT Génie Informatique'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'Faculty of Industrial Engineering (FGI Douala)',
        degrees: ['Eng. Industrial Maintenance', 'Eng. Robotics & Automation', 'Eng. Chemical Process'],
        admissions: 'Concours (Competitive Exam)'
      }
    ],
    contactInfo: {
      website: 'https://www.univ-douala.cm',
      city: 'Douala, Ndogbong & Ange Raphael'
    }
  },
  {
    id: 'univ-dschang',
    name: 'University of Dschang (UDs)',
    type: 'State University',
    region: 'West',
    city: 'Dschang',
    subSystem: 'Bilingual',
    establishedYear: 1993,
    popularFaculties: [
      {
        facultyName: 'Faculté d\'Agronomie et des Sciences Agricoles (FASA)',
        degrees: ['Ingénieur Agronome', 'Ingénieur des Eaux et Forêts', 'Master Agrobusiness'],
        admissions: 'Concours (Competitive Exam)'
      },
      {
        facultyName: 'IUT FOTSO Victor (Bandjoun)',
        degrees: ['DUT Génie Télécoms & Réseaux', 'DUT Génie Électrique', 'DUT Génie Civil'],
        admissions: 'Concours (Competitive Exam)'
      }
    ],
    contactInfo: {
      website: 'https://www.univ-dschang.org',
      city: 'Dschang, West Region'
    }
  },
  {
    id: 'cfpr-yaounde',
    name: 'Centre de Formation Professionnelle Rapide (CFPR Yaoundé)',
    type: 'Accredited Vocational Centre',
    region: 'Centre',
    city: 'Yaoundé',
    subSystem: 'Bilingual',
    establishedYear: 1984,
    popularFaculties: [
      {
        facultyName: 'Industrial Trades & Mechatronics Section',
        degrees: ['CQP / DQP Industrial Electricity', 'CQP Automotive Mechanics', 'CQP Metal Fabrication & Welding'],
        admissions: 'Study of Dossier'
      },
      {
        facultyName: 'Building & Renewable Energy Section',
        degrees: ['CQP Solar Installation & Maintenance', 'CQP Building Construction & Plumbing'],
        admissions: 'Study of Dossier'
      }
    ],
    contactInfo: {
      phone: '+237 222 30 45 12',
      city: 'Yaoundé, Pitoa / Nkolbisson'
    }
  },
  {
    id: 'seven-academy-buea',
    name: 'Seven Advanced Academy (Silicon Mountain Tech College)',
    type: 'Accredited Vocational Centre',
    region: 'South West',
    city: 'Buea',
    subSystem: 'Bilingual',
    establishedYear: 2018,
    popularFaculties: [
      {
        facultyName: 'School of Software Engineering & Cloud',
        degrees: ['Full-Stack Web & Mobile Engineering', 'Cloud DevOps & Cyber Security', 'Data Science & AI'],
        admissions: 'Study of Dossier'
      }
    ],
    contactInfo: {
      website: 'https://sevenadvancedacademy.com',
      city: 'Buea & Douala'
    }
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    questionEn: 'Which activity would you enjoy doing the most on a typical Saturday?',
    questionFr: 'Quelle activité préféreriez-vous faire un samedi typique ?',
    options: [
      {
        labelEn: 'Disassembling and fixing a broken radio, smartphone, or electrical socket',
        labelFr: 'Démonter et réparer une radio en panne, un smartphone ou une prise électrique',
        riasecType: 'Realistic',
        suggestedStreams: ['technical', 'vocational']
      },
      {
        labelEn: 'Solving complex mathematical problems or reading about scientific discoveries',
        labelFr: 'Résoudre des problèmes mathématiques ardus ou lire sur les découvertes scientifiques',
        riasecType: 'Investigative',
        suggestedStreams: ['grammar']
      },
      {
        labelEn: 'Designing a poster, writing a poem, or creating digital illustrations and video clips',
        labelFr: 'Créer une affiche, écrire un texte créatif ou monter une vidéo numérique',
        riasecType: 'Artistic',
        suggestedStreams: ['grammar', 'vocational']
      },
      {
        labelEn: 'Volunteering to tutor younger pupils or organizing a community health sensitisation',
        labelFr: 'Aider des camarades plus jeunes à réviser ou organiser une sensibilisation santé',
        riasecType: 'Social',
        suggestedStreams: ['grammar']
      }
    ]
  },
  {
    id: 2,
    questionEn: 'When working in a school group assignment, which role feels most natural to you?',
    questionFr: 'Dans un travail de groupe à l\'école, quel rôle vous semble le plus naturel ?',
    options: [
      {
        labelEn: 'Pitching the project, assigning tasks, and convincing the teacher during the presentation',
        labelFr: 'Présenter le projet, négocier les tâches et convaincre l\'enseignant à l\'oral',
        riasecType: 'Enterprising',
        suggestedStreams: ['commercial']
      },
      {
        labelEn: 'Balancing the group budget, tracking deadlines, and making sure files are neatly organised',
        labelFr: 'Gérer le budget du projet, veiller aux délais et classer soigneusement les documents',
        riasecType: 'Conventional',
        suggestedStreams: ['commercial']
      },
      {
        labelEn: 'Testing the physical prototype, building the model, or setting up equipment',
        labelFr: 'Tester la maquette physique, manipuler les appareils et monter l\'équipement',
        riasecType: 'Realistic',
        suggestedStreams: ['technical']
      },
      {
        labelEn: 'Conducting in-depth research, finding data sources, and verifying facts',
        labelFr: 'Faire des recherches approfondies, vérifier les sources et analyser les faits',
        riasecType: 'Investigative',
        suggestedStreams: ['grammar']
      }
    ]
  },
  {
    id: 3,
    questionEn: 'Which problem in Cameroon would you feel most proud to help solve in your career?',
    questionFr: 'Quel défi au Cameroun seriez-vous le plus fier de contribuer à résoudre ?',
    options: [
      {
        labelEn: 'Unreliable electricity and internet infrastructure by building renewable solar mini-grids',
        labelFr: 'Les coupures d\'électricité et le réseau en déployant des centrales solaires fiables',
        riasecType: 'Realistic',
        suggestedStreams: ['technical']
      },
      {
        labelEn: 'Eradicating infectious diseases and improving maternal-child health in local hospitals',
        labelFr: 'Lutter contre les maladies infectieuses et améliorer la santé mère-enfant',
        riasecType: 'Investigative',
        suggestedStreams: ['grammar']
      },
      {
        labelEn: 'Helping Cameroonian SMEs keep clean books, access loans, and scale across Central Africa',
        labelFr: 'Aider les PME camerounaises à bien tenir leurs comptes et lever des financements',
        riasecType: 'Conventional',
        suggestedStreams: ['commercial']
      },
      {
        labelEn: 'Building innovative mobile applications that bring Mobile Money banking to everyday traders',
        labelFr: 'Développer des applications mobiles facilitant le commerce et les paiements numériques',
        riasecType: 'Enterprising',
        suggestedStreams: ['technical', 'vocational', 'grammar']
      }
    ]
  },
  {
    id: 4,
    questionEn: 'What type of study material keeps you motivated for hours without getting tired?',
    questionFr: 'Quel type de document d\'étude vous passionne pendant des heures sans fatigue ?',
    options: [
      {
        labelEn: 'Blueprint diagrams, electrical schematics, and mechanical assembly exploded views',
        labelFr: 'Les plans d\'architecture, schémas de câblage électrique et éclatés mécaniques',
        riasecType: 'Realistic',
        suggestedStreams: ['technical']
      },
      {
        labelEn: 'Scientific lab experiment protocols, genetics breakdowns, and calculus theorems',
        labelFr: 'Les protocoles d\'expériences de laboratoire, la génétique et les théorèmes d\'analyse',
        riasecType: 'Investigative',
        suggestedStreams: ['grammar']
      },
      {
        labelEn: 'Financial spreadsheets, OHADA balance sheets, and economic market trend reports',
        labelFr: 'Les bilans comptables OHADA, graphiques financiers et analyses de marché',
        riasecType: 'Conventional',
        suggestedStreams: ['commercial']
      },
      {
        labelEn: 'Biographies of great African statesmen, law articles, and philosophical debates',
        labelFr: 'Les biographies de grands dirigeants, les textes de loi et les débats philosophiques',
        riasecType: 'Social',
        suggestedStreams: ['grammar']
      }
    ]
  },
  {
    id: 5,
    questionEn: 'What is your preferred working environment after your studies?',
    questionFr: 'Quel est votre cadre de travail idéal après vos études ?',
    options: [
      {
        labelEn: 'An active outdoor field, construction site, or high-tech workshop with machinery',
        labelFr: 'Un chantier en plein air, une exploitation agricole ou un atelier avec outillage',
        riasecType: 'Realistic',
        suggestedStreams: ['technical', 'vocational']
      },
      {
        labelEn: 'A high-level corporate office, bank branch, or modern digital tech company in Douala/Yaoundé',
        labelFr: 'Un siège d\'entreprise moderne, une banque ou une startup tech à Douala/Yaoundé',
        riasecType: 'Enterprising',
        suggestedStreams: ['commercial', 'grammar']
      },
      {
        labelEn: 'A hospital ward, medical laboratory, or university research institute',
        labelFr: 'Un bloc hospitalier, un laboratoire d\'analyse ou un institut de recherche',
        riasecType: 'Investigative',
        suggestedStreams: ['grammar']
      },
      {
        labelEn: 'A classroom, NGO field mission, or legal courtroom defending citizens',
        labelFr: 'Une salle de classe, une mission d\'ONG humanitaire ou un tribunal de justice',
        riasecType: 'Social',
        suggestedStreams: ['grammar']
      }
    ]
  }
];

export const OPPORTUNITIES: OpportunityItem[] = [
  {
    id: 'minesup-national-bursary',
    titleEn: 'MINESUP National Excellence Academic Grant',
    titleFr: 'Bourse d\'Excellence Académique Nationale MINESUP',
    provider: 'Ministry of Higher Education (MINESUP Cameroun)',
    type: 'Scholarship',
    targetAudience: 'Top performers in GCE A-Level & Baccalauréat (all series)',
    deadline: 'Annually after GCE/Bac results (August 31)',
    awardEn: 'Annual tuition grant of 150,000 XAF + academic materials allowance',
    awardFr: 'Allocation annuelle de scolarité de 150 000 XAF + appui documentaire',
    eligibilityEn: 'Cameroonian citizen with minimum Grade C / Mention Assez Bien in official national exams.',
    eligibilityFr: 'Nationalité camerounaise, obtention du Bac ou GCE A-Level avec mention minimale.',
    applyLinkText: 'https://minesup.gov.cm'
  },
  {
    id: 'mastercard-foundation-scholars',
    titleEn: 'Mastercard Foundation Scholars Program (AIMS Cameroon)',
    titleFr: 'Programme de Bourses Mastercard Foundation (AIMS Cameroun)',
    provider: 'Mastercard Foundation & AIMS Limbe',
    type: 'Scholarship',
    targetAudience: 'Secondary school leavers and STEM Bachelor graduates',
    deadline: 'March 31, 2027',
    awardEn: 'Full scholarship covering tuition, living expenses, laptop, and leadership coaching',
    awardFr: 'Bourse complète couvrant scolarité, hébergement, ordinateur portable et mentorat',
    eligibilityEn: 'Demonstrated academic talent, commitment to African development, and financial need.',
    eligibilityFr: 'Excellence académique, leadership avéré et contraintes financières justifiées.',
    applyLinkText: 'https://aims-cameroon.org'
  },
  {
    id: 'silicon-mountain-bootcamp',
    titleEn: 'Full-Stack Web & AI Developer Internship Programme',
    titleFr: 'Stage & Bootcamp Développeur Web Full-Stack & IA',
    provider: 'ActiveSpaces & Buea Tech Community',
    type: 'Digital Bootcamp',
    targetAudience: 'Youth aged 17-25 interested in software engineering & MERN stack',
    deadline: 'Rolling Enrollment (Quarterly)',
    awardEn: 'Free 12-week intensive training + paid internship placement in Douala/Buea startups',
    awardFr: 'Formation intensive gratuite de 12 semaines + stage rémunéré en startup',
    eligibilityEn: 'High school graduate with basic computer literacy and strong logical problem solving.',
    eligibilityFr: 'Bachelier ou GCE A-Level avec bonne logique et motivation pour le code.',
    applyLinkText: 'https://siliconmountain.cm'
  }
];

export const COUNSELLORS: MentorItem[] = [
  {
    id: 'mentor-1',
    name: 'Mme. Florence Njoh, M.Ed.',
    titleEn: 'Certified Guidance Counsellor & Educational Psychologist',
    titleFr: 'Conseillère d\'Orientation Certifiée (MINESEC)',
    organization: 'Lycée Bilingue d\'Application / MINESEC Yaoundé',
    city: 'Yaoundé',
    specialization: 'GCE A-Level Series selection, Medical & Engineering Concours Preparation',
    languages: ['English', 'Français'],
    yearsExperience: 14,
    availability: 'Tuesday & Thursday afternoons'
  },
  {
    id: 'mentor-2',
    name: 'Dr. Jean-Pierre Mbassi',
    titleEn: 'Technical & Vocational Skills Director',
    titleFr: 'Directeur de la Formation Professionnelle & Métiers Industriels',
    organization: 'GICAM / Cameroon Industrial Federation Douala',
    city: 'Douala',
    specialization: 'Technical tracks (F-Series), IUT Admissions, Electrical & Civil Careers',
    languages: ['Français', 'English'],
    yearsExperience: 19,
    availability: 'Saturday mornings & Virtual sessions'
  },
  {
    id: 'mentor-3',
    name: 'Mr. Emmanuel Tembeng',
    titleEn: 'Tech Lead & Career Mentor (MERN & Cloud)',
    titleFr: 'Ingénieur Logiciel Sénior & Mentor Carrière Tech',
    organization: 'Silicon Mountain Tech Incubator',
    city: 'Buea',
    specialization: 'Software Engineering, Web Development, University of Buea FET Pathways',
    languages: ['English', 'Pidgin'],
    yearsExperience: 9,
    availability: 'Wednesday evenings & Sundays'
  }
];

export const DISCIPLINES_EXPLAINED: Subject[] = [
  {
    id: 'subj-pure-math',
    nameEn: 'Pure Mathematics & Calculus',
    nameFr: 'Mathématiques Pures & Analyse',
    level: 'Advanced',
    isCore: true,
    category: 'Sciences',
    targetStreams: ['grammar', 'technical'],
    descriptionEn: 'Rigorous training in calculus, linear algebra, coordinate geometry, and numerical methods required for all STEM and engineering disciplines.',
    descriptionFr: 'Formation approfondie en analyse, algèbre linéaire, géométrie et méthodes numériques indispensable aux filières ingénierie et sciences.',
    careerRelevanceEn: 'Direct prerequisite for entrance into ENSPY (Polytechnique Yaoundé), COLTECH Bamenda, UB FET, and careers in AI, Software, and Civil Engineering.',
    careerRelevanceFr: 'Indispensable pour réussir le concours de l\'ENSPY, COLTECH, FET Buea et faire carrière en génie logiciel, IA ou BTP.'
  },
  {
    id: 'subj-physics',
    nameEn: 'Physics & Applied Mechanics',
    nameFr: 'Physique & Mécanique Appliquée',
    level: 'Advanced',
    isCore: true,
    category: 'Sciences',
    targetStreams: ['grammar', 'technical'],
    descriptionEn: 'Mechanics, electromagnetism, optics, thermodynamics, and modern quantum concepts explaining physical systems.',
    descriptionFr: 'Étude de la cinématique, électromagnétisme, optique et thermodynamique expliquant les phénomènes physiques.',
    careerRelevanceEn: 'Required for Medical studies (FMSB, FHS), Mechanical/Civil Engineering (ENSTP), and Renewable Energy technologies.',
    careerRelevanceFr: 'Matière reine pour les études de Médecine, le Génie Mécanique/Civil et les technologies d\'énergie solaire.'
  },
  {
    id: 'subj-biology',
    nameEn: 'Biology & Life Sciences',
    nameFr: 'Sciences de la Vie et de la Terre (SVT)',
    level: 'Advanced',
    isCore: true,
    category: 'Sciences',
    targetStreams: ['grammar'],
    descriptionEn: 'Cellular genetics, physiology, microbiology, ecology, and biochemistry fundamental to life and environment.',
    descriptionFr: 'Génétique, physiologie humaine, microbiologie, écologie et biochimie fondamentale.',
    careerRelevanceEn: 'Crucial for Doctor of Medicine (M.D.), Pharmacy, Nursing, Agricultural Engineering (FASA Dschang), and Public Health.',
    careerRelevanceFr: 'Obligatoire pour le Concours Unique de Médecine, la pharmacie, les soins infirmiers et l\'agronomie à la FASA.'
  },
  {
    id: 'subj-applied-elec',
    nameEn: 'Applied Electricity & Electronics (F2/F3)',
    nameFr: 'Électrotechnique & Électronique (F2/F3)',
    level: 'Both',
    isCore: true,
    category: 'Industrial',
    targetStreams: ['technical', 'vocational'],
    descriptionEn: 'Circuit theory, electrical wiring, power generation, alternating current machinery, and industrial instrumentation.',
    descriptionFr: 'Théorie des circuits, schémas électriques industriels, machines à courant alternatif et automatisme.',
    careerRelevanceEn: 'Direct gateway to IUT Douala/Bandjoun, Eneo power grid technicians, solar installation companies, and industrial automation.',
    careerRelevanceFr: 'Accès direct aux IUT, techniciens réseaux chez Eneo, installateurs photovoltaïques et maintenance industrielle.'
  },
  {
    id: 'subj-civil-building',
    nameEn: 'Building Construction & Architectural Drafting (F4)',
    nameFr: 'Génie Civil & Bâtiment (F4/BA)',
    level: 'Both',
    isCore: true,
    category: 'Industrial',
    targetStreams: ['technical', 'vocational'],
    descriptionEn: 'Structural drawing, construction materials, soil mechanics, and site survey techniques.',
    descriptionFr: 'Dessin de bâtiment, résistance des matériaux, métré et topographie de chantier.',
    careerRelevanceEn: 'Paves the way for the National Advanced School of Public Works (ENSTP Yaoundé/Buea) and private infrastructure contractors.',
    careerRelevanceFr: 'Prépare au concours de l\'ENSTP (Travaux Publics) et aux carrières de conducteur de travaux BTP.'
  },
  {
    id: 'subj-ohada-accounting',
    nameEn: 'Financial & Cost Accounting (OHADA System)',
    nameFr: 'Comptabilité Générale & Analytique (Système OHADA)',
    level: 'Both',
    isCore: true,
    category: 'Commercial',
    targetStreams: ['commercial'],
    descriptionEn: 'Double-entry bookkeeping, balance sheet balancing, cost accounting, and tax compliance compliant with Central African OHADA laws.',
    descriptionFr: 'Enregistrement comptable, bilans financiers, comptabilité analytique de gestion et fiscalité selon l\'Acte Uniforme OHADA.',
    careerRelevanceEn: 'Prerequisite for ESSEC Douala, ONECCA Chartered Accounting certifications, banking operations, and corporate auditing.',
    careerRelevanceFr: 'Essentiel pour intégrer l\'ESSEC Douala, l\'Ordre des Experts-Comptables (ONECCA) et les cabinets d\'audit.'
  },
  {
    id: 'subj-literature',
    nameEn: 'Literature in English & Humanities',
    nameFr: 'Littérature, Philosophie & Sciences Humaines',
    level: 'Advanced',
    isCore: true,
    category: 'Arts',
    targetStreams: ['grammar'],
    descriptionEn: 'Critical textual analysis, rhetoric, philosophical ethics, and dramatic arts cultivating rigorous communication and analytical writing.',
    descriptionFr: 'Analyse littéraire, rhétorique, éthique philosophique et dissertation cultivant l\'esprit critique et l\'éloquence.',
    careerRelevanceEn: 'Prepares for the Magistracy (ENAM), Legal Practice, Diplomatic Corps, Journalism (ASMAC), and International Relations (IRIC).',
    careerRelevanceFr: 'Prépare aux concours de l\'ENAM (Magistrature/Régie), l\'ASMAC (Journalisme), l\'IRIC (Diplomatie) et au Barreau.'
  }
];

export const CAREER_ROADMAPS: CareerRoadmap[] = [
  {
    id: 'roadmap-tech',
    careerTitleEn: 'Software Engineering & AI Specialist',
    careerTitleFr: 'Ingénieur Logiciel & Spécialiste IA',
    stream: 'grammar',
    stages: [
      {
        stageNameEn: 'Stage 1: High School Series Choice (Form 4 - Upper Sixth)',
        stageNameFr: 'Étape 1 : Choix de Série au Secondaire (3e - Terminale)',
        timeline: 'Years 1 - 3',
        milestonesEn: [
          'Choose General Science (S-Series) or Technical Electronics (F2)',
          'Excel in Mathematics, Physics, and Computer Science / ICT',
          'Learn basic Python / JavaScript programming through free online clubs or local bootcamps'
        ],
        milestonesFr: [
          'Choisir la Série C, D ou F2 (Électronique)',
          'Obtenir de solides mentions en Mathématiques, Physique et Informatique',
          'S\'initier à Python ou JavaScript via des tutoriels ou bootcamps locaux'
        ]
      },
      {
        stageNameEn: 'Stage 2: Higher Education & Concours (Bac / A-Level)',
        stageNameFr: 'Étape 2 : Concours & Enseignement Supérieur',
        timeline: 'Years 4 - 6',
        milestonesEn: [
          'Pass Concours ENSPY Yaoundé, COLTECH Bamenda, or UB Faculty of Engineering',
          'Or enter accredited vocational tech academies (Seven Academy, CFPR, IUT Douala)',
          'Complete B.Sc / B.Eng in Computer Engineering or Software Development'
        ],
        milestonesFr: [
          'Réussir le concours ENSPY, COLTECH Bamenda ou IUT Douala Informatique',
          'Ou intégrer une académie tech certifiée (Seven Academy, IUT, CFPR)',
          'Valider une Licence Pro ou Diplôme d\'Ingénieur en Génie Logiciel'
        ]
      },
      {
        stageNameEn: 'Stage 3: Market Insertion & Specialization',
        stageNameFr: 'Étape 3 : Insertion Professionnelle & Spécialisation',
        timeline: 'Year 7+',
        milestonesEn: [
          'Master full-stack frameworks (React, Node.js, Express, MongoDB/PostgreSQL)',
          'Deploy real-world fintech apps integrating MTN MoMo / Orange Money APIs',
          'Work for local tech scale-ups or remote international technology firms'
        ],
        milestonesFr: [
          'Maîtriser les technologies modernes (React, Node.js, MERN, Cloud)',
          'Concevoir des solutions fintech intégrant Mobile Money (MTN, Orange)',
          'Rejoindre une scale-up camerounaise ou travailler en télétravail international'
        ]
      }
    ],
    entrepreneurshipPathEn: 'Launch a digital product agency, Mobile Money SaaS, or agricultural logistics tech startup in Silicon Mountain (Buea) or Douala.',
    entrepreneurshipPathFr: 'Créer une agence de développement d\'applications, une startup fintech ou une plateforme e-santé à Douala ou Buea.'
  },
  {
    id: 'roadmap-agri',
    careerTitleEn: 'Agribusiness & Agro-Industrial Entrepreneur',
    careerTitleFr: 'Entrepreneur Agro-Industriel & Chef d\'Exploitation',
    stream: 'grammar',
    stages: [
      {
        stageNameEn: 'Stage 1: Secondary Foundation',
        stageNameFr: 'Étape 1 : Socle au Secondaire',
        timeline: 'Years 1 - 3',
        milestonesEn: [
          'Choose Science Series (C/D or A-Level Biology/Chemistry/Geography)',
          'Participate in school Young Farmers Clubs and biology lab experiments',
          'Acquire baseline accounting knowledge to understand farm profitability'
        ],
        milestonesFr: [
          'Choisir la Série D ou C avec de bons résultats en SVT et Chimie',
          'S\'investir dans les projets scolaires d\'initiation agricole',
          'Apprendre les bases de calcul de rentabilité économique'
        ]
      },
      {
        stageNameEn: 'Stage 2: Higher Agricultural Training',
        stageNameFr: 'Étape 2 : Formation Supérieure Agronomique',
        timeline: 'Years 4 - 6',
        milestonesEn: [
          'Pass Concours FASA Dschang, Faculty of Agriculture UB, or CFPR Agropastoral CQP',
          'Study crop transformation, animal pathology, and modern drip irrigation',
          'Conduct field internships in cocoa, coffee, palm oil, or poultry cooperatives'
        ],
        milestonesFr: [
          'Réussir le concours FASA Dschang ou obtenir un CQP/DQP agropastoral',
          'Étudier la transformation locale, l\'aviculture et l\'irrigation goutte-à-goutte',
          'Effectuer des stages terrain dans des coopératives de cacao, café ou maraîchage'
        ]
      },
      {
        stageNameEn: 'Stage 3: Enterprise Launch & Scaling',
        stageNameFr: 'Étape 3 : Lancement d\'Entreprise & Valorisation',
        timeline: 'Year 7+',
        milestonesEn: [
          'Access MINADER / MINEPIA agricultural youth funding grants',
          'Establish a commercial greenhouse poultry or cassava processing plant',
          'Distribute packaged foodstuffs to major supermarkets across CEMAC region'
        ],
        milestonesFr: [
          'Mobiliser les subventions jeunes du MINADER / MINEPIA et banques agricoles',
          'Créer une unité de transformation de manioc, maïs ou ferme avicole moderne',
          'Distribuer des produits emballés aux marchés urbains et régionaux'
        ]
      }
    ],
    entrepreneurshipPathEn: 'Massive opportunity in local food processing, replacing imported wheat/poultry with high-value Cameroonian farm produce.',
    entrepreneurshipPathFr: 'Opportunité immense dans la transformation agroalimentaire locale pour substituer les importations par des produits locaux.'
  },
  {
    id: 'roadmap-solar',
    careerTitleEn: 'Solar Mini-Grid & Renewable Energy Contractor',
    careerTitleFr: 'Installateur & Entrepreneur en Énergie Solaire',
    stream: 'technical',
    stages: [
      {
        stageNameEn: 'Stage 1: Technical High School (F-Series or CAP)',
        stageNameFr: 'Étape 1 : Lycée Technique (Série F3 ou CAP Électrique)',
        timeline: 'Years 1 - 3',
        milestonesEn: [
          'Enroll in Electrical Engineering (F3) or Industrial Electricity CAP',
          'Master single-phase and three-phase circuits, electrical safety, and schematics',
          'Learn basic solar panel mounting and battery charge controller wiring'
        ],
        milestonesFr: [
          'S\'inscrire en Série F3 (Électrotechnique) ou CAP Électricité d\'Équipement',
          'Maîtriser les circuits mono/triphasés et les normes de sécurité',
          'S\'initier au raccordement des panneaux solaires et régulateurs'
        ]
      },
      {
        stageNameEn: 'Stage 2: Advanced Technical Certification',
        stageNameFr: 'Étape 2 : Diplôme Technique Supérieur (DUT/BTS/CQP)',
        timeline: 'Years 4 - 5',
        milestonesEn: [
          'Obtain DUT from IUT Douala/Bandjoun or CQP from Centre de Formation Paul Biya',
          'Complete hands-on apprenticeships with certified renewable energy contractors',
          'Master solar sizing software (PVsyst, Homer Energy) and hybrid inverters'
        ],
        milestonesFr: [
          'Obtenir un DUT à l\'IUT Douala/Bandjoun ou un CQP certifié',
          'Effectuer un apprentissage auprès d\'entreprises d\'énergie solaire',
          'Maîtriser les logiciels de dimensionnement et onduleurs hybrides'
        ]
      },
      {
        stageNameEn: 'Stage 3: Business Creation',
        stageNameFr: 'Étape 3 : Création d\'Entreprise',
        timeline: 'Year 6+',
        milestonesEn: [
          'Register solar maintenance enterprise with the Ministry of Small & Medium Enterprises (MINPMEESA)',
          'Install backup solar systems for hospitals, schools, and private households',
          'Partner with rural microfinance banks to offer pay-as-you-go solar systems'
        ],
        milestonesFr: [
          'Immatriculer son entreprise auprès du MINPMEESA',
          'Installer des systèmes de secours pour cliniques, écoles et particuliers',
          'Collaborer avec des microfinances pour proposer le solaire en paiement échelonné'
        ]
      }
    ],
    entrepreneurshipPathEn: 'Direct self-reliance through independent electrical and solar installation contracting across all 10 regions of Cameroon.',
    entrepreneurshipPathFr: 'Auto-emploi immédiat via la prestation d\'installation et maintenance solaire dans les 10 régions du Cameroun.'
  }
];

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'res-minesec-guide',
    titleEn: 'Official MINESEC Subject Choice & Streaming Manual',
    titleFr: 'Guide Officiel d\'Orientation et Choix de Séries (MINESEC)',
    category: 'Subject Selection',
    format: 'Official Circular',
    descriptionEn: 'The definitive regulatory criteria for transitioning from Form 3 to Form 4 (Anglophone) and 4ème to 3ème/Seconde (Francophone). Details minimum subject pass marks.',
    descriptionFr: 'Les critères réglementaires ministériels pour le passage en séries scientifiques, littéraires ou techniques.',
    targetAudience: 'Students in Form 3–5 / 4ème–Seconde and Parents'
  },
  {
    id: 'res-concours-calendar',
    titleEn: 'Annual Cameroon National Concours Master Calendar & Syllabi',
    titleFr: 'Calendrier Unique des Concours Nationaux & Programmes',
    category: 'Concours Guide',
    format: 'PDF Guide',
    descriptionEn: 'Comprehensive breakdown of launch dates, written test formats, and required coefficient subjects for ENSPY, FMSB/FHS, ESSEC, ENSTP, and ENS.',
    descriptionFr: 'Récapitulatif des dates d\'ouverture, épreuves écrites et coefficients pour ENSPY, Médecine FMSB/FHS, ESSEC, ENSTP et ENS.',
    targetAudience: 'Upper Sixth / Terminale students and School Leavers'
  },
  {
    id: 'res-stream-comparison',
    titleEn: 'Grammar vs Technical vs Commercial: The Honest Comparison',
    titleFr: 'Enseignement Général vs Technique vs Commercial : Analyse Comparative',
    category: 'Vocational Orientation',
    format: 'Interactive Roadmap',
    descriptionEn: 'An objective guide breaking down job market placement rates, cost of schooling, and entrepreneurial potential across all three streams.',
    descriptionFr: 'Guide objectif comparant les taux d\'insertion professionnelle, les coûts d\'études et le potentiel d\'auto-emploi.',
    targetAudience: 'Secondary Students, Parents, and Guidance Counsellors'
  },
  {
    id: 'res-fast-track-skills',
    titleEn: 'Quick-Entry Digital & Vocational Skills Handbook',
    titleFr: 'Guide des Formations Accélérées aux Métiers Numériques & Manuels',
    category: 'Vocational Orientation',
    format: 'PDF Guide',
    descriptionEn: 'Directory of short-cycle certified programs (DQP/CQP 3–9 months) in Cameroon for immediate employment in tech, solar, and agropastoral trades.',
    descriptionFr: 'Répertoire des formations courtes certifiées (DQP/CQP de 3 à 9 mois) pour une insertion professionnelle rapide au Cameroun.',
    targetAudience: 'School Leavers, Job Seekers, and Young Adults'
  }
];
