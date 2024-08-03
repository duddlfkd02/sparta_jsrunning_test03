// 2. Async / Await 다뤄보기

// 위 1번 문제에서 다루었던 비동기 처리를 `async`, `await` 키워드를 사용하여 코드를 수정해서 작성해주세요.

function getData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) {
        resolve("성공");
      } else {
        reject("실패");
      }
    }, 3000);
  });
}

async function callGetData(url) {
  try {
    const result = await getData(url);
    console.log(result);
  } catch (error) {
    consol.log(error);
  }
}

callGetData(API_URL); //성공한 url
callGetData(WRONG_URL); //잘못된 url > error 뜸
