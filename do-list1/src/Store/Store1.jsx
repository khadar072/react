import {create} from 'zustand'

const useStoreCount= create((set)=>({
    counts:[],
    Add: (inp)=>set((state)=>({
            counts:[...state.counts,inp]
    })),
    Delete: (index)=>set((state)=>({
        counts:state.counts.filter((_,i)=>i!==index)

    }))
}))
export default useStoreCount