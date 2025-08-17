// Import images as modules for better Vercel compatibility
export const images = {
  profile: require('../assets/profile.jpg'),
  queuepro: require('../assets/queuepro.png'),
  edifyhub: require('../assets/edifyhub.png'),
  eventhub: require('../assets/eventhub.png'),
  hospitalManagement: require('../assets/hospital-management-project.jpg')
};

// Fallback for missing images
export const getImageUrl = (imageName: string, fallback?: string) => {
  try {
    return images[imageName as keyof typeof images] || fallback || '/images/placeholder.png';
  } catch (error) {
    return fallback || '/images/placeholder.png';
  }
};
