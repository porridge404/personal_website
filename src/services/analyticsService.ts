import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';

export const trackPageView = (pageName: string) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};

export const trackContactFormSubmission = () => {
  if (analytics) {
    logEvent(analytics, 'contact_form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form'
    });
  }
};

export const trackProjectView = (projectName: string) => {
  if (analytics) {
    logEvent(analytics, 'project_view', {
      event_category: 'engagement',
      event_label: projectName
    });
  }
};

export const trackSocialClick = (platform: string) => {
  if (analytics) {
    logEvent(analytics, 'social_click', {
      event_category: 'social',
      event_label: platform
    });
  }
};