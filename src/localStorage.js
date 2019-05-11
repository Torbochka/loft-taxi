const loadState = () => {
  try {
    const stringData = window.localStorage.getItem('state');
    if (stringData === null) {
      return undefined;
    }
    return JSON.parse(stringData);
  } catch (e) {
    return undefined;
  }
};

const saveState = data => {
  window.localStorage.setItem('state', JSON.stringify(data));
};

export { loadState, saveState };
