import create from 'zustand'
import { AsteroidsApiRequest, AsteroidsApiResponse } from '../pages/HazardousAsteroidsPage/types'
import { createAsteroidsUri } from '../lib/api-utils'


export interface AsteroidsApiStore {
  request: AsteroidsApiRequest
  response: AsteroidsApiResponse
  fetch: (params: Partial<AsteroidsApiRequest>) => void
}

const useAsteroidsApiStore = create<AsteroidsApiStore>((set, get) => ({
  
  request: {
    startDate: null,
    endDate: null,
    planet: '',
    pageIndex: 0,
    pageSize: 10
  },

  response: {
    pageIndex: 0,
    pageSize: 10,
    count: 0,
    data: []
  },

  fetch: async (params: Partial<AsteroidsApiRequest>) => {
    const requestParams = { ...get().request, ...params }
    const resource = await fetch(createAsteroidsUri(requestParams))
    // const json = resource.json()
    console.log("updating store!!");
    set({ 
        request: requestParams,
        response: await resource.json()
    })
  }

}))

export { useAsteroidsApiStore }
