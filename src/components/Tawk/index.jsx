"use client";
import { useEffect } from "react";

const Tawk = () => {
  useEffect(() => {
    // Avoid running if script already added
    if (document.querySelector('script[src^="https://embed.tawk.to"]')) return;

    const Tawk_API = window.Tawk_API || {};
    const Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/66e2761450c10f7a00a85c6f/1i7i9qgb7";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode?.insertBefore(s1, s0);

    return () => {
      const tawkScript = document.querySelector('script[src^="https://embed.tawk.to"]');
      if (tawkScript) {
        tawkScript.remove();
      }
    };
  }, []);

  return null; // No visible component
};

export default Tawk;
