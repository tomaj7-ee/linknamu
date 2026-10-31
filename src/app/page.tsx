import LinkCard from "@/componets/LinkCard";
import Profile from "@/componets/Profile";

const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/150x150/orange/white",
};

const links = [
  { title: "깃허브", url: "https://github.com/tomaj7-ee", icon: "🐙" },
  { title: "블로그", url: "https://daum.net", icon: "🖊️" },
  { title: "이메일", url: "mailto:tomaj7@gmail.com", icon: "📮" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-16">
      <Profile
        name={profile.name}
        bio={profile.bio}
        imageUrl={profile.imageUrl}
      />
      <section className="mt-12 grid grid-cols-3 gap-4">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </section>
    </main>
  );
}
