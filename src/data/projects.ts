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
    description: 'Project I put together for a sleep AI company interview to showcase machine learning and presentation fundamentals.',
    goals: [
      'Demonstrate capability to apply machine learning to biological datasets',
      'Implement data preprocessing and feature engineering techniques',
      'Compare performance of different classification algorithms',
      'Apply supervised machine learning algorithms for sleep stage detection',
      'Achieve high accuracy in sleep pattern classification',
      'Provide educational framework for understanding ML in healthcare applications'
    ],
    projectUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    colabUrl: 'https://colab.research.google.com/drive/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
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
    description: 'Presentation I gave for an interview talking about the work I contributed to at Allogene Therapeutics without breaking NDA. I provided an overview on "off-the-shelf" CAR-T and detailed the methodology of the 32-color flow cytometry panel I designed to screen starting material for donor differences.',
    goals: [
      'Demonstrate my technical skills in flow cytometry',
      'Outline how I use my skills to approach experiment design',
      'Summarize the pipelines and goals of my previous role at Allogene Therapeutics'
    ]
    slidesUrl: 'https://docs.google.com/presentation/d/1wTmXt0QeTmE5qFHDgGxjA8CN4l6qejSsrMO6V3Mlbkk/edit?usp=sharing',
    tags: ['Multi-color Flow Cytometry', 'Spectral Flow', 'Cytek Aurora', 'Product Characterization', 'CAR-T', '"Off-the-shelf" Drug Products'],
    lastModified: '2025-05-20',
    category: 'machine-learning'