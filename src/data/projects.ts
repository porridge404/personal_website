export interface Project {
  id: string;
  title: string;
  description: string;
  goals: string[];
  projectUrl: string;
  colabUrl?: string;
  slidesUrl?: string;
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
      'Demonstrate capability to apply machine learning to biological datasets',
      'Implement data preprocessing and feature engineering techniques',
      'Compare performance of different classification algorithms',
      'Apply supervised machine learning algorithms for sleep stage detection',
      'Achieve high accuracy in sleep pattern classification',
      'Provide educational framework for understanding ML in healthcare applications'
    ],
    projectUrl: '',
    colabUrl: 'https://colab.research.google.com/drive/1RBQoqKxoNutcxip2nh_-MWLqXgEDJiZC?usp=sharing',
    slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSdQb_nG-0_b2aXIlR2InlQj7Nbd3QsAX4gTaAVH5tsS1fzgqDUPggurF1CT3A0pFx2-t2PO35eEuYT/pub',
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
    projectUrl: '',
    type: 'slides',
    tags: ['Flow Cytometry', 'CAR-T Cells', 'Immunology', 'Cell Analysis'],
    lastModified: '2025-01-15',
    category: 'biotechnology'
  }
];

export function getProjectById(projectId: string): Project | undefined {
  return projects.find(project => project.id === projectId);
}