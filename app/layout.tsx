import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  metadataBase: new URL('https://angelrafaelvaldezfernandez.com'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Angel Rafael Valdez Fernandez',
    template: '%s | Angel Rafael Valdez Fernandez'
  },
  description: 'Personal website.',
  openGraph: {
    title: 'Angel Rafael Valdez Fernandez',
    description: 'Personal Website',
    url: 'https://angelrafaelvaldezfernandez.com',
    siteName: 'ARVF Personal Website',
    images: [
      {
        url: '/arvf_thumb.jpg',
        width: 1200,
        height: 630,
        alt: 'ARVF Personal Website'
      },
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'angelRafael Personal Website',
    description: 'Personal Website',
    images: ['/arvf_thumb.jpg']
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* Force dark mode globally by adding className="dark" */
    <html lang="en" className="dark">
      <body className="antialiased tracking-tight font-serif bg-zinc-950 text-zinc-200">
        <div className="min-h-screen flex flex-col pt-0 md:pt-8 p-8">
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
            className="text-zinc-400 hover:text-white transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}