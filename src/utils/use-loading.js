// src/hooks/useLoading.js
import { useState, useEffect } from 'react';

const useLoading = (delay = 1200) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showLoading;
};

export default useLoading;