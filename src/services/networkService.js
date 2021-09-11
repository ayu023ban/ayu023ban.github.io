export function getRequest(url) {
  const headers = {
    "X-Master-Key": process.env.REACT_APP_JSONBIN_MASTER_KEY,
  };
  return fetch(url, { method: "GET", headers: headers }).then((res) =>
    res.json()
  );
}
