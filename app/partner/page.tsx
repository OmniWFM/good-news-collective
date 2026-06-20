import type { Metadata } from 'next';
import PartnerClient from './PartnerClient';

export const metadata: Metadata = {
  title: 'Partner With Us | Good News Collective',
  description: 'Join the mission. Partner with Good News Collective to fund digital evangelism and help reach millions online.',
  robots: { index: false, follow: true },
};

export default function PartnerPage() {
  return <PartnerClient />;
}