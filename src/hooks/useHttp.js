async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something wnet wrong failed to send request"
    );
  }

  return resData;
}

export default function useHttp() {
  async function sendRequest() {
    const resData = sendHttpRequest();
  }
}
