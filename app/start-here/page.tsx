import type { Metadata } from 'next';
import StartHereClient from './StartHereClient';

export const metadata: Metadata = {
  title: 'Start Here | Good News Collective',
  description: 'New to faith? Start here. Explore who Jesus is, what He offers, and how to take your next step in faith.',
};

export default function StartHerePage() {
  return <StartHereClient />;
}