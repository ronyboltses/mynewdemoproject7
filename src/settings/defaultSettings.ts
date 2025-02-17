export const defaultSettings = {
  siteName: 'Construction Calculator Pro',
  logo: 'building',
  logoUrl: '',
  brandColor: '#2563eb',
  primaryColor: '#2563eb',
  secondaryColor: '#1e40af',
  accentColor: '#60a5fa',
  backgroundColor: '#f8fafc',
  textColor: '#1e293b',
  reportHeader: 'Construction Cost Estimation Report',
  reportFooter: 'Thank you for using our service',
  pricePerSqFt: 2500,
  laborCostPerDay: 1500,
  brickPrice: 30,
  cementPrice: 1200,
  steelPrice: 250000,
  plumbingCostPerSqFt: 200,
  electricalCostPerSqFt: 300,
  mortarRatio: '1:4',
  sandPrice: 5000,
  resources: [],
  adminCredentials: {
    username: 'admin',
    password: 'admin'
  },
  assumptions: {
    bricksPerSqFt: 8,
    cementBagsPerSqFt: 0.4,
    steelPerSqFt: 0.007,
    laborProductivityPerDay: 100,
    mortarPerBrick: 0.001,
    sandPerBag: 4.5,
    builtUpAreaFactor: 0.75,
    largePlotFactor: 0.5,
    materialCostFactor: 0.7,
    laborCostFactor: 0.3,
    foundationCostPerSqFt: 500,
    flooringCostPerSqFt: 150,
    paintingCostPerSqFt: 15,
    plasteringCostPerSqFt: 30,
    windowCost: 10000,
    doorCost: 8000,
    kitchenBaseCost: 50000,
    waterTankCost: 40000,
    parkingCost: 150000,
    fullEscapePremium: 0.1,
    basementCost: 200000,
    garageCost: 150000,
    timelineBaseCost: 50000,
    timelineFactorPerMonth: 0.02,
    locationFactors: {
      urban: 1.2,
      suburban: 1.0,
      rural: 0.8
    },
    qualityFactors: {
      standard: 1.0,
      premium: 1.3,
      luxury: 1.6
    }
  }
};