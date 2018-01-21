import getKeyFromLS from '../../getKeyFromLS';

const puntIdea = async (id) => {
  const deletedIdea = await fetch(`https://backendy-box.herokuapp.com/api/v1/messages/${id}`, {
    method: 'DELETE',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonDeletedIdea = await deletedIdea.json();
  return jsonDeletedIdea;
}

export default puntIdea;