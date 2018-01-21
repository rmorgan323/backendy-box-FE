import getKeyFromLS from '../../getKeyFromLS';

const addIdea = async (title, body, author, author_id, quality) => {
  const idea = await fetch('https://backendy-box.herokuapp.com/api/v1/messages/', {
    method: 'POST',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: body,
      author: author,
      author_id: author_id,
      quality: quality
    })
  });
  const jsonIdea = await idea.json();
  return jsonIdea;
}

export default addIdea;