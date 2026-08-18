/* ---------------------------------------------------------------
   Single source of truth for site content.
   Edit here and every page updates — no JSX hunting required.
   --------------------------------------------------------------- */

export const NAV = [
  { to: '/students', label: 'Students' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/courses', label: 'Courses' },
  { to: '/plans', label: 'Plans' },
  { to: '/colleges', label: 'Colleges' },
  { to: '/companies', label: 'Companies' }
]

export const FOOTER = [
  {
    title: 'Students',
    links: [
      { to: '/students', label: 'Student portal' },
      { to: '/students#learn', label: 'Learn & practice' },
      { to: '/students#exams', label: 'Mock exams' },
      { to: '/students#recruiters', label: 'Top recruiters' },
      { to: '/jobs', label: 'Jobs & internships' },
      { to: '/plans', label: 'Plans' }
    ]
  },
  {
    title: 'Practice',
    links: [
      { to: '/students#topics', label: 'Quantitative aptitude' },
      { to: '/students#topics', label: 'Logical reasoning' },
      { to: '/students#topics', label: 'Technical' },
      { to: '/students#topics', label: 'Verbal ability' },
      { to: '/courses', label: 'Live courses' }
    ]
  },
  {
    title: 'Institutions',
    links: [
      { to: '/colleges', label: 'For colleges' },
      { to: '/colleges#monitoring', label: 'Monitoring system' },
      { to: '/companies', label: 'For companies' },
      { to: '/companies#post', label: 'Post a role free' }
    ]
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About the team' },
      { to: '/insights', label: 'Insights' },
      { to: '/contact', label: 'Contact' },
      { to: '/login', label: 'Log in' }
    ]
  }
]

/* SOCIAL: replace with your real YouTube, Instagram and LinkedIn URLs */
export const SOCIALS = { youtube: '#', instagram: '#', linkedin: '#' }

export const STATS = [
  { value: '10,000+', label: 'Students trained to placement by our aptitude head' },
  { value: '6,000+', label: 'Questions, each with its own video solution' },
  { value: '3 states', label: 'College partnerships today, Pan India in two years' },
  { value: '99.7', label: 'Percentile in CAT, consistently, by the trainer who wrote the content' }
]

export const MODULES = [
  { tag: 'Learn', title: 'Practice and watch-and-learn', body: 'Practice exercises, practice tests, and video lessons for every topic on the syllabus.' },
  { tag: 'Exam', title: 'Company-specific mocks', body: 'Papers built to individual company patterns, plus full-length general mocks.' },
  { tag: 'Top recruiters', title: 'Know what they ask for', body: 'Browse recruiter profiles and required skills, then wishlist companies to raise your visibility.' },
  { tag: 'Profile', title: 'Kept current, not annual', body: 'Resume, skills, certifications, academic records and projects — visible to recruiters in real time.' },
  { tag: 'Jobs', title: 'Apply where hiring is open', body: 'Live internships and jobs posted by companies, applied to from the same account.' },
  { tag: 'Courses', title: 'Live, online or hybrid', body: 'Instructor-led courses run by our own trainers, for what practice alone will not fix.' }
]

export const SECTIONS = [
  { name: 'Quants', body: 'Arithmetic, algebra, data interpretation' },
  { name: 'Logical reasoning', body: 'Puzzles, series, critical reasoning' },
  { name: 'Technical', body: 'Programming, DBMS, OS, core subjects' },
  { name: 'Verbal', body: 'Grammar, comprehension, vocabulary' }
]

export const TOPICS = [
  {
    group: 'Quantitative aptitude',
    items: ['Percentages', 'Time, speed and distance', 'Time and work', 'Profit and loss',
            'Ratio and proportion', 'Permutations and combinations', 'Probability', 'Data interpretation']
  },
  {
    group: 'Logical reasoning',
    items: ['Seating arrangements', 'Blood relations', 'Syllogisms', 'Coding and decoding',
            'Number and letter series', 'Direction sense', 'Data sufficiency', 'Critical reasoning']
  },
  {
    group: 'Technical',
    items: ['C and C++', 'Java', 'Python', 'Data structures and algorithms',
            'DBMS and SQL', 'Operating systems', 'Computer networks', 'OOP concepts']
  },
  {
    group: 'Verbal ability',
    items: ['Reading comprehension', 'Sentence correction', 'Para jumbles', 'Synonyms and antonyms',
            'Idioms and phrases', 'Error spotting', 'Fill in the blanks', 'Vocabulary builder']
  }
]

