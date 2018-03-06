export interface Address {
  street?: string;
  city?: string;
  zip?: string;
  country?: string;
}

export interface Contact {
  id: number | string;
  name?: string;
  email?: string;
  phone?: string | string[];
  birthday?: string;
  website?: string;
  image?: string;
  address?: Address;
}
