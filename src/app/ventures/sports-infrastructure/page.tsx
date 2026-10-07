'use client';

import VentureTemplate, {
  type VentureData,
} from '@/app/components/site/VentureTemplate';
import content from './content.json';

export default function SportsInfrastructurePage() {
  return <VentureTemplate data={content as VentureData} />;
}
