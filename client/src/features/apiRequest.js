// Here I create a reusable hook that will be used to send request to the API
const apiRequest = async (url = "", options = null, error = null) => {
  try {
    // Fetch the data from the api
    // If the response is not ok throw the error
    const response = await fetch(url, options);
    if (!response.ok) throw Error("Please reload the app");
    // Catch the error
  } catch (err) {
    error = err.message;
    // Finally return the error
  } finally {
    return error;
  }
};

export default apiRequest;
