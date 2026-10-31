type LinkCardProps = {
  title: string;
  url: string;
  icon: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, icon, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex items-center gap-4 rounded-3xl border border-white/60 bg-white/40 px-5 py-4 shadow-[0_8px_32px_rgba(180,110,70,0.12)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/55 active:scale-[0.98]"
    >
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      <span className="flex-1 text-base font-medium tracking-tight">{title}</span>
      <span className="text-xs tabular-nums text-stone-500">{count}회</span>
    </a>
  );
}
