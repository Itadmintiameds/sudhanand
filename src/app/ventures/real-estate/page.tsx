'use client';

import VentureTemplate, {
  type VentureData,
} from '@/app/components/site/VentureTemplate';

const data: VentureData = {
  accent: 'teal',
  eyebrow: 'Infrastructure & real estate',
  title: 'Spaces built for the *long term*',
  intro:
    'Our real estate ventures focus on developing thoughtfully planned spaces that combine quality, functionality, and long-term value.',
  heroImage: '/hero/real-estate.jpg',
  heroPosition: '78% 10%',
  statement:
    'Through Stone Tower Constructions and Rock Solid Holdings, we are expanding our presence across construction, property development, and real estate solutions.',
  chips: [
    'Construction',
    'Property development',
    'Real estate solutions',
    'Planned spaces',
    'Quality & functionality',
    'Long-term value',
  ],
  companies: [
    {
      logo: '/real-estate/stone-tower.png',
      name: 'Stone Tower Constructions',
    },
    {
      logo: '/real-estate/rock-solid.png',
      name: 'Rock Solid Holdings Co., Ltd. — Thailand',
    },
  ],
  dividerImage: '/real-estate/divider.jpg',
};

export default function RealEstatePage() {
  return <VentureTemplate data={data} />;
}
