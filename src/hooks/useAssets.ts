import { useEffect, useState } from "react";
import { preloadAssets } from "../services/preloadAssets";

export function useAssets() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await preloadAssets((progress) => {
          setProgress(progress);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(()=> setLoading(false), 2000);
      }
    };

    loadAssets();
  }, []);

  return {
    loading,
    progress,
  };
}