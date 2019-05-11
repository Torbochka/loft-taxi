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

const updateState = data => {
  const stringData = window.localStorage.getItem('state');
  let updateData;
  if (stringData === null) {
    updateData = data;
  } else {
    updateData = { ...JSON.parse(stringData), ...data };
  }
  // Обновляем данные
  window.localStorage.setItem('state', JSON.stringify(updateData));
};

export { loadState, updateState };
