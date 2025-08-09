import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const Info = ({ title, description, children }: InfoProps) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-[0_10px_30px_-12px_rgba(21,45,94,0.15)] relative overflow-hidden">
      <div className="rounded-xl p-[1px] brand-gradient w-max mb-3">
        <div className="rounded-xl bg-body p-3 text-heading-1">{children}</div>
      </div>
      <h2 className="text-heading-2 w-max font-semibold md:text-xl">{title}</h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
