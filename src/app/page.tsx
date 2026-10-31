import LinkCard from "@/componets/LinkCard";
import Profile from "@/componets/Profile";

const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
};

const links = [
  { title: "블로그", url: "https://example.com/blog", icon: "📝" },
  { title: "GitHub", url: "https://github.com", icon: "💻" },
  { title: "Instagram", url: "https://instagram.com", icon: "📷" },
  { title: "YouTube", url: "https://youtube.com", icon: "▶️" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-14">
      <Profile name={profile.name} bio={profile.bio} />
      <section className="mt-10 grid grid-cols-3 gap-3">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </section>
    </main>
  );
}
