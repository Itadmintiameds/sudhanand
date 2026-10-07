'use client';

import VentureTemplate, {
  type VentureData,
} from '@/app/components/site/VentureTemplate';
import content from './content.json';

export default function TechnologyPage() {
  return <VentureTemplate data={content as VentureData} />;
}
