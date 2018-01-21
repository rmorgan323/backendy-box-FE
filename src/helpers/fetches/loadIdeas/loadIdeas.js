import getKeyFromLS from '../../getKeyFromLS';

const getIdeas = async () => {
  const ideas = await fetch('http://localhost:3000/api/v1/messages', {
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