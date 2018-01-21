import getKeyFromLS from '../../getKeyFromLS';

const getIdeas = async () => {
  const ideas = await fetch('https://backendy-box.herokuapp.com/api/v1/messages', {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonIdeas = await ideas.json();
  return jsonIdeas;
}

export default getIdeas;