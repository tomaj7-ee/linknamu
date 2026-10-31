import LinkList from "@/componets/LinkList";
import Profile from "@/componets/Profile";
import { links } from "@/lib/links";

const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/150x150/orange/white",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-16">
      <Profile
        name={profile.name}
        bio={profile.bio}
        imageUrl={profile.imageUrl}
      />
      <LinkList links={links} />
    </main>
  );
}
