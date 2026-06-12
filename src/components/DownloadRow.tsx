import type { DownloadFile } from "@/lib/downloads";

export default function DownloadRow({ file }: { file: DownloadFile }) {
  return (
    <div className="dl-file-row">
      <div className="dl-file-info">
        <span className="dl-file-name">{file.name}</span>
        <span className="dl-file-meta">{file.size}</span>
      </div>
      <a
        className="btn-dl-svg"
        href={`/files/${file.slug}.blend`}
        download
        title={`Télécharger ${file.name} (.blend)`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photos/pictogramme-download.svg" alt="" aria-hidden="true" />
      </a>
    </div>
  );
}
