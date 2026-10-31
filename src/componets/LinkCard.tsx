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
      className="flex aspect-square flex-col items-center justify-center gap-2 rounded-3xl border border-white/60 bg-white/40 p-3 shadow-[0_8px_32px_rgba(180,110,70,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/55 active:scale-[0.98]"
    >
      <span className="text-3xl" aria-hidden>
        {icon}
      </span>
      <span className="text-sm font-medium tracking-tight">{title}</span>
    </a>
  );
}
