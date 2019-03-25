import {User} from './user';

export interface CarDTO {

  id: number;
  brand?: string;
  model?: string;
  creation: Date;
  user: User | number;
}
