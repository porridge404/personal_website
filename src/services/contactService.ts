import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp?: any;
  status?: 'new' | 'read' | 'replied';
}

export const submitContactForm = async (formData: Omit<ContactMessage, 'timestamp' | 'status'>) => {
  try {
    const docRef = await addDoc(collection(db, 'contact-messages'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    
    console.log('Contact message submitted with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const getContactMessages = async () => {
  try {
    // This would typically be used in an admin panel
    // For now, we'll just return the collection reference
    return collection(db, 'contact-messages');
  } catch (error) {
    console.error('Error fetching contact messages: ', error);
    throw error;
  }
};