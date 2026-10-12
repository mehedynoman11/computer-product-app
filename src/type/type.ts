export interface IProducts {
  _id: string
  name: string
  slug: string
  category: string
  brand: string
  currentPrice: number
  previousPrice: number
  trend: string
  trendPercent: number
  image: string
  unit: string
  description: string
  specs: Specs
  stores: Store[]
  priceHistory: PriceHistory[]
}

export interface Specs {
  processor: string
  ram: string
  storage: string
  display: string
  camera: string
  battery: string
}

export interface Store {
  name: string
  price: number
  url: string
}

export interface PriceHistory {
  date: string
  price: number
}
