import { AchievementInterface } from 'interfaces/achievement';
import { TipInterface } from 'interfaces/tip';
import { TrickInterface } from 'interfaces/trick';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  name: string;
  release_date?: any;
  developer?: string;
  publisher?: string;
  genre?: string;
  rating?: number;
  created_at?: any;
  updated_at?: any;
  achievement?: AchievementInterface[];
  tip?: TipInterface[];
  trick?: TrickInterface[];

  _count?: {
    achievement?: number;
    tip?: number;
    trick?: number;
  };
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  developer?: string;
  publisher?: string;
  genre?: string;
}
