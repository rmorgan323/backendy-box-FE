import getKeyFromLS from '../../getKeyFromLS';

const getUser = async () => {
  const user = await fetch('https://backendy-box.herokuapp.com/api/v1/users/', {
    method: 'GET',
    headers: {
      "x-token": getKeyFromLS(),
      "Content-Type": "application/json"
    }
  });
  const jsonUser = await user.json();
  
  return jsonUser[0];
}

export default getUser;