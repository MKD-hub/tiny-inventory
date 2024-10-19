export type item = {
  id?: number
  brand: string
  type: string
  quantity: number
  price: number
}

export type itemState = {
  items: item[]
  addItem: (item: item) => void
}
