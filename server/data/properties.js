// Mock property data served by the /api/properties endpoints.
const properties = [
  {
    id: '1',
    name: 'Luxury Downtown Apartment',
    location: 'New York, NY',
    price: 450000,
    image:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    annualYield: 8.2,
    tokenPrice: 0.5,
    totalTokens: 1000,
    tokensSold: 650,
    status: 'Available',
  },
  {
    id: '2',
    name: 'Beachfront Villa',
    location: 'Miami, FL',
    price: 1200000,
    image:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    annualYield: 10.5,
    tokenPrice: 1.2,
    totalTokens: 1000,
    tokensSold: 1000,
    status: 'Sold Out',
  },
  {
    id: '3',
    name: 'Modern Office Building',
    location: 'Chicago, IL',
    price: 3500000,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    annualYield: 7.8,
    tokenPrice: 3.5,
    totalTokens: 1000,
    tokensSold: 300,
    status: 'Available',
  },
  {
    id: '4',
    name: 'Mountain Retreat',
    location: 'Aspen, CO',
    price: 875000,
    image:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80',
    annualYield: 9.1,
    tokenPrice: 0.875,
    totalTokens: 1000,
    tokensSold: 0,
    status: 'Coming Soon',
  },
  {
    id: '5',
    name: 'Urban Retail Space',
    location: 'Austin, TX',
    price: 680000,
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    annualYield: 8.7,
    tokenPrice: 0.68,
    totalTokens: 1000,
    tokensSold: 520,
    status: 'Available',
  },
  {
    id: '6',
    name: 'Historic Brownstone',
    location: 'Boston, MA',
    price: 1850000,
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80',
    annualYield: 6.9,
    tokenPrice: 1.85,
    totalTokens: 1000,
    tokensSold: 780,
    status: 'Available',
  },
];

module.exports = { properties };
