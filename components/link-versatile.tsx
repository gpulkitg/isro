import Link from "next/link";
import type { ReactNode } from "react";

// Internal links use next/link; external (http...) links open in a new tab.
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
  return (
    <Link href={url} className={className}>
      {children}
    </Link>
  );
}
