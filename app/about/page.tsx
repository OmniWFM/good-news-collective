import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | Good News Collective',
  description: 'Learn about our mission to make Jesus known through the digital mission field. Who we are and why we do what we do.',
};

export default function AboutPage() {
  return <AboutClient />;
}