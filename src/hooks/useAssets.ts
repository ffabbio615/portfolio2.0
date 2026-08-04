import { useEffect, useState } from "react";

export function useAssets() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initialize() {
      // por enquanto...
      setLoading(true);
    }

    initialize();
  }, []);

  return { loading };
}