import axios from "axios";

const API_BASE = "https://api-apartment-jmback.onrender.com/apartments";
const CACHE_KEY = "jm_cached_apartments_v1";

let memoryCache = null;
let inflightPromise = null;

// Read initial cache from sessionStorage if available
try {
  const stored = sessionStorage.getItem(CACHE_KEY);
  if (stored) {
    memoryCache = JSON.parse(stored);
  }
} catch (e) {
  // Ignore sessionStorage errors (e.g. private mode)
}

export const fetchAllApartments = async () => {
  if (memoryCache && memoryCache.length > 0) {
    return memoryCache;
  }

  if (inflightPromise) {
    return inflightPromise;
  }

  inflightPromise = (async () => {
    try {
      const response = await axios.get(API_BASE, { timeout: 12000 });
      if (Array.isArray(response.data)) {
        memoryCache = response.data;
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
        } catch (e) {}
        return memoryCache;
      }
      return response.data;
    } catch (err) {
      console.warn("Error fetching apartments:", err);
      // Return cached if available, else empty array
      return memoryCache || [];
    } finally {
      inflightPromise = null;
    }
  })();

  return inflightPromise;
};

export const fetchApartmentByNumber = async (apartmentNumber) => {
  // First check if already in cached list
  if (memoryCache && memoryCache.length > 0) {
    const match = memoryCache.find(
      (apt) => apt.apartmentNumber === apartmentNumber
    );
    if (match) return match;
  }

  // Otherwise fetch single or full list
  try {
    const response = await axios.get(`${API_BASE}/${apartmentNumber}`, {
      timeout: 10000,
    });
    return response.data;
  } catch (err) {
    console.warn("Error fetching single apartment:", err);
    // Fallback: search memoryCache if available
    if (memoryCache) {
      return (
        memoryCache.find((apt) => apt.apartmentNumber === apartmentNumber) || null
      );
    }
    return null;
  }
};

export const prefetchApartments = () => {
  if (typeof window === "undefined") return;
  const run = () => {
    fetchAllApartments().catch(() => {});
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(run, { timeout: 2000 });
  } else {
    setTimeout(run, 500);
  }
};
