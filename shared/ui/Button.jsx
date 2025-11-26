export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        style={{
          background: "var(--accent)",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "6px",
          transition: "0.2s",
        }}
        onMouseOver={e => (e.target.style.background = "var(--accent-dark)")}
        onMouseOut={e => (e.target.style.background = "var(--accent)")}
      >
        {children}
      </button>
    );
  }
  