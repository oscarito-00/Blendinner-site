import { Inline } from "@/lib/inline";

export default function Note({ lead, text }: { lead?: string; text: string }) {
  return (
    <div className="tuto-note">
      {lead ? (
        <>
          <strong>{lead}</strong>{" "}
        </>
      ) : null}
      <Inline text={text} />
    </div>
  );
}
