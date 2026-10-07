import type { Accent } from './accents';
import data from './ventures.json';

export type Venture = {
  id: string;
  name: string;
  img: string;
  /** Matches each venture page's own colour */
  accent: Accent;
  /** One line, for the home-page slider */
  blurb: string;
  /** Fuller copy, for the ventures index */
  description: string;
};

export const VENTURES = data as Venture[];
