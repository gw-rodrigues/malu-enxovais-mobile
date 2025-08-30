import { create } from 'zustand'

type AuthState = {}

const useAuthStore = create<AuthState>((set) => ({}))

export default useAuthStore
