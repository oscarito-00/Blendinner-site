// Footer partagé — défini UNE seule fois pour toutes les pages.
export default function Footer() {
  return (
    <footer>
      <span className="footer-left">Blendinner — Blender for beginners, 2026.</span>
      <span className="footer-right">
        <svg
          style={{ width: 16, height: 16, flexShrink: 0, fill: "#cc0000", verticalAlign: "middle" }}
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M500,85.79c-114.38,114.38-114.38,299.83,0,414.21-114.38-114.38-299.83-114.38-414.21,0-114.38,114.38-114.38,299.83,0,414.21,54.92,54.92,126.23,83.46,198.18,85.63l-.07.15h716.1V283.91l-.15.07c-2.18-71.96-30.71-143.26-85.63-198.18-114.38-114.38-299.83-114.38-414.21,0Z" />
        </svg>
        <a href="https://fund.blender.org" target="_blank" rel="noopener noreferrer">
          Soutenir la fondation Blender
        </a>
      </span>
    </footer>
  );
}
