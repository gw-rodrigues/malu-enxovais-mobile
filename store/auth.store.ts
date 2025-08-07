import { supabase } from '@/lib/supabase'
import { Session } from '@supabase/supabase-js'
import { create } from 'zustand'

type AuthState = {
  isAuthenticated: boolean
  session: Session | null
  isLoading: boolean
  setIsAuthenticated: (value: boolean) => void
  setUser: (user: Session | null) => void
  setIsLoading: (value: boolean) => void
  fetchAuthenticatedUser: () => Promise<void>
  initAuthListenerWithCleanup: () => () => void
  signInWithEmail: (email: string, password: string) => Promise<void>
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  session: null,
  isLoading: true,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (session) => set({ session }),
  setIsLoading: (value) => set({ isLoading: value }),

  fetchAuthenticatedUser: async () => {
    set({ isLoading: true })

    try {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error('Error fetching session:', error)
        set({ isAuthenticated: !!data.session, session: null })
        return
      }
      set({
        session: data.session,
        isAuthenticated: !!data.session,
      })
    } catch (e) {
      console.log('Error fetching authenticated user:', e)
      set({ isAuthenticated: false, session: null })
    } finally {
      set({ isLoading: false })
    }
  },

  initAuthListenerWithCleanup: () => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      set({
        session: session,
        isAuthenticated: !!session,
      })
    })
    return () => {
      data.subscription?.unsubscribe()
    }
  },

  signInWithEmail: async (email, password) => {
    set({ isLoading: true })

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error('Error signing in:', error)
        set({ isAuthenticated: false, session: null })
        throw error
      }

      set({ isAuthenticated: true, session: data.session })
    } catch (e) {
      console.log('Error during sign-in:', e)
      set({ isAuthenticated: false, session: null })
      throw e
    } finally {
      set({ isLoading: false })
    }
  },
}))

export default useAuthStore
