// Bloc vidéo d'un tutoriel — embed YouTube si youtubeId fourni, placeholder sinon.
export default function TutorialVideo({ youtubeId, caption }: { youtubeId?: string; caption?: string }) {
  if (!youtubeId) {
    return (
      <div className="tuto-img">
        <span>{caption ?? "Vidéo à venir"}</span>
      </div>
    );
  }
  return (
    <div className="tuto-img">
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={caption ?? "Vidéo tutoriel"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
      {caption && <span>{caption}</span>}
    </div>
  );
}
