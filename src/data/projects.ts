export interface Project {
  id: string;
  title: string;
  description: string;
  goals: string[];
  projectUrl?: string;
  colabUrl?: string;
  slidesUrl?: string;
  githubUrl?: string;
  type: 'colab' | 'slides' | 'github';
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
    description: 'This is a project I put together for a sleep AI company interview to showcase machine learning and presentation fundamentals. I downloaded hypnogram data online with labeled REM cycles and applied machine learning in order to extract the important features of REM cycles. I think prepared a slidedeck to present insights.',
    goals: [
      'Apply machine learning to biological datasets to extract key features',
      'Demonstrate ability to communicate key info efficiently',
      'Proactively outline potential next steps',
      'Independtly source and process labeled sleep data'
    ],
    colabUrl: 'https://colab.research.google.com/drive/1RBQoqKxoNutcxip2nh_-MWLqXgEDJiZC?usp=sharing',
    slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vSdQb_nG-0_b2aXIlR2InlQj7Nbd3QsAX4gTaAVH5tsS1fzgqDUPggurF1CT3A0pFx2-t2PO35eEuYT/pub',
    type: 'colab',
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
    ],
    slidesUrl: 'https://docs.google.com/presentation/d/1wTmXt0QeTmE5qFHDgGxjA8CN4l6qejSsrMO6V3Mlbkk/edit?usp=sharing',
    type: 'slides',
    tags: ['Multi-color Flow Cytometry', 'Spectral Flow', 'Cytek Aurora', 'Product Characterization', 'CAR-T', '"Off-the-shelf" Drug Products'],
    lastModified: '2025-04-15',
    category: 'biotechnology'
  }
];

// Debug function to inspect projects data
export const debugProjects = () => {
  console.group('🔍 Projects Debug Information');
  console.log('Total projects:', projects.length);
  
  projects.forEach((project, index) => {
    console.group(`📋 Project ${index + 1}: ${project.title}`);
    console.log('ID:', project.id);
    console.log('Description:', project.description);
    console.log('Goals:', project.goals);
    console.log('URLs:', {
      projectUrl: project.projectUrl || 'Not set',
      colabUrl: project.colabUrl || 'Not set',
      slidesUrl: project.slidesUrl || 'Not set',
      githubUrl: project.githubUrl || 'Not set'
    });
    console.log('Type:', project.type);
    console.log('Tags:', project.tags);
    console.log('Last Modified:', project.lastModified);
    console.log('Category:', project.category);
    if (project.technicalDetails) {
      console.log('Technical Details:', project.technicalDetails);
    }
    if (project.keyFeatures) {
      console.log('Key Features:', project.keyFeatures);
    }
    console.groupEnd();
  });
  
  console.groupEnd();
  return projects;
};