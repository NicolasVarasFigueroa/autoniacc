// components/cards/Service.tsx

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service = ({ title, description, icon }: Props) => {
  return (
    <div className="relative group h-full">
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full transition-transform duration-300 hover:scale-105">
        <div
          className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
          p-6 flex flex-col h-full relative"
        >
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-violet-500/10 text-violet-500 text-xl">
            {icon}
          </div>

          <h3 className="text-lg font-semibold text-heading-1">{title}</h3>

          <p className="mt-2 text-sm text-heading-3">{description}</p>
        </div>
      </div>
    </div>
  );
};
