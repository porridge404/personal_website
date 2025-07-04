export interface Project {
  id: string;
  title: string;
  description: string;
  goals: string[];
  projectUrl: string;
  githubUrl?: string;
  type: 'colab' | 'slides' | 'github';
  slidesEmbedId?: string;
  tags: string[];
  lastModified: string;
  category: string;
  technicalDetails?: string[];
  keyFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: 'signal-processing-ml',
    title: 'Sleep Data Machine Learning Demo',
    description: 'This is a project I put together for a sleep AI company interview to showcase machine learning and presentation fundamentals.',
    goals: [
      'Demonstrate capability to use ',
      'Implement advanced filtering methods for noise reduction and artifact removal',
      'Extract meaningful features from neural signals for classification',
      'Apply supervised machine learning algorithms for motor imagery detection',
      'Achieve high accuracy in brain-computer interface control applications',
      'Provide educational framework for understanding neural signal processing'
    ],
    projectUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    type: 'colab',
    slidesEmbedId: '2PACX-1vSdQb_nG-0_b2aXIlR2InlQj7Nbd3QsAX4gTaAVH5tsS1fzgqDUPggurF1CT3A0pFx2-t2PO35eEuYT',
    tags: ['Machine Learning', 'Python', 'Random Forest', 'Logistic Regression', 'Scikit-learn'],
    lastModified: '2025-05-20',
    category: 'machine-learning'
  },
  {
    id: 'flow-cytometry-panel',
    title: 'Multicolor Flow Cytometry Panel Design',
    description: 'Detailed methodology and optimization process for designing a 32-color flow cytometry panel for comprehensive CAR-T cell characterization. Includes antibody selection, compensation strategies, and data analysis workflows.',
    goals: [
      'Design a comprehensive 32-color flow cytometry panel for CAR-T cell analysis',
      'Optimize antibody combinations to minimize spectral overlap and spillover',
      'Establish robust compensation strategies for accurate data interpretation',
      'Validate panel performance across different donor samples and manufacturing batches',
      'Create standardized protocols for consistent data generation',
      'Enable detailed characterization of CAR-T cell subsets and activation states'
    ],
    technicalDetails: [
      'Cytek Aurora spectral flow cytometer with 32-color capability',
      'Comprehensive antibody titration and optimization protocols',
      'Advanced compensation matrix calculation and validation',
      'FlowJo analysis workflows with automated gating strategies',
      'Statistical analysis of panel performance and reproducibility'
    ],
    keyFeatures: [
      'Complete antibody panel design with rationale for each marker',
      'Step-by-step optimization protocols and troubleshooting guides',
      'Compensation strategies and quality control metrics',
      'Data analysis workflows and interpretation guidelines',
      'Validation results across multiple manufacturing runs'
    ],
    projectUrl: 'https://docs.google.com/presentation/d/1Def456GhiJkl789MnoPqr012StuVwx345YzaB678/edit',
    type: 'slides',
    slidesEmbedId: '1Def456GhiJkl789MnoPqr012StuVwx345YzaB678',
    tags: ['Flow Cytometry', 'Cell Therapy', 'CAR-T', 'Immunology', 'Panel Design', 'Data Analysis'],
    lastModified: '2024-01-15',
    category: 'biotechnology'
  }
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};