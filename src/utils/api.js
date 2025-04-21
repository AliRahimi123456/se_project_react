import { BASE_URL } from "../utils/constants";

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
  return request(`${BASE_URL}/items`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
``;

// Function to add a new item
function addItems(name, imageUrl, weather, token) {
  return request(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}
function deleteItem(id, token) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

// function deleteItem(cardId, token) {
//   if (!token) {
//     return Promise.reject("Error: Missing authentication token.");
//   }

//   return fetch(`${baseUrl}/items/${cardId}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${token}`, // Ensure token is included
//       "Content-Type": "application/json",
//     },
//   }).then(checkResponse);
// }
// function deleteItem(id) {
//   return fetch(`${baseUrl}/items/${id}`, {
//     method: "DELETE",
//   }).then(checkResponse);
// }

function removeCardLike(id, token) {
  return request(`${BASE_URL}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

function addCardLike(id, token) {
  return request(`${BASE_URL}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export { getItems, addItems, deleteItem, removeCardLike, addCardLike };