export const JOURNEY = [
  { year: '1st', title: 'Build the base', body: 'Basic quants, reasoning and verbal, twenty minutes a day on the app. No pressure, no backlog.' },
  { year: '2nd', title: 'Add the technical side', body: 'Programming, DBMS, OS and networks alongside your semester subjects, so revision is not from zero.' },
  { year: '3rd', title: 'Target real companies', body: 'Company-specific mocks, wishlist your recruiters, and start applying for internships.' },
  { year: 'Final', title: 'Walk in ready', body: 'Full-length mocks, interview practice, and a profile recruiters can already see and filter on.' }
]

/* LISTINGS: replace with real postings from your jobs database */
export const JOBS = [
  { title: 'Software Engineer Trainee', type: 'Full time', meta: 'IT services · Pune, Hyderabad · 2027 batch · CGPA 7.0+', skills: ['Python', 'SQL', 'DSA'] },
  { title: 'Data Analyst Intern', type: 'Internship', meta: 'Analytics · Remote · 3rd year and above · 6 months', skills: ['Excel', 'SQL', 'Statistics'] },
  { title: 'Production Engineer', type: 'Full time', meta: 'Core engineering · Nagpur · 2027 batch · Mechanical', skills: ['Manufacturing', 'Quality', 'Aptitude 70+'] },
  { title: 'Associate — Operations', type: 'Full time', meta: 'BPO / shared services · Pune · Any graduate', skills: ['Communication', 'Excel', 'Verbal 65+'] },
  { title: 'QA Engineer Trainee', type: 'Full time', meta: 'Product · Bengaluru · 2026 and 2027 batch', skills: ['Testing basics', 'SQL', 'Java'] },
  { title: 'Pharma QA Intern', type: 'Internship', meta: 'Pharma · Aurangabad · B.Pharma final year', skills: ['GMP', 'Documentation', 'Lab work'] }
]

/* PATTERNS: swap for your live company-specific paper list */
export const PATTERNS = [
  { title: 'IT services mass hiring', rounds: '3 rounds', body: 'High-volume fresher drives with a fixed national test pattern.', steps: ['Aptitude and reasoning', 'Coding or technical MCQ', 'Communication and interview'] },
  { title: 'Product companies', rounds: '4 rounds', body: 'Heavier on data structures, with tighter time limits per problem.', steps: ['Online coding assessment', 'DSA problem solving', 'System basics', 'HR round'] },
  { title: 'Analytics and BPO', rounds: '3 rounds', body: 'Data interpretation and verbal weighted far above coding.', steps: ['Quants and DI', 'Verbal and comprehension', 'Case or voice round'] },
  { title: 'Core engineering', rounds: '3 rounds', body: 'Branch subjects alongside general aptitude, plus a technical interview.', steps: ['Aptitude', 'Branch technical', 'Technical interview'] }
]

/* PRICING: replace "Add price" with your live subscription pricing before launch */
export const PLANS = [
  {
    name: 'Free', price: '₹0', note: 'No card, no expiry', featured: false,
    features: ['One full general mock test', 'Sample practice sets in all four sections',
               'Profile and resume upload', 'Browse jobs, internships and recruiters', 'Mobile app access'],
    cta: { label: 'Create a free account', to: '/signup', style: 'btn-ghost' }
  },
  {
    name: 'Student subscription', price: 'Add price', per: '/ year', note: 'Full platform access', featured: true,
    features: ['All 6,000+ questions with video solutions', 'Company-specific and full-length mock exams',
               'Top recruiters, required skills and wishlisting', 'Sectional and topic-wise performance reports',
               'Apply to every live job and internship', 'Progress synced across web and app'],
    cta: { label: 'Subscribe', to: '/signup', style: 'btn-violet' }
  },
  {
    name: 'Through your college', price: 'Institutional', note: 'Training and monitoring package', featured: false,
    features: ['Everything in the student subscription', 'Trainer-led sessions, on campus or online',
               'Scheduled assessments for your batches', 'Monitoring dashboard for the placement cell',
               'Product-only licensing also available'],
    cta: { label: 'See college packages', to: '/colleges', style: 'btn-ghost' }
  }
]

