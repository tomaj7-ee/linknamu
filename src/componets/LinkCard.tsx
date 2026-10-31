type LinkCardProps = {
  title: string;
  url: string;
  icon: string;
};

export default function LinkCard({ title, url, icon }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-95"
    >
      <span className="text-3xl" aria-hidden>
        {icon}
      </span>
      <span className="text-sm font-semibold">{title}</span>
    </a>
  );
}
