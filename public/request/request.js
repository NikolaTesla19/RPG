const url = 'http://bloodforest.social-server.online/'
const requestTry = async (uri, body) => {
  try {
    let response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    let result = await response.json();
    return result
  } catch (e) {
    return 'error'
  }
}
const requestPOST = async (uri, body) => {
  let response = await requestTry(uri, body);
  if (response === 'error') {
    alert('Сервер недоступен попробуйте позже');
    window.location.href = url
  } else {
    return response
  }
}
