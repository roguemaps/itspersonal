export interface ResumeSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function ResumeSection({
  title,
  description,
  children,
}: ResumeSectionProps) {
  return (
    <div className="flex w-full items-left justify-center flex-col gap-4">
      <div className="flex items-left justify-left flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-lg">{description}</p>}
        {children}
      </div>
    </div>
  );
}
