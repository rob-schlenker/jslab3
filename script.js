let scores = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },
]

console.log(scores);

// 2

const addScore = (array, newname, newscore, newdate) => {
    let newStudent = {
        name: newname,
        score: newscore,
        date: newdate,
        passed: newscore >= 60,
    };
    array.push(newStudent);
};

addScore(scores, "Zack", 90, "2020-7-05");

console.log(scores);

// 3

const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1);
}

// 4

const deleteScoreByName = (array, name) => {
    const indexToRemove = array.findIndex((element) => {
        return element === name;
    });
    array.splice(indexToRemove, 1);
    return array;
}

deleteScoreByName(scores, "Jane");
console.log(scores);

// 5

const editScore = (array, index, score) => {
    let newScore = {
        score: score
    } index.passed: score >= 60,

        array.map(score, index);

}

// 6

const findScoreByName = (array, name) => {
    array.find((element) => element === name);
};

console.log(findScoreByName(scores, "Jill"));

// 7

const findLowestScore = (array) => {
    array.forEach((score)
    if (score < )
}

// 8

const findAverageQuizScore = (array) => {
    for (let score of array) =>
}

// 9

const filterScores = (array, property, value) => {
    array.filter((property) => value > 0)
}

// 10

const sortScoresAsc = (array) => {
    array.sort(score)
};

console.log(sortScoresAsc(scores));

// 11

const sortScoresDsc = (array) => {
    array.sort(score).reverse();
}

console.log(sortScoresDsc(scores));





