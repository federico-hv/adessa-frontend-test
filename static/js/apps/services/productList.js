
const fetchItems = () => {
  const url = '/items';

  return fetch(url, { timeout: 15000 }).then((res) => {
    if (res.status !== 200) {
      throw new Error(`Error ${res.status}`);
    }
  
    return res.json();
  });
}

export {
  fetchItems
};