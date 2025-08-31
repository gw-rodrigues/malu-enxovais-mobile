import { create } from 'zustand'
import { Product } from '../types/Products'

type StoreState = {
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
  showSearchModal: boolean
  setShowSearchModal: (state: boolean) => void
  showAddProductModal: boolean
  setShowAddProductModal: (state: boolean) => void
  showUpdateStockModal: boolean
  setShowUpdateStockModal: (state: boolean) => void
  showProductsFiltersModal: boolean
  setShowProductsFiltersModal: (state: boolean) => void
  searchProductQuery: string
  setSearchProductQuery: (query: string) => void
}

const useProductsStore = create<StoreState>((set, get) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  showSearchModal: false,
  setShowSearchModal: (state) => set({ showSearchModal: state }),
  showAddProductModal: false,
  setShowAddProductModal: (state) => set({ showAddProductModal: state }),
  showUpdateStockModal: false,
  setShowUpdateStockModal: (state) => set({ showUpdateStockModal: state }),
  showProductsFiltersModal: false,
  setShowProductsFiltersModal: (state) =>
    set({ showProductsFiltersModal: state }),
  searchProductQuery: "",
  setSearchProductQuery: (query) => set({ searchProductQuery: query }),
}))

export default useProductsStore
