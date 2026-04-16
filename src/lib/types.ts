export type BowType = 'Longbow' | 'Recurve';

export type StringMaterial = 'Dacron B50' | 'Fast Flight' | 'Dyneema' | '8125G';

export interface OrderFormData {
  // Contact
  name: string;
  email: string;
  phone: string;
  // Bow details
  bowType: BowType;
  amoLength: string;
  // String specs
  numStrands: string;
  material: StringMaterial;
  // Colors
  primaryColor: string;
  secondaryColor: string;
  servingColor: string;
  // Options
  servingStyle: string;
  nockingPoint: boolean;
  // Notes
  notes: string;
}