export const TEAM = [
  { initials: 'AS', name: 'Aakash Satdeve', role: 'Technical Head', body: 'Previously at Persistent and Accenture. Builds the platform behind the training.' },
  { initials: 'AS', name: 'Abhilash Sannyal', role: 'Aptitude Head', body: 'Consistent 99.7 percentiler in CAT. Has trained more than 10,000 students into placements.' },
  { initials: 'PV', name: 'Poonam Vaidya', role: 'Head — Sales & College Communication', body: 'Over 14 years in corporate roles. Runs institutional partnerships end to end.' },
  { initials: 'HS', name: 'Hemant Sakore', role: 'Head — Operations', body: 'Previously at TCS. Keeps training delivery and assessments running on schedule.' }
]

export const COLLEGE_BENEFITS = [
  { icon: 'lines', title: 'Trainer-led programme', body: 'Aptitude, technical and verbal training delivered to your batches by trainers who have taken over 10,000 students through placement rounds.' },
  { icon: 'chart', title: 'Proprietary monitoring system', body: 'Real-time progress for every student and every batch: attempts, score movement, and the topics a cohort keeps failing.' },
  { icon: 'phone', title: 'Mobile app for students', body: 'Practice does not stop at the lab door. Students continue on the app and their activity flows straight into your dashboard.' },
  { icon: 'clock', title: 'Lower cost, not more headcount', body: 'Implementing the product reduces what you spend on training and assessment. Our rates are deliberately disruptive — ask for the comparison against your current spend.' },
  { icon: 'layers', title: 'Data-driven decisions', body: 'Deciding where to put training hours needs evidence. We provide the tech layer that lets your cell make those calls on data.' },
  { icon: 'doc', title: 'One product, three sides', body: 'The same platform serves your students, your placement cell and the companies you invite — instead of three disconnected tools.' }
]

/* ARTICLES: replace with real posts and dates as you publish */
export const POSTS_STUDENT = [
  { tag: 'Placement prep', title: 'Why final-year prep is already too late', body: 'What changes when students start aptitude practice in first year instead of the semester before drives begin.' },
  { tag: 'Aptitude', title: 'The three questions that eat your time', body: 'Time and work, probability, and data sufficiency take longer than they should. Where the minutes actually go.' },
  { tag: 'Technical', title: 'How much DSA a services role really needs', body: 'Product companies and services companies test very differently. Prepare for the paper you are sitting.' },
  { tag: 'Profile', title: 'The ten minutes that get you found', body: 'Which profile fields recruiters actually filter on, and which ones nobody searches.' },
  { tag: 'Interview', title: 'Answering "tell me about yourself" without rambling', body: 'A structure that works for freshers with no work experience to draw on.' },
  { tag: 'Internships', title: 'Second-year students can apply. Most do not.', body: 'Why an early internship changes your final-year applications more than another certificate does.' }
]

export const POSTS_INSTITUTION = [
  { tag: 'For placement cells', title: 'Reading a batch report properly', body: 'Attempt rate, score movement and topic gaps — which numbers tell you a cohort is genuinely improving.' },
  { tag: 'For placement cells', title: 'Why training days alone do not move numbers', body: 'Sessions without assessment produce goodwill and no evidence. What to measure between them.' },
  { tag: 'For recruiters', title: 'What a screening filter should actually check', body: 'CGPA alone predicts less than most shortlists assume. A look at combining it with test performance.' }
]

