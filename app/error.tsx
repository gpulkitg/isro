"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <div
      className="container text-center"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <h1 className="display-4 mb-1">Something went wrong</h1>
      <h2 className="text-muted mb-4">An unexpected error occurred.</h2>
      <div className="d-flex gap-2 justify-content-center">
        <button type="button" className="btn btn-outline-light" onClick={() => reset()}>
          Try again
        </button>
        <Link href="/" className="btn btn-outline-light">
          Return home
        </Link>
      </div>
    </div>
  );
}
