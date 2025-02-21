const baseUrl = "http://localhost:3001";
//function to check the response status
export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

//General function for making API requests
function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

//function to get all  items
function getItems() {
  // console.log(getImtes);
  return request(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
``;

// Function to add a new item
function addItems(name, imageUrl, weather) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}
function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}
export { getItems, addItems, deleteItem };
