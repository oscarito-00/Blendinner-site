import { Inline } from "@/lib/inline";

export default function NotionGrid({
  items,
}: {
  items: { term: string; def: string }[];
}) {
  return (
    <div className="notion-grid">
      {items.map((item, i) => (
        <div className="notion-item" key={i}>
          <div className="notion-item-term">
            <Inline text={item.term} />
          </div>
          <div className="notion-item-def">
            <Inline text={item.def} />
          </div>
        </div>
      ))}
    </div>
  );
}
