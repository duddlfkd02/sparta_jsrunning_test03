// 3. PromiseAll 다뤄보기 (빈칸 채우기)

// 세 개의 setTimeout 비동기 함수를 각각 직렬, 병렬로 호출하는 코드입니다.
// 아래의 코드를 보고 < 빈칸 > 부분을 각각 채워주시고, 그렇게 생각하는 이유도 내용으로 적어주세요.
// (총 빈칸 3개)


function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 Complete");
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 Complete");
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 Complete");
        }, 3000);
    });
}

async function runTasksSequential() {
    console.time("Sequential");
    try {
        const result1 = await task1();
        console.log(result1);
        const result2 = await task2();
        console.log(result2);
        const result3 = await task3();
        console.log(result3);
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd("Sequential");

    // 예상되는 대략적인 시간과 그 이유 < 약 4초, 1초뒤부터 task1이 나오므로 대략 4초 정도의 시간이 걸린다.>
}

async function runTasksParallel() {
    console.time("Parallel");
    try {
        // 병렬로 promise들을 한 번에 처리하는 코드
        const results = await Promise.all(
            [task1(), task2(), task3()]
        );
        results.forEach((result) => console.log(result));
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd("Parallel");
    // 예상되는 대략적인 시간과 그 이유 < 약 3초, 동시에 처리하고 한번에 보여주기 때문에 3초 후에 task1,2,3 함수들의 결과값이 보여집니다. >
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
