import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="container text-center"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <h1 className="display-4 mb-1">Oops!</h1>
      <h2 className="text-muted mb-4">Page Not Found</h2>
      <Link href="/" className="btn btn-outline-light">
        Return home
      </Link>
    </div>
  );
}
