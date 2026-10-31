type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="size-32 overflow-hidden rounded-full bg-emerald-200 shadow-md">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={`${name} 프로필 사진`}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-4xl font-bold text-emerald-700">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-neutral-600">{bio}</p>
    </header>
  );
}
