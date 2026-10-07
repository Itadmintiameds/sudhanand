'use client';

import VentureTemplate, {
  type VentureData,
} from '@/app/components/site/VentureTemplate';
import content from './content.json';

export default function HospitalityPage() {
  return <VentureTemplate data={content as VentureData} />;
}
