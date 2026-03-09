import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useDetailPackageStore = create(
    persist(
        (set) => ({
            selectedPackage: [],

            setSelectedPackage: (pack) => set({ selectedPackage: pack }),
        }),
        {
            name: 'detail-package-storage', // key in localStorage
        }
    )
)