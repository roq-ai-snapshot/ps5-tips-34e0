import { GameInterface } from 'interfaces/game';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TipInterface {
  id?: string;
  title: string;
  description?: string;
  game_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  game?: GameInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TipGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  game_id?: string;
  user_id?: string;
}
