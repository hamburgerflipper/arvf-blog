import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Angel Rafael Valdez Fernandez',
    template: '%s | Angel Rafael Valdez Fernandez'
  },
  description: 'Hey yall, this is my portfolio, blog, and personal website.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Added font-serif here so every page automatically uses the serif font */}
      <body className="antialiased tracking-tight font-serif bg-white dark:bg-zinc-950 text-gray-900 dark:text-zinc-200">
        <div className="min-h-screen flex flex-col pt-0 md:pt-8 p-8">
          {/* 2. Changed max-w-[60ch] to max-w-6xl so the content expands across the screen */}
          <main className="max-w-4xl mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'spotify', url: 'https://open.spotify.com/user/angel1702027?si=6674d45e6f2c4fb6' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/angel-rafael-valdez-fernandez/?isSelfProfile=true' },
    { name: 'github', url: 'https://github.com/hamburgerflipper' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}