import getKeyFromLS from '../../getKeyFromLS';

const changeIdea = async (id, title, body, quality) => {
  const updatedIdea = await fetch('http://localhost:3000/api/v1/messages/', {
    method: 'PUT',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id,
      title: title,
      body: body,
      quality: quality
    })
  });
  const jsonUpdatedIdea = await updatedIdea.json();

  return jsonUpdatedIdea;
};

export default changeIdea;