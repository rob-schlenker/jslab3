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
    }
]

console.log(scores);

// 2

const addScore = (array, newName, newScore, newDate) => {
    let newStudent = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,
    };
    array.push(newStudent);
};

// or

// array.push({name:newname, score:newscore, date:newdate, passed: score >= 60})

addScore(scores, "Zack", 90, "2020-7-05");

console.log(scores);



// 3
// This one is a little confusing. I think it should be called deleteUser instead of deleteScore because
// it is not asking to remove just a score from an object.

const deleteScoreByIndex = (array, index) => {
    array.splice(index, 1);
}

// 4

const deleteScoreByName = (array, name) => {
    let index = array.findIndex(person => {
        return person.name === name
    });
    array.splice(index, 1)
}

deleteScoreByName(scores, "Jane");
console.log(scores);

// 5

const editScore = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
}

// 6

const findScoreByName = (array, name) => {
    return array.find(person => {
        return person.name === name;
    })
}

console.log(findScoreByName(scores, "Jill"));

// 7

const findLowestScore = (array) => {
    let lowestScore = array[0];
    array.forEach(person => {
        if (person.score < lowestScore.score) {
            lowestScore = person;
        }
    })
    return lowestScore.score;
}

// 8

const findAverageQuizScore = (array) => {
    let total = 0;
    for (let person of array) {
        total += person.score;
    }
    return total / array.length
}

// 9

const filterScores = (array, property, value) => {
    array.filter(person => {
        return person[property] === value;
    })
}

// 10

const sortScoresAsc = (array) => {
    return array.sort((element1, element2) => {
        return element1.score < element2.score ? 1 : -1
    });
};

console.log(sortScoresAsc(scores));

// 11

const sortScoresDsc = (array) => {
    return array.sort((element2, element1) => {
        return element2.score < element1.score ? 1 : -1
    });
};

console.log(sortScoresDsc(scores));





