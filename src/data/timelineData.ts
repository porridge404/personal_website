export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  employmentType?: string;
  type: 'work' | 'education' | 'research';
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  reasonForLeaving?: string;
  logoUrl?: string;
}

export const timelineData: TimelineEntry[] = [
  {
    id: 'Gamelandia',
    title: 'Retail Associate',
    organization: 'Gamelandia',
    period: 'May 2024 - Present',
    location: 'Palo Alto, CA',
    employmentType: 'Part-time',
    type: 'work',
    description: 'After my break, I used my event hosting skills as a Retail Associate at my local Mom and Pop game store while searching for new opportunities in tech and applying to graduate school. Unfortunately many graduate programs were defunded at the start of 2025 so I was not able to join a program',
    responsibilities: [
      'Hosting various Trading Card Game events',
      'Managing inventory and restocking retail space',
      'Helping customers with board game recommendations',
      'Training new associates'
    ],
    achievements: [
      'Winner of the National "Hobby Shop of the Year 2024" awarded by TCGPlayer',
      'Winner of "Best of Peninsula 2024: Best Place to Take Your Kid" Reader\'s Choice awarded by Mercury News'
    ],
    skills: ['Event Hosting', 'Customer Service', 'Inventory Management', 'Teamwork', 'Shopify'],
    logoUrl: '/custom-logos/career-search.svg'
  },
  {
    id: 'planned break',
    title: 'Planned Break - DJ, MC, and Music Producer',
    organization: 'Self-employed',
    period: 'Apr 2023 - May 2024',
    location: 'Palo Alto, CA',
    employmentType: 'Full-time',
    type: 'work',
    description: `Following industry-wide layoffs, I used the opportunity to take a break originally planned for after graduation. Unfortunately I wasn't able to take that break due to graduating during the height of the COVID-19 pandemic.

During this time, I reconnected with out-of-state and international family, pursued my passion for music production, and worked as a DJ and MC for weddings and corporate events. This intentional pause allowed me to recharge creatively and return with fresh perspective and renewed focus for the next phase of my career.`,
    responsibilities: [],
    achievements: [],
    skills: ['Event Hosting and Public Speaking', 'Teamwork and Coordination with Weddings Planners and Event Staff', 'Audio Equipment setup, operation, and troubleshooting'],
    logoUrl: '/custom-logos/stanford-logo.svg'
  },
  {
    id: 'Allogene',
    title: 'Associate Scientist',
    organization: 'Allogene Therapeutics',
    period: 'January 2022 - April 2023',
    location: 'South San Francisco, CA',
    employmentType: 'Full-time',
    type: 'work',
    description: 'Associate Scientist role in cell therapy product characterization and process development with a focus on multi-color flow cytometry. Contributed to the development of multiple allogeneic "off-the-shelf" CAR-T cell therapy pipelines targeting different antigens.',
    responsibilities: [
      'Generated process data through multi-color flow panels and FlowJo or FACSDiva analysis',
      'Visualized data using dashboards in Spotfire',
      'Provided critical flow analysis and visualizations in department and C-Suite meetings',
      'Mentored and trained junior associates on flow cytometry'
    ],
    achievements: [
      'Designed and optimized a 32 color flow cytometry panel for the Cytek Aurora to analyze starting material and donor differences',
      'Facilitated crash courses in immunology to bridge knowledge gaps and cultivate an environment where team members felt confident contributing insights',
      'Initiated cross-functional capabilities by seeking opportunities to train with the NGS team'
    ],
    skills: ['Multi-color Flow Cytometry', 'BD FACSLyric', 'BD FACSVerse', 'BD Fortessa', 'Cytek Aurora', 'FlowJo', 'FACSDiva', 'Spotfire', 'NGS', 'Illumina', 'PCR'],
    reasonForLeaving: 'Mass layoffs resulting in an over 20% workforce reduction.',
    logoUrl: '/custom-logos/biotech-company-logo.png'
  },
  {
    id: 'Stanford',
    title: 'Life Science Technician II',
    organization: 'Stanford University',
    period: 'Mar 2021 - Dec 2021',
    location: 'Palo Alto, CA',
    employmentType: 'Full-time',
    type: 'work',
    description: 'Lab support role at the Stanford University SNP Center for Allergy & Asthma Research.',
    responsibilities: [
      'Primary responsibility was receiving whole blood to perform basophil activation tests to run on the BD FACSCanto II',
      'Isolated PBMCs with ficoll',
      'Learned new experiements as necessary to provide lab support to PhD students and postdocs',
      'Pulled samples from Biobank and ran data queueries for collaborators'
    ],
    achievements: [
      'Trained in only two weeks to be the sole technician for FACS and basophil activation tests before previous technician left',
      'Contributed to publications, posters, and abstracts through lab support'
    ],
    skills: ['Flow Cytometry', 'PBMC Isolation', 'Biobank', 'Mass Cytometry', 'Helios', 'MiSeq', 'Luminex', 'PCR', 'ELISA', 'EpiTOF', 'HPLC', 'Western Blot'],
    reasonForLeaving: 'Amazing industry opportunity at a cell therapy company through a connection from my time at Gritstone Bio. PI was also transitioning out of Stanford University to Harvard University.'
  },
  {
    id: 'Gritstone',
    title: 'Manufacturing Associate II',
    organization: 'Gritstone Bio',
    period: 'Oct 2020 - Mar 2021',
    location: 'Pleasanton, CA',
    employmentType: '6 month contract',
    type: 'work',
    description: 'Contract position in cell culture manufacturing for the production of novel cancer vaccines and COVID treatment. Gained hands-on experience in GMP manufacturing, cell culture, and aseptic techniques.',
    responsibilities: [
      'Executed manufacturing protocols for upstream manufacturing of mammalian cell lines',
      'Maintained quality control standards in GMP environment',
      'Documented manufacturing processes and batch records',
      'Collaborated with cross-functional teams on process improvements',
      'Participated in equipment maintenance and calibration'
    ],
    achievements: [],
    skills: ['GMP Manufacturing', 'HEK and TTS Cell Lines', 'Bioreactor Scale-up', 'Transfection', 'Closed-system Suspension Cell Culture', 'Adherent Cell Culture', 'GDP', 'ELN', 'Batch Record Management', 'Aseptic Technique', 'Cleanroom Experience and Gowning up to BSL2+ and ISO5'],
    reasonForLeaving: 'Contract completion led to transition into a full-time position at an academic research lab at Stanford University.'
  },
  {
    id: 'graduation',
    title: 'BS in Bioengineering',
    organization: 'Santa Clara University',
    period: 'Jun 2020',
    location: 'Couch at home (graduated during COVID)',
    type: 'education',
    description: 'Graduated with a Bachelor of Science in Bioengineering, with a research paper in machine learning and a degree emphasis on medical devices.',
    responsibilities: [],
    achievements: [],
    skills: [],
    logoUrl: '/custom-logos/scu-logo.png'
  },
  {
    id: 'undergraduate-research',
    title: 'Undergraduate Research Experience',
    organization: 'Santa Clara University',
    period: 'Dec 2016 - Jun 2020',
    location: 'Santa Clara, CA',
    employmentType: 'Part-time',
    type: 'education',
    description: 'Comprehensive bioengineering program spanning multiple courses including advanced math, coding, physics, chemistry, organic chemistry, biology, anatomy, physiology. Lab training in a variety of projects such as CRISPR-Cas9 and microfluidics chip synthesis.',
    responsibilities: [
      'Conducted independent research projects in bioengineering laboratories',
      'Developed machine learning models for EEG signal processing',
      'Collaborated with faculty and graduate students on research initiatives',
      'Maintained laboratory equipment and safety protocols',
      'Presented research findings at academic conferences'
    ],
    achievements: [
      'Completed first publication on signal processing and using live EEG as a control method for a brain-computer interface',
      'Successfully applied machine learning techniques to biological signal analysis',
      'Gained proficiency in multiple laboratory techniques and instrumentation',
      'Developed strong foundation in experimental design and data analysis'
    ],
    skills: ['Machine Learning', 'EEG Analysis', 'Signal Processing', 'Python', 'MATLAB', 'Microfluidics', 'Bioengineering', 'Genomics']
  }
];