import { loadYaml } from "@/lib/content/yaml";

export const metadata = { title: "Vision and Mission Statements" };

type Section = {
  title?: string;
  text?: string;
};

type AboutYaml = {
  visionAndMissionStatements: Section[];
};

export default function VisionAndMissionStatementsPage() {
  const about = loadYaml<AboutYaml[]>("about.yaml")[0];
  const sections = about.visionAndMissionStatements ?? [];

  return (
    <>
      {sections.map((section, ind) => (
        <div
          className="container pt-3 pb-2"
          key={`visionAndMissionStatements_${ind}`}
        >
          {section.title && (
            <h2 className="text-center mb-2">{section.title}</h2>
          )}
          {section.text && (
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: section.text }}
            />
          )}
        </div>
      ))}
    </>
  );
}
