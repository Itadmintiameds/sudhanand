/** Single source for the group's contact details (modal, footer, mobile menu). */
export const CONTACT = {
  phone: '0821 428 0152',
  phoneHref: 'tel:08214280152',
  email: 'info@sudhanandgroup.com',
  emailHref: 'mailto:info@sudhanandgroup.com',
  addressLines: [
    'Dakshina Murthy Towers,',
    'Devanooru, Rajeevnagara 2nd Stage,',
    'Udayagiri, Mysore 570019',
  ],
  mapsUrl: 'https://maps.app.goo.gl/TYASLtgbvsTEduedA',
} as const;

export const SOCIALS = [
  { label: 'LinkedIn', handle: '@SudhanandGroup', href: 'https://www.linkedin.com/company/sudhanand-group/' },
  { label: 'Instagram', handle: '@life_at_sudhanand', href: 'https://www.instagram.com/life_at_sudhanand?igsh=dnV6eHE4a3Uwanh5' },
  { label: 'Facebook', handle: '@SudhanandGroup', href: 'https://www.facebook.com/share/1EBYjjGogu/' },
] as const;
