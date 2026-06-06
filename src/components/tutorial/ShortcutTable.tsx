import { Inline } from "@/lib/inline";

export default function ShortcutTable({
  rows,
}: {
  rows: { keys: string; desc: string }[];
}) {
  return (
    <table className="shortcut-table">
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td>
              <Inline text={row.keys} />
            </td>
            <td>
              <Inline text={row.desc} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
