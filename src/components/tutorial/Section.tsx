import type { TutorialSection } from "@/types/content";
import { Inline } from "@/lib/inline";
import NotionGrid from "./NotionGrid";
import ShortcutTable from "./ShortcutTable";
import Note from "./Note";
import TutorialImage from "./TutorialImage";
import TutorialVideo from "./TutorialVideo";

// Rend une section générique en parcourant ses blocs typés.
// Ajouter un nouveau type de bloc = un case ici + une entrée dans
// ContentBlock (src/types/content.ts).
export default function Section({ section }: { section: TutorialSection }) {
  return (
    <section className="tuto-section">
      <div className="tuto-section-label">{section.label}</div>
      <h2>{section.heading}</h2>
      {section.blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i}>
                <Inline text={block.text} />
              </p>
            );
          case "subheading":
            return (
              <h3 key={i}>
                <Inline text={block.text} />
              </h3>
            );
          case "notionGrid":
            return <NotionGrid key={i} items={block.items} />;
          case "shortcuts":
            return <ShortcutTable key={i} rows={block.rows} />;
          case "note":
            return <Note key={i} lead={block.lead} text={block.text} />;
          case "image":
            return <TutorialImage key={i} src={block.src} caption={block.caption} />;
          case "video":
            return <TutorialVideo key={i} youtubeId={block.youtubeId} caption={block.caption} />;
        }
      })}
    </section>
  );
}
