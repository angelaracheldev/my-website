import RightContent from './components/RightContent';
import LeftContent from './components/LeftContent';

export const metadata = {
  title: "Angela Rachel",
  description: "Personal website of Angela – a full-stack developer exploring frontend and DevOps.",
  keywords: ["Angela Rachel", "Developer", "Full-Stack", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Angela" }],
  creator: "Angela Rachel",
  openGraph: {
    title: "Angela Rachel",
    description: "Full-stack developer exploring frontend and DevOps.",
    url: "https://yourdomain.com",
    siteName: "Angela's Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // Optional
        width: 1200,
        height: 630,
        alt: "Angela's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angela Rachel",
    description: "Personal site of Angela – Developer & Explorer",
    images: ["https://yourdomain.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // or .png
  },
};

export default function Home() {

  // Example: src/app/page.tsx



  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0'>
    <div className="lg:flex lg:justify-between lg:gap-4">
      <LeftContent/>
      <RightContent />
    </div>
    </div>
  );
}