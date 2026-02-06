// Client-side storage utilities for admin panel
// In production, replace with actual database operations

export const AdminStorage = {
  // Training data
  getTrainings: () => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('admin_trainings');
    return data ? JSON.parse(data) : [];
  },
  
  saveTrainings: (trainings: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('admin_trainings', JSON.stringify(trainings));
  },

  // Services data
  getServices: () => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('admin_services');
    return data ? JSON.parse(data) : [];
  },
  
  saveServices: (services: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('admin_services', JSON.stringify(services));
  },

  // Articles data
  getArticles: () => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('admin_articles');
    return data ? JSON.parse(data) : [];
  },
  
  saveArticles: (articles: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('admin_articles', JSON.stringify(articles));
  },

  // Team data
  getTeam: () => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('admin_team');
    return data ? JSON.parse(data) : [];
  },
  
  saveTeam: (team: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('admin_team', JSON.stringify(team));
  },

  // Testimonials data
  getTestimonials: () => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('admin_testimonials');
    return data ? JSON.parse(data) : [];
  },
  
  saveTestimonials: (testimonials: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('admin_testimonials', JSON.stringify(testimonials));
  },

  // Contact messages
  getMessages: () => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('admin_messages');
    return data ? JSON.parse(data) : [];
  },
  
  saveMessages: (messages: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('admin_messages', JSON.stringify(messages));
  },

  // Clear all data
  clearAll: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('admin_trainings');
    localStorage.removeItem('admin_services');
    localStorage.removeItem('admin_articles');
    localStorage.removeItem('admin_team');
    localStorage.removeItem('admin_testimonials');
    localStorage.removeItem('admin_messages');
  }
};
