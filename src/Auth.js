export const isAuthenticated = () => {
  if (localStorage.getItem('companyId')) {
    return true;
  }
  return false;
};
