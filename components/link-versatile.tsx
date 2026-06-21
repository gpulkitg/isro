import Link from "next/link";
import type { ReactNode } from "react";
import { isValidRoute } from "@/lib/content/routes";

// Internal links use next/link; external (http...) links open in a new tab.
// Internal links whose target route does not exist degrade to non-clickable
// text, so the site never 404s from a dead link.
export default function LinkVersatile({
  url,
  children,
  className,
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  if (/^https?:\/\//.test(url)) {
    return (
      <a href={url} target="_blank" rel="noreferrer external" className={className}>
        {children}
      </a>
    );
  }
  if (url && !url.startsWith("#") && isValidRoute(url)) {
    return (
      <Link href={url} className={className}>
        {children}
      </Link>
    );
  }

  // dead / placeholder internal link → render as plain, non-clickable text
  return (
    <span className={["text-muted", className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
