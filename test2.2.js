// PopUp Start
function model_popup() {
    $(document).ready(function () {
        $(".model_popup").fadeIn(1000);
    });
}
function closePopup() {
    $(document).ready(function () {
        $(".model_popup").fadeOut(1000);
    });
}

// PopUp End

// Clear All Future Teller
function clearAll() {
    document.getElementById("quesInput").value = '';
    document.getElementById("nameInput").value = '';
    document.getElementById("resultId").innerHTML = '';
}
// TellFuture Calling
// const enemy = [];
// const frend1 = [];
// const frend2 = [];
// const love = [];
// const who = [];

function shoData() {
    if (enemy.length) {
        console.log(index, enemy[index]);
    }
    if (frend1.length) {
        console.log(frend1);
    }
    if (frend2.length) {
        console.log(frend2);
    }
    if (love.length) {
        console.log(love);
    }
    if (who.length) {
        console.log(who);
    }

}

function tellFuture() {
    //shoData();
    let nameInput = document.getElementById("nameInput").value;
    let quesInpt = document.getElementById("quesInput").value;
    let qInput = quesInpt.toLowerCase();
    if (quesInpt == '' && qInput == '') {
        alert("please Enter your Name And Query to Start");
    } else {

        if (qInput.includes("enemy") ||  qInput.includes("who is my enemy") || qInput.includes("any enemy") || qInput.includes("any enemy in my life")) {   
            let ans_enemy = ["Aapka koi dusman nhi hai.", "Everyone loves you", "Ahmm.. check your circle", "Savdhan rahe satark rahein", "Maybe someone"];
            let ran_no = Math.floor((Math.random() * 5) + 0);
            document.getElementById("resultId").innerHTML = ans_enemy[ran_no];
            console.log(ans_enemy[ran_no], "value");
        } else if (qInput.includes("friend") || qInput.includes("who is my friend") || qInput.includes("any friend") || qInput.includes("any friend in my life")) {
            let ans_friend = ["You Have Lot of Fiends", "Ek hai jo Hmesha Aapke sath Hai", "Koi Nhi hai", "Maybe someone"];
            let ran_no = Math.floor((Math.random() * 4) + 0);
            document.getElementById("resultId").innerHTML = ans_friend[ran_no];
        } else if (qInput.includes("mera dost kaisa hai")) {
            let ans_friend2 = ["Your Fiend is Faithful Friend", "Aap ka dost aapke bhavisy ke liye theek nhi hai", "Aap Ka Dost Aapke Bare Me Accha Sochta Hai"];
            let ran_no = Math.floor((Math.random() * 3) + 0);
            document.getElementById("resultId").innerHTML = nameInput + " " + ans_friend2[ran_no];
        } else if (qInput.includes('love') || qInput.includes("loves") || qInput.includes("who loves me?") || qInput.includes("anyone loves me?")) {
            const alphabet = "abcdefghijklmnopqrstuvwxyz";
            let ranLet = alphabet[Math.floor(Math.random() * alphabet.length)];
            let ans_loves = ["Someone is loves you", "You always single", "Your Lover Name is Start with " + '"' + ranLet + '" ' + "letter", "Still Single"];
            let ran_no = Math.floor((Math.random() * 4) + 0);
            let resId = document.getElementById("resultId");
            resId.innerHTML = nameInput + " " + ans_loves[ran_no];
        } else if (qInput.includes('who i am') || qInput.includes('who am i') || qInput.includes('who is me')) {
            let ans_who = ["You are Good Person", "May Be a Good Person", "You Born in this world to do something big in the world."];
            let ran_no = Math.floor((Math.random() * 3) + 0);
            document.getElementById("resultId").innerHTML = nameInput + " " + ans_who[ran_no];
        } else if (qInput.includes('who are you') || qInput.includes('who you are')) {
            document.getElementById("resultId").innerHTML = nameInput + " Am Future Teller";
        }else{
            alert("Data Not Found");
            document.getElementById("resultId").innerHTML = '';
        }
    }
}

function clearAll2() {
    document.getElementById("nameId").value = '';
    document.getElementById("resultId").innerHTML = '';
}

function tellFuture2() {
    selctQues = document.getElementById("selquesId").value;
    var name = document.getElementById("nameId").value;
    var a_arr = ["Yes.. Your Future is Bright", "Yes.! Why Not..", "You Need To Start Hard Work", "Ek Dost Aapke Liye Helpful Hoga", "You Are Already Successful Person", "Not Sure..!", "You Need To Always Alert in Daily Life.", "If You Unleash samart hobbies In You, Maybe."];
    let ran_no = Math.floor((Math.random() * 8) + 0);
    if(name == '' || selctQues == ''){
        alert("Enter Your Name And Select Your Query.");
    }else{
        if (selctQues.match("If my future is bright ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        } else if (selctQues.match("Will I get SUKOON in life anytime soon ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        } else if (selctQues.match("Will I get married ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        } else if (selctQues.match("Will I get a Car in Future ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        } else if (selctQues.match("Will I get Success in my Life?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        } else if (selctQues.match("Will I get promoted ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        } else if (selctQues.match("If my foe lies within my circle ?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        } else if (selctQues.match("Will i get Girlfrend..! in Future?")) {
            document.getElementById("resultId").innerHTML = "Hello " + name + " You have asked " + selctQues + " well.. " + a_arr[ran_no];
        }
    }
}