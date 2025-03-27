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
function addItems(name, imageUrl, weather, token) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}
function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

function removeCardLike(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function addCardLike(id, token) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export { getItems, addItems, deleteItem, removeCardLike, addCardLike };
