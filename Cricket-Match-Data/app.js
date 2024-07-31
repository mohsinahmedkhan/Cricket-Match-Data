var obj = {
    match1: {
        matchNumber: "Final T20 55 oF 55",
        date: "29 June",
        team1: "India",
        score1: "176/7(20)",
        team2: "South Afirca",
        score2: "169/8(20)",
        result: "IND Won by 7 runs",
        img1: "images/IND.png",
        img2: "images/SA.png",
    },
    match2: {
        matchNumber: "Semi-final T20 54 oF 55",
        date: "27 June",
        team1: "India",
        score1: "171/7(20)",
        team2: "England",
        score2: "103(16.4)",
        result: "IND Won by 68 runs",
        img1: "images/IND.png",
        img2: "images/ENG.png",
    },
    match3: {
        matchNumber: "Semi-final T20 53 oF 55",
        date: "27 June",
        team1: "Afghanistan",
        score1: "56(11.5)",
        team2: "South Afirca",
        score2: "60/1(8.5)",
        result: "SA Won by 9 wicket (67 balls left)",
        img1: "images/AFG.png",
        img2: "images/SA.png",
    },
    match4: {
        matchNumber: "Super Eight T20 52 oF 55",
        date: "25 June",
        team1: "Afganhistan",
        score1: "115/5(20)",
        team2: "Bangladesh",
        score2: "105(17.5/19)",
        result: "AFG Won by 8 runs (DLS method",
        img1: "images/AFG.png",
        img2: "images/BAN.png",
    },
    match5: {
        matchNumber: "Super Eight T20 51 oF 55",
        date: "24 June",
        team1: "India",
        score1: "205/5(20)",
        team2: "Australia",
        score2: "181/7(20)",
        result: "IND Won by 24 runs",
        img1: "images/IND.png",
        img2: "images/AUS.png",
    },
    match6: {
        matchNumber: "Super Eight T20 50 oF 55",
        date: "24 June",
        team1: "West Indies",
        score1: "135/8(20)",
        team2: "South Africa",
        score2: "124/7(16.1/17)",
        result: "SA Won by 3 wickets (5 balls left)(DLS method)",
        img1: "images/WI.png",
        img2: "images/SA.png",
    }
}

var col1 = document.getElementById("col1")
col1.innerHTML += `<span class='groupstages'>${obj.match1.matchNumber}</span>
<span class='date'>${obj.match1.date}</span>
<img width=25 height=25 src="${obj.match1.img1}">
<span>${obj.match1.team1}</span>
<span class='score'>${obj.match1.score1}</span>
<img width=25 height=25 src="${obj.match1.img2}">
<span>${obj.match1.team2}</span>
<span class='score'>${obj.match1.score2}</span>
<span class='result'>${obj.match1.result}</span>
<img class='lastImg' src="images/download.jpeg" alt="">
`
var col2 = document.getElementById("col2")
col2.innerHTML += `<span class='groupstages'>${obj.match2.matchNumber}</span>
<span class='date'>${obj.match2.date}</span>
<img width=25 height=25 src="${obj.match2.img1}">
<span>${obj.match2.team2}</span>
<span class='score'>${obj.match2.score2}</span>
<img width=25 height=25 src="${obj.match2.img2}">
<span>${obj.match2.team2}</span>
<span class='score'>${obj.match2.score2}</span>
<span class='result'>${obj.match2.result}</span>
<img class='lastImg' src="images/download 1.jpeg" alt="">
`
var col3 = document.getElementById("col3")
col3.innerHTML += `<span class='groupstages'>${obj.match3.matchNumber}</span>
<span class='date'>${obj.match3.date}</span>
<img width=35 height=35 src="${obj.match3.img1}">
<span>${obj.match3.team1}</span>
<span class='score'>${obj.match3.score1}</span>
<img width=35 height=35 src="${obj.match3.img2}">
<span>${obj.match3.team2}</span>
<span class='score'>${obj.match3.score2}</span>
<span class='result'>${obj.match3.result}</span>
<img class='lastImg' src="images/download 2.jpeg" alt="">
`

var col4 = document.getElementById("col4")
col4.innerHTML += `<span class='groupstages'>${obj.match4.matchNumber}</span>
<span class='date'>${obj.match4.date}</span>
<img width=35 height=35 src="${obj.match4.img1}">
<span>${obj.match4.team1}</span>
<span class='score'>${obj.match4.score1}</span>
<img width=35 height=35 src="${obj.match4.img2}">
<span>${obj.match4.team2}</span>
<span class='score'>${obj.match4.score2}</span>
<span class='result'>${obj.match4.result}</span>
<img class='lastImg' src="images/download 3.jpeg" alt="">
`
var col5 = document.getElementById("col5")
col5.innerHTML += `<span class='groupstages'>${obj.match5.matchNumber}</span>
<span class='date'>${obj.match5.date}</span>
<img width=35 height=35 src="${obj.match5.img1}">
<span>${obj.match5.team1}</span>
<span class='score'>${obj.match5.score1}</span>
<img width=35 height=35 src="${obj.match5.img2}">
<span>${obj.match5.team2}</span>
<span class='score'>${obj.match5.score2}</span>
<span class='result'>${obj.match5.result}</span>
<img class='lastImg' src="images/download 4.jpeg" alt="">
`
var col6 = document.getElementById("col6")
col6.innerHTML += `<span class='groupstages'>${obj.match6.matchNumber}</span>
<span class='date'>${obj.match6.date}</span>
<img width=36 height=36 src="${obj.match6.img1}">
<span>${obj.match6.team1}</span>
<span class='score'>${obj.match6.score1}</span>
<img width=36 height=36 src="${obj.match6.img2}">
<span>${obj.match6.team2}</span>
<span class='score'>${obj.match6.score2}</span>
<span class='result'>${obj.match6.result}</span>
<img class='lastImg' src="images/download 5.jpeg" alt="">
`