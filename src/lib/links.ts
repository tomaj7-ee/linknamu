export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon: string;
};

export const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/tomaj7-ee", icon: "🐙" },
  { id: "blog", title: "블로그", url: "https://daum.net", icon: "🖊️" },
  { id: "email", title: "이메일", url: "mailto:tomaj7@gmail.com", icon: "📮" },
];

export const LINK_IDS = links.map((l) => l.id);
