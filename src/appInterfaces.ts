export type TLabel = 'available' | 'reserved' | 'sold';

export interface IAddHouseFormData {
  address: string;
  floorsNumber: number;
  label: TLabel;
  description: string;
}

export interface IHouse extends IAddHouseFormData {
  id: string;
}
