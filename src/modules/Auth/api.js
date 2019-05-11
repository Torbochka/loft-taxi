export const getUserInfo = (username, password) =>
  fetch(
    `https://loft-taxi-remix.glitch.me/auth?username=${username}&password=${password}`
  ).then(response => response.json());
