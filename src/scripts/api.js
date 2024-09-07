const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-21",
    headers: {
      authorization: "e4634462-bca4-4792-88d7-65fac760a5d5",
      "Content-Type": "application/json",
    },
};

const methods = {
    post: 'POST', 
    get: 'GET', 
    put: 'PUT', 
    patch: 'PATCH', 
    delete: 'DELETE', 
    head: 'HEAD',
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  };

  return Promise.reject(`Ошибка : ${res.status}`);
};

export const getUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: methods.get,
    headers: config.headers,
  })
    .then(handleResponse);
};

export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: methods.get,
    headers: config.headers,
  })
    .then(handleResponse);
};

export const editUser = (userName, userDescription) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: methods.patch,
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userDescription,
    }),
  })
    .then(handleResponse);

};

export const addCards = (cardName, cardLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: methods.post,
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    }),
  })
    .then(handleResponse);
};

export const deleteCards = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: methods.delete,
    headers: config.headers,
  })
    .then(handleResponse);
};

export const likeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: methods.put,
    headers: config.headers,
  })
    .then(handleResponse);
};

export const dislikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: methods.delete,
    headers: config.headers,
  })
    .then(handleResponse);
};

export const updateAvatar = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: methods.patch,
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  })
    .then(handleResponse);
};