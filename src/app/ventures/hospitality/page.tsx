'use client';

import VentureTemplate, {
  type VentureData,
} from '@/app/components/site/VentureTemplate';

const data: VentureData = {
  accent: 'amber',
  eyebrow: 'Warm hospitality',
  title: 'A world of comfort and *care*',
  intro:
    'A boutique hotel and open-air event lawns, built around the oldest idea in hospitality: you are looked after.',
  heroImage: '/hero/hospitality.jpg',
  heroPosition: '55% 50%',
  statement:
    'A good hotel is not a list of amenities. It is the feeling that someone was expecting you, and thought about your stay before you arrived.',
  stats: [
    ['3+', 'venues and expanding'],
    ['1L+', 'satisfied guests'],
    ['80+', 'hospitality team members'],
  ],
  chips: [
    'Boutique rooms',
    'Weddings & receptions',
    'Corporate events',
    'Intimate gatherings',
    '24/7 room service',
    'Business & leisure',
  ],
  companies: [
    {
      name: 'Whispering Green Lawn',
      desc: 'Whispering Green Lawn is a premium outdoor event destination spread across 13,000 sq. ft., designed to bring elegance and warmth to every celebration. From weddings, receptions, and engagement ceremonies to birthdays and corporate events, the spacious lawn offers a versatile setting for memorable occasions. With its refined ambience and beautiful open space, Whispering Green Lawn creates the perfect backdrop for celebrations that leave a lasting impression.',
    },
    {
      name: 'Utsava Lawn',
      desc: 'Utsava Lawn is a cozy and inviting outdoor space, perfect for intimate gatherings and special occasions. Ideal for kitty parties, birthday celebrations, small get-togethers, open-air board meetings, and corporate gatherings, the lawn offers a comfortable and relaxed setting for meaningful moments. With its pleasant outdoor ambience and versatile space, Utsava Lawn is a great choice for hosting memorable events on a smaller scale.',
    },
    {
      logo: '/hospitality-page2/FOUR SEASONS 2.png',
      name: 'Sudhanand Four Seasons, Mysore',
      href: 'https://sudhanandfourseasons.com/',
      desc: 'A deluxe boutique hotel in Mysore offering luxury, comfort and exceptional service. Located near Mysore Palace and Nexus Mall, it suits both leisure and business travellers. Stylish rooms provide a serene environment, with complimentary Wi-Fi, 24/7 room service and in-house dining held to the highest standards of hospitality.',
    },
  ],
  dividerImage: '/hospi-div.png',
};

export default function HospitalityPage() {
  return <VentureTemplate data={data} />;
}
