import type { Metadata } from 'next';
import TestimonialsClient from './TestimonialsClient';

export const metadata: Metadata = {
  title: 'Stories of Faith | Good News Collective',
  description: 'Real stories of people who found Jesus through the digital mission field. God is moving online.',
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}