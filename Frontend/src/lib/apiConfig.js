/**
 * Dynamically resolves the backend base URL for both local development and production.
 */
const getBackendUrl = () => {
  // Detect if running locally
  const isLocal = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || 
     window.location.hostname === '127.0.0.1' || 
     window.location.hostname.startsWith('192.168.'));

  // If an environment variable is defined, use it only if it doesn't mistakenly point to localhost in production
  if (import.meta.env.VITE_BACKEND_URL) {
    const envUrl = import.meta.env.VITE_BACKEND_URL;
    if (isLocal || !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
      return envUrl;
    }
  }
  
  if (isLocal) {
    // In local development, we keep the empty string to utilize Vite's dev server proxy (/api -> http://localhost:8080)
    return ''; 
  }
  
  // Production URL
  return 'https://a-pied-kappa.vercel.app';
};


export const BACKEND_URL = getBackendUrl();

/**
 * Formats a clean request endpoint prefixed with the correct backend domain if needed.
 * @param {string} path - The relative path starting with /api/
 * @returns {string} The fully qualified API URL or relative path
 */
export const getApiUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (!BACKEND_URL) {
    return cleanPath;
  }
  return `${BACKEND_URL}${cleanPath}`;
};
