interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: Props) => {
  return (
    <div className="relative group h-full">
      <div className="p-[1px] rounded-3xl brand-gradient h-full transition-transform duration-300 group-hover:scale-[1.03]">
        <div className="bg-box-bg border border-[color:rgba(0,0,0,0.02)] rounded-3xl
                        shadow-lg shadow-[0_10px_30px_-12px_rgba(21,45,94,0.15)] p-6 flex flex-col h-full">
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[rgb(var(--primary))]/10 text-primary text-xl">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-heading-1">{title}</h3>
          <p className="mt-2 text-sm text-heading-3">{description}</p>
        </div>
      </div>
    </div>
  );
};
