export default function TutorialImage({
  src,
  caption,
}: {
  src?: string;
  caption: string;
}) {
  return (
    <div className="tuto-img">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={caption} />
      ) : (
        <span>{caption}</span>
      )}
    </div>
  );
}
