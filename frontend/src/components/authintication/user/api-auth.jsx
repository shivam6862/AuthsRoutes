const signin = async (user) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/auth/signin/`,
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

const reset = async (user) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/auth/reset`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user }),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const postResetPassword = async (user) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_URL}/auth/postnewpassword/`,
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

export { signin, reset, postResetPassword };
