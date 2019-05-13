export const getAddressList = () =>
  fetch(`https://loft-taxi-remix.glitch.me/addressList`)
    .then(response => response.json())
    .catch(error => console.log(error));

export const getRoute = (from, to) =>
  fetch(
    `https://loft-taxi-remix.glitch.me/route?address1=${from}&address2=${to}`
  )
    .then(response => response.json())
    .catch(error => console.log(error));
