import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface ModuleProdiaStore {

  // Prodia Image Generation settings

  prodiaApiKey: string;
  setProdiaApiKey: (apiKey: string) => void;

  prodiaModelId: string;
  setProdiaModelId: (modelId: string) => void;

  prodiaNegativePrompt: string;
  setProdiaNegativePrompt: (negativePrompt: string) => void;

  prodiaSteps: number;
  setProdiaSteps: (steps: number) => void;

  prodiaCfgScale: number;
  setProdiaCfgScale: (cfgScale: number) => void;

  prodiaSeed: number | null;
  setProdiaSeed: (seed: string) => void;

}

export const useModuleProdiaStore = create<ModuleProdiaStore>()(
  persist(
    (set) => ({

      // Prodia Image Generation settings

      prodiaApiKey: '',
      setProdiaApiKey: (prodiaApiKey: string) => set({ prodiaApiKey }),

      prodiaModelId: '',
      setProdiaModelId: (prodiaModelId: string) => set({ prodiaModelId }),

      prodiaNegativePrompt: '',
      setProdiaNegativePrompt: (prodiaNegativePrompt: string) => set({ prodiaNegativePrompt }),

      prodiaSteps: 25,
      setProdiaSteps: (prodiaSteps: number) => set({ prodiaSteps }),

      prodiaCfgScale: 7,
      setProdiaCfgScale: (prodiaCfgScale: number) => set({ prodiaCfgScale }),

      prodiaSeed: null,
      setProdiaSeed: (prodiaSeed: string) => set({ prodiaSeed: (prodiaSeed === '' || prodiaSeed === '-1') ? null : parseInt(prodiaSeed) ?? null }),

    }),
    {
      name: 'app-module-prodia',
    }),
);