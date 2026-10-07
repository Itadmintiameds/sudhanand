'use client';

import VentureTemplate, {
  type VentureData,
} from '@/app/components/site/VentureTemplate';

const data: VentureData = {
  accent: 'green',
  eyebrow: 'Sports infrastructure',
  title: 'Experience the thrill of the *game*',
  intro:
    'Modern facilities, expert coaching and programmes built for every age and skill level.',
  heroImage: '/hero/sports.jpg',
  statement:
    'Sport builds more than fitness. It builds the habits — showing up, working together, losing well — that people carry into everything else.',
  stats: [
    ['20+', 'sports activities'],
    ['10M+', 'satisfied customers'],
    ['80+', 'expert trainers'],
  ],
  chips: [
    'Basketball',
    'Football',
    'Badminton',
    'Tennis',
    'Cricket',
    'Strength & conditioning',
    'Youth academies',
  ],
  companies: [
    {
      logo: '/sports-page/ARC 1.png',
      name: 'ARC Sportzone',
      href: 'https://www.arcsportzone.com/',
      desc: "Mysore's premier destination for sport, fitness and community. More than a sports club, ARC offers world-class facilities for basketball, football, badminton, tennis, cricket and more. With expert coaches and programmes focused on skill development, teamwork, endurance and sportsmanship, ARC caters to all ages and skill levels — a place where goals are set, friendships are made and victories are celebrated.",
    },
  ],
  dividerImage: '/sports-div.png',
};

export default function SportsInfrastructurePage() {
  return <VentureTemplate data={data} />;
}
