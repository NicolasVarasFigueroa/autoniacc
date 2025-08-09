interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
export const Button = ({ onClick, children, className = "", type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative px-6 py-3 rounded-full outline-none cursor-pointer overflow-hidden
                  border border-transparent bg-primary text-[rgb(var(--ink-inverse))]
                  transition-transform duration-300 hover:scale-[1.03]
                  focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]
                  ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[rgb(var(--accent))]/20 blur-md opacity-0 hover:opacity-100 transition" />
    </button>
  );
};
