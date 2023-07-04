const mapping: Record<string, string> = {
  campaigns: 'campaign',
  orders: 'order',
  organizations: 'organization',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
