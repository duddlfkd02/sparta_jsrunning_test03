// 2. Async / Await 다뤄보기

// 위 1번 문제에서 다루었던 비동기 처리를 `async`, `await` 키워드를 사용하여 코드를 수정해서 작성해주세요.

async function fetchData(url) {
    try {
        const data = await getData(url);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}














