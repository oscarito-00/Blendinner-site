// Logo Blendinner — image unique définie ici, utilisée dans toute la nav.
export default function Logo({ className = "logo-icon" }: { className?: string }) {
  return (
    <img
      src="/photos/logo-blendinner.svg"
      alt="Blendinner"
      className={className}
    />
  );
}
