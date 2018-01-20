const getKeyFromLS = () => {
  const userKey = JSON.parse(localStorage.getItem('backendybox-token-999'));
  return userKey;
}

export default getKeyFromLS;