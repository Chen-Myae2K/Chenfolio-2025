import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "express",
  "postgresql",
  "firebase",
  "vercel",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-start overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
