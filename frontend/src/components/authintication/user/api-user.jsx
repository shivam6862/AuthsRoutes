const create = async (user) => {
  console.log(user);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/api/users`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (userId, credentials, signal) => {
  try {
    console.log("sending req", userId, credentials);
    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/api/users/${userId}`,
      {
        method: "GET",
        signal: signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials,
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const list = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/api/users`
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (userId, credentials, user) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/api/users/${userId}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials,
        },
        body: JSON.stringify(user),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (userId, credentials) => {
  try {
    let response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/api/users/${userId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials,
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, list, read, update, remove };
