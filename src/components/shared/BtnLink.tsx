interface BtnLinkProps { href: string; text: string; className?: string; }
export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full border border-transparent bg-primary
                  text-[rgb(var(--ink-inverse))] inline-flex items-center justify-center
                  transition-transform duration-300 hover:scale-[1.03]
                  focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]
                  ${className}`}
    >
      {text}
    </a>
  );
};
