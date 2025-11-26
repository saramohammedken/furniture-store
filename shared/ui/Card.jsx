export default function Card({ children }) {
    return (
      <div
        style={{
          background: "#fff",
          border: `1px solid var(--border)`,
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        {children}
      </div>
    );
  }
  