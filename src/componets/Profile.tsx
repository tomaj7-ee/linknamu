type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="size-32 overflow-hidden rounded-full bg-orange-200 ring-4 ring-white/80 shadow-[0_12px_32px_rgba(180,110,70,0.3),inset_0_-4px_10px_rgba(0,0,0,0.08)]">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={`${name} 프로필 사진`}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-4xl font-bold text-orange-700">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-600">
        {bio}
      </p>
    </header>
  );
}
