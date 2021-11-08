import { makeObservable, observable, computed } from 'mobx';

class Store{
  list = [];
  filter = "";
  selectedItem = null;

  constructor(){
    makeObservable(this, {
      list: observable,
      filter: observable,
      selectedItem: observable,
      filteredList: computed,
    });
  }

  get filteredList() {
    console.log("filteredList");
    let it= this.list
      .filter(({ name }) =>
        name.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
      );
    console.log(it);

    return it;
  }

  setList(list){
    this.list = list;
  }
  setFilter(filter){
    this.filter = filter;
  }
  setSelected(selectedItem){
    this.selectedItem = selectedItem;
  }
}

const store = new Store();

fetch("/list.json")
    .then(resp => resp.json())
    .then((list) => store.setList(list));

export default store;

// import create from 'zustand'

// const useStore = create(set => ({
//   list: [],
//   filter: "",
//   selectedItem: null,
//   setList: (list) => 
//     set((state) => ({
//       ...state,
//       list,
//     })),
//   setFilter: (filter) => 
//     set((state) => ({
//       ...state,
//       filter,
//     })),
//   setSelected: (selectedItem) => 
//     set((state) => ({
//       ...state,
//       selectedItem,
//     })),
// }));

// export default useStore;