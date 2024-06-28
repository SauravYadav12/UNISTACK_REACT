export const getJwtToken = async () => {
  return localStorage.getItem("token");
};
