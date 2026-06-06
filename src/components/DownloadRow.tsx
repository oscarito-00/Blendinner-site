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
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="100" height="100" fill="#4400ff" />
          <path
            d="M65.33,47.89 L56.25,56.97 L52.53,56.97 L52.53,32.33 L47.47,32.34 L47.47,56.97 L43.75,56.97 L34.67,47.89 L31.09,51.47 L41.65,62.03 L58.35,62.03 L68.91,51.47 Z"
            fill="#f4f4f4"
          />
        </svg>
      </a>
    </div>
  );
}
