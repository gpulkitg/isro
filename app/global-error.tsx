"use client";

import { useEffect } from "react";

// Replaces the root layout when the layout itself throws, so it can't rely on
// the app's stylesheet — styles are inline and it renders its own html/body.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          background: "#000",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2.25rem", margin: 0 }}>Something went wrong</h1>
        <p style={{ opacity: 0.7, margin: 0 }}>A critical error occurred.</p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            border: "1px solid #fff",
            background: "transparent",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
