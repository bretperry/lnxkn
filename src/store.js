import create from 'zustand'

const useStore = create(set => ({
  list: [],
  filter: "",
  selectedItem: null,
  setList: (list) => 
    set((state) => ({
      ...state,
      list,
    })),
  setFilter: (filter) => 
    set((state) => ({
      ...state,
      filter,
    })),
  setSelected: (selectedItem) => 
    set((state) => ({
      ...state,
      selectedItem,
    })),
}));

export default useStore;