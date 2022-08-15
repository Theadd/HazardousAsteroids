import create from 'zustand'
import { AsteroidsApiRequest, AsteroidsApiResponse } from '../pages/HazardousAsteroidsPage/types'
import { createAsteroidsUri } from '../lib/api-utils'

export interface AsteroidsApiStore {
  isFetching: boolean
  request: AsteroidsApiRequest
  response: AsteroidsApiResponse
  fetch: (params: Partial<AsteroidsApiRequest>) => void
}

let controller: any = null

const useAsteroidsApiStore = create<AsteroidsApiStore>((set, get) => ({
  
  isFetching: false,

  request: {
    startDate: null,
    endDate: null,
    planet: '',
    pageIndex: 0,
    pageSize: 5
  },

  response: {
    pageIndex: 0, 
    pageSize: 5,
    count: 0,
    data: []
  },

  fetch: async (params: Partial<AsteroidsApiRequest>) => {
    if (controller == null)
      controller = new AbortController()
      
    if (get().isFetching) {

      controller.abort()
      controller = new AbortController()
    }
    set({ isFetching: true })

    const requestParams = { ...get().request, ...params }

    try {
      const resource = await fetch(createAsteroidsUri(requestParams), {
        signal: controller.signal
      })

      if (resource.status === 200) {
        set({ 
            request: requestParams,
            response: await resource.json()
        })
      }
    } catch (err: any) {

      if (err.name !== 'AbortError') {
        // if fetch fails due to a controlled abort, we don't reset the `isFetching` flag 
        // since a new fetch operation has already started, otherwise, we do.
        set({ isFetching: false })
      }
      return
    }

    set({ isFetching: false })
  }

}))

export { useAsteroidsApiStore }
