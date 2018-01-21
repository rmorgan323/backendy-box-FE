import getUser from '../helpers/fetches/getUser/getUser';
import addIdea from '../helpers/fetches/addIdea/addIdea';
import getIdeas from '../helpers/fetches/loadIdeas/loadIdeas';
import puntIdea from '../helpers/fetches/puntIdea/puntIdea';
import changeIdea from '../helpers/fetches/changeIdea/changeIdea';

export const loadUser = () => async dispatch => {
  try {
    const user = await getUser();
    dispatch(userToStore(user));
  } catch (error) {
    window.location="https://backendy-box.e1.loginrocket.com/";
  }
};

export const userToStore = (user) => ({
  type: 'USER_TO_STORE',
  user
});

export const addNewIdea = (title, body, author, author_id, quality) => async dispatch => {
  try {
    const newIdea = await addIdea(title, body, author, author_id, quality);
    dispatch(ideaToStore(newIdea));
  } catch (error) {
    console.log(error);
  }
};

export const ideaToStore = (idea) => ({
  type: 'IDEA_TO_STORE',
  idea
});

export const loadIdeas = () => async dispatch => {
  try {
    const ideas = await getIdeas();
    dispatch(ideasToStore(ideas));
  } catch (error) {
    console.log(error);
  }
};

export const ideasToStore = (ideas) => ({
  type: 'IDEAS_TO_STORE',
  ideas
});

export const deleteIdea = (id) => async dispatch => {
  try {
    const deletedIdea = await puntIdea(id);
    dispatch(removeIdea(deletedIdea));
  } catch (error) {
    console.log(error);
  }
}

export const removeIdea = (deletedIdea) => ({
  type: 'REMOVE_IDEA',
  deletedIdea
});

export const updateIdea = (id, title, body, quality) => async dispatch => {
  try {
    const updatedIdea = await changeIdea(id, title, body, quality);
    dispatch(updateIdeaInStore(updatedIdea));
  } catch (error) {
    console.log(error)
  }
};

export const updateIdeaInStore = (updatedIdea) => ({
  type: 'UPDATE_IDEA_IN_STORE',
  updatedIdea
});



