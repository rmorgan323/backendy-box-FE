const idea = (store = [], action) => {
  switch (action.type) {
    case "IDEA_TO_STORE":
      const w = [...store, action.idea].sort((a, b) => b.id - a.id);
      
      return w;

    case "IDEAS_TO_STORE":
      const x = action.ideas.sort((a, b) => b.id - a.id)

      return x;

    case "REMOVE_IDEA":
      const currentStore = store;
      const newStore = currentStore.filter(item => {
        return item.id !== action.deletedIdea.id;
      });
      const y = newStore.sort((a, b) => b.id - a.id)

      return y;

    case "UPDATE_IDEA_IN_STORE":
      let updatedStore = store;
      const index = updatedStore.findIndex(item => {
        return item.id === action.updatedIdea.id;
      });
      const newUpdatedStore = [...updatedStore.slice(0, index), action.updatedIdea, ...updatedStore.slice(index + 1, updatedStore.length)]
      const z = newUpdatedStore.sort((a, b) => b.id - a.id)

      return z;

    default:
      return store;
  }
};

export default idea;