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
    title: 'Signal Processing and Machine Learning Demo',
    description: 'Comprehensive demonstration of EEG signal processing techniques combined with supervised machine learning for brain-computer interface applications. Features real-time signal filtering, feature extraction, and classification algorithms.',
    goals: [
      'Demonstrate real-time EEG signal acquisition and preprocessing techniques',
      'Implement advanced filtering methods for noise reduction and artifact removal',
      'Extract meaningful features from neural signals for classification',
      'Apply supervised machine learning algorithms for motor imagery detection',
      'Achieve high accuracy in brain-computer interface control applications',
      'Provide educational framework for understanding neural signal processing'
    ],
    technicalDetails: [
      'Real-time signal processing using Python and NumPy',
      'Bandpass filtering and Common Spatial Pattern (CSP) feature extraction',
      'Support Vector Machine (SVM) and Random Forest classification',
      'Cross-validation and hyperparameter optimization',
      'Integration with OpenBCI hardware for live data acquisition'
    ],
    keyFeatures: [
      'Interactive Jupyter notebook with step-by-step explanations',
      'Visualization of signal processing stages and classification results',
      'Modular code structure for easy adaptation to different datasets',
      'Performance metrics and statistical analysis of results'
    ],
    projectUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    githubUrl: 'https://github.com/porridge404/eeg-signal-processing',
    type: 'colab',
    slidesEmbedId: '1Xyz789AbcDef012GhiJkl345MnoPqr678StuVwx901',
    tags: ['Signal Processing', 'Machine Learning', 'EEG', 'Python', 'Scikit-learn', 'Brain-Computer Interface'],
    lastModified: '2024-01-20',
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