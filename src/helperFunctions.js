const updateLocalStorage = userMemes => {
  localStorage.setItem('userMemes', JSON.stringify(userMemes));
};

export { updateLocalStorage };