// Sidebar sticky — liste tous les raccourcis du tutoriel, groupés par section.
import { Inline } from "@/lib/inline";

type ShortcutGroup = {
  label: string;
  rows: { keys: string; desc: string }[];
};

export default function ShortcutsSidebar({ shortcuts }: { shortcuts: ShortcutGroup[] }) {
  return (
    <div>
      <div className="tuto-sidebar-heading">Raccourcis</div>
      {shortcuts.map((group, i) => (
        <div key={i} className="tuto-sidebar-group">
          {group.rows.map((row, j) => (
            <div key={j} className="tuto-sidebar-row">
              <span className="tuto-sidebar-key"><Inline text={row.keys} /></span>
              <span className="tuto-sidebar-desc"><Inline text={row.desc} /></span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
