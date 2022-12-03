
var scores = [];
       
function highScoreList() {
    var list = "";
    var l = document.getElementById("list");

    for (var key in localStorage) {
        var value = localStorage.getItem(key);
        if (value != null) {
            scores.push(
                {
                    name: key, 
                    score: value
                }
            );
        }
    } 

    scores.sort(compare);

    for (x=0; x<5 && x<scores.length; x++) {
        list += "<li>";
        list += scores[x].name + ":  " + scores[x].score;
        list += "</li>";
    }
    l.innerHTML = list;
}

function compare(a,b) {
    var ascore = parseInt(a.score);
    var bscore = parseInt(b.score);
    
    if (ascore < bscore) {
        return 1;
    }
    if (ascore > bscore) {
        return -1;
    }
    return 0;
}

highScoreList();

// function finishedGame() {
//     finished.setAttribute("style", "display: block");
//     startBtn.setAttribute("style", "display: block !important");
//     stopGame.setAttribute("style", "display: none");
  
//     var pName = document.getElementById("pName").value;
//     var playerName = document.getElementById("playerName");
//     localStorage.setItem(pName, secondsLeft);
//     playerName.innerHTML =
//       "<p>" + pName + ":    " + localStorage.getItem(pName) + "</p>";
//   }

//   finishedGame();