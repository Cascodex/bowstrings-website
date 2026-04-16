export type BowType = 'Longbow' | 'Recurve';

export type StringMaterial = 'BCY D97';

export type ServingColor = 'White/Black' | 'Red/Black';

export interface OrderFormData {
  // Contact
  name: string;
  email: string;
  phone: string;
  // Bow details
  bowType: BowType;
  amoLength: string;
  // String specs
  material: StringMaterial;
  // Colors
  primaryColor: string;
  secondaryColor: string;
  servingColor: ServingColor;
  // Options
  nockingPoint: boolean;
  // Shipping
  shippingName: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  // Notes
  notes: string;
}
