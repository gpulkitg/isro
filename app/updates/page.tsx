import { loadYaml } from "@/lib/content/yaml";
import UpdatesClient, { type UpdateItem } from "./updates-client";

export const metadata = { title: "Updates" };

type UpdateYaml = {
  title?: string;
  slug?: string;
  description?: string;
  date?: string;
  image?: string;
  tag?: string;
};

const COVER_IMAGE = "../images/updates/isro_moon.jpg";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Format an ISO-ish "YYYY-MM-DD" date as the legacy "D MMM YYYY".
function formatDate(raw: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(raw);
  if (!m) return raw;
  const [, year, month, day] = m;
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
}

export default function UpdatesPage() {
  const raw = loadYaml<UpdateYaml[]>("updates.yaml");

  const items: UpdateItem[] = raw
    .filter((u) => u.date)
    .map((u, ind) => ({
      id: String(ind),
      title: u.title ?? "",
      year: (u.date ?? "").slice(0, 4),
      date: formatDate(u.date ?? ""),
      sortKey: u.date ?? "",
      image: u.image ?? null,
    }))
    .sort((a, b) => b.sortKey.localeCompare(a.sortKey));

  const years = Array.from(new Set(items.map((u) => u.year))).sort((a, b) =>
    b.localeCompare(a)
  );

  return (
    <UpdatesClient items={items} years={years} cover={COVER_IMAGE} />
  );
}