export const FAQ_HOME = [
  { q: 'Is it really free to start?', a: 'Yes. A free account gives you one full mock test, sample practice sets across all four sections, your profile, and access to browse jobs. No card, no expiry. Subscriptions open the full question bank and company-specific papers.' },
  { q: "I'm in first year. Isn't this too early?", a: 'It is the best time. Twenty minutes a day for three years beats three months of panic, and the aptitude base you build carries into internships, higher studies, and every competitive exam you might sit.' },
  { q: "My college hasn't partnered with SkillReady. Can I still join?", a: 'Yes. Students can sign up directly and subscribe individually. If your placement cell wants the batch programme and monitoring dashboard, point them to our colleges page.' },
  { q: 'Do you guarantee a placement?', a: 'No, and we do not charge anyone for placements. We make you better prepared and make you visible to companies searching on real test data. The hiring decision stays with the employer.' },
  { q: 'Is there a mobile app?', a: 'Yes. Practice sets and tests run on the app, and your progress syncs with the web portal and, if your college has partnered with us, with their monitoring dashboard.' },
  { q: 'What does a video solution actually show?', a: 'A trainer working the question end to end — the approach, the shortcut, and the mistake most students make. That is the difference between knowing the answer and knowing the method.' }
]

export const FAQ_COLLEGE = [
  { q: 'Will you commit to placement numbers?', a: 'No. Any vendor that does is selling you something they do not control. We commit to training quality and to giving you visibility on whether it is working. Your numbers improve because your students are better prepared and more visible to employers.' },
  { q: 'How is this cheaper than what we do now?', a: 'Most institutions pay separately for training days and for an assessment tool. One platform covering both, at our rates, comes out lower — ask us to run the comparison against your current spend.' },
  { q: 'Do our students have to pay?', a: 'Not when the institution takes the package. Students can also subscribe individually if you prefer that model.' },
  { q: 'Can we invite our own recruiters onto the platform?', a: 'Yes. Employers use it at no cost, so there is no barrier to inviting the companies you already have relationships with.' },
  { q: 'What do we need in place technically?', a: 'Browsers and phones. Students practise on web or the mobile app, and your cell logs into the dashboard. Nothing to install on campus.' }
]

export const FAQ_COMPANY = [
  { q: 'Is it free now and paid later?', a: 'Free, and structurally so. Colleges and students fund the platform, and charging employers would work against the reason it exists. If that ever changes you would hear it from us before it happened, not in an invoice.' },
  { q: 'Where do the aptitude scores come from?', a: 'Assessments taken on our platform, under our test conditions — not self-reported numbers. That is why they are usable as a filter.' },
  { q: 'Which colleges will we reach?', a: 'Partner institutions across three states today, expanding towards Pan India coverage over the next two years. Ask us for the current list for your hiring locations.' },
  { q: 'Can we run our own test on the platform?', a: 'Tell us the pattern you use on the contact form and we will confirm what is possible for your drive.' }
]

export const FAQ_PLANS = [
  { q: 'What do I lose if I stay on the free plan?', a: 'The full question bank, company-specific mock papers, detailed performance reports, and the ability to apply to every listing. You keep your profile, the mobile app, one general mock, and sample sets in each section.' },
  { q: 'My college already pays. Do I need a subscription?', a: 'No. If your institution has the training and monitoring package, your access comes through them at no extra cost to you.' },
  { q: 'Are live courses included in the subscription?', a: 'No. Courses are instructor-led with limited batch sizes, so they are priced separately. Subscribers get the practice and testing platform; the course adds live teaching on top.' },
  { q: 'Can I switch or cancel?', a: 'Ask us on the contact form and we will confirm the current terms for your plan before you pay.' }
]

/* COURSE PAGE: replace batch dates, durations and fees */
export const COURSES = [
  { tag: 'Aptitude', title: 'Quants and reasoning intensive', body: 'Arithmetic through data interpretation and logical reasoning, in the order companies test them. Built for students starting from zero.', meta: ['Mode: live online', 'Duration: add weeks', 'Next batch: add date'] },
  { tag: 'Technical', title: 'Programming and core subjects', body: 'Coding fundamentals with DBMS, OS and networks — the technical round, taught weekly with graded practice sets between sessions.', meta: ['Mode: online or hybrid', 'Duration: add weeks', 'Next batch: add date'] },
  { tag: 'Verbal & interview', title: 'Verbal ability and interview craft', body: 'Comprehension and grammar for the written round, then group discussion and structured interview answers with live mock rounds.', meta: ['Mode: hybrid', 'Duration: add weeks', 'Next batch: add date'] }
]

export const COURSE_NAMES = COURSES.map((c) => c.title).concat('Not sure yet')
