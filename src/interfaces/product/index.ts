import { OrderInterface } from 'interfaces/order';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  stock_level: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  organization?: OrganizationInterface;
  _count?: {
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
