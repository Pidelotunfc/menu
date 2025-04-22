export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-xl border text-sm font-medium ${className}`}
    >
      {children}
    </button>
  );
}
