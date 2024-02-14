import fetch from 'node-fetch';

export function getRequest(url) {
  const headers = {
    "X-Master-Key": process.env.REACT_APP_JSONBIN_MASTER_KEY,
    "X-Bin-Meta": false,
  };
  return fetch(url, { method: "GET", headers: headers }).then((res) =>
    {
      if(res.status !== 200){
        throw new Error(`Error fetching data with code ${res.status}`);
      }
      return res.json()
    }
  );
}
