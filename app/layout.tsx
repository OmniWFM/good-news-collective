import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Good News Collective | Making Jesus Known Through Digital',
  description: 'Good News Collective is a digital mission field ministry making Jesus known through the power of digital marketing.',
  keywords: ['digital ministry', 'Christian digital marketing', 'online evangelism', 'share the gospel online', 'digital mission field'],
  openGraph: {
    title: 'Good News Collective',
    description: 'Making Jesus known through the digital mission field.',
    url: 'https://www.goodnewscollective.com',
    siteName: 'Good News Collective',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good News Collective',
    description: 'Making Jesus known through the digital mission field.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        [main className="min-h-screen"]{children}[/main]
        <Footer />
      </body>
    </html>
  );
}