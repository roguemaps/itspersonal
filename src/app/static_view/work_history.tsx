export interface WorkHistoryProps {
  company: string;
  role: string;
  duration: string;
  children?: React.ReactNode;
}

export function WorkHistory({
  company,
  role,
  duration,
  children,
}: WorkHistoryProps) {
  return (
    <div className="flex flex-col gap-4 mb-8 pb-8 border-b border-gray-300">
      <h2 className="text-3xl font-bold">{company}</h2>
      <p>
        <strong>{role}</strong> - <em>{duration}</em>
      </p>
      {children}
    </div>
  );
}
