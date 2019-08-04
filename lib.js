class Library {
  constructor() {

  }

  getData = (url) => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
          resolve(JSON.parse(xhr.responseText));
        }
      }
      xhr.send();
    });
  }

  postData = (url, data) => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('POST', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          resolve(xhr.responseText);
        }
      }
      xhr.setRequestHeader('Content-type',
        'application/json');
      xhr.send(JSON.stringify(data));
    });
  }

}