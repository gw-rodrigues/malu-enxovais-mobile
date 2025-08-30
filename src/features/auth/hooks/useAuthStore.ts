import { supabase } from '@/lib/supabase'
import { create } from 'zustand'

export const AuthUserRole = {
  ADMIN: 'admin',
  DRIVER: 'driver',
  MANAGER: 'manager',
  PRODUCER: 'producer',
} as const

export type AuthUserRoleValues =
  (typeof AuthUserRole)[keyof typeof AuthUserRole]

export interface AuthUser {
  id: string
  email?: string
  role: AuthUserRoleValues
  fullName: string
  isActive: boolean
  avatarUrl: string
}

type AuthState = {
  user: AuthUser | null
  isLoading: boolean
  authError: boolean
  signIn: (email: string, password: string) => Promise<AuthUser | null>
  signOut: () => Promise<void>
  initAuthListener: () => () => void
  getUserRole: () => AuthUserRoleValues | null
  hasRole: (roleToCheck: AuthUserRoleValues) => boolean
  isAuthenticated: () => boolean
}

export const isValidRole = (role: string): role is AuthUserRoleValues =>
  Object.values(AuthUserRole).includes(role as AuthUserRoleValues)

const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  authError: false,

  signIn: async (email, password) => {
    set({ isLoading: true, authError: false })
    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        set({ authError: true })
        return null
      }

      if (authData.user) {
        const meta = authData.user.user_metadata || {}
        const currentUser = {
          id: authData.user.id,
          email: authData.user.email,
          role: meta.role,
          fullName: meta.fullName,
          isActive: meta.isActive,
          avatarUrl: meta.avatarUrl,
        }
        set({ user: currentUser })
        return currentUser
      }
      return null
    } finally {
      set({ isLoading: false })
    }
  },

  signOut: async () => {
    set({ isLoading: true })
    try {
      await supabase.auth.signOut()
      set({ user: null })
    } finally {
      set({ isLoading: false })
    }
  },

  initAuthListener: () => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const meta = session.user.user_metadata || {}
        set({
          user: {
            id: session.user.id,
            email: session.user.email,
            role: meta.role,
            fullName: meta.fullName,
            isActive: meta.isActive,
            avatarUrl: meta.avatarUrl,
          },
        })
      } else {
        set({ user: null })
      }
    })

    return () => subscription?.unsubscribe()
  },

  getUserRole: (): AuthUserRoleValues | null => {
    const { user } = get()
    return user?.role && isValidRole(user.role) ? user.role : null
  },

  hasRole: (roleToCheck: AuthUserRoleValues): boolean => {
    const { isAuthenticated, user } = get()
    const role = user?.role
    return !!(
      isAuthenticated() &&
      role &&
      isValidRole(role) &&
      role === roleToCheck
    )
  },

  isAuthenticated: (): boolean => {
    return !!get().user
  },
}))

export default useAuthStore
