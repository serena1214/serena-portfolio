import { useEffect } from "react";

export default function useViewport() {
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === document.documentElement) {
          console.log(window.innerWidth);
          document.documentElement.style.setProperty(
            "--vh",
            `${window.innerHeight * 0.01}px`
          );
          document.documentElement.style.setProperty(
            "--vw",
            `${window.innerWidth * 0.01}px`
          );
        }
      });
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, []);
}
