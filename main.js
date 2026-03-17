// Participation Activity 2
function compute_rank() {
    let math_score = Number(document.getElementById('math_score').value);

    if (math_score >= 101) {
        window.alert("Please input values that is a maximum of 100.")
    }

    else if(math_score >= 95) {
        window.alert("Gold");
    }

    else if(math_score >= 90) {
        window.alert("Silver");
    }

    else if(math_score >= 85) {
        window.alert("Bronze");
    }

    else if(math_score >= 80) {
        window.alert("Merit");
    }

    else{
        window.alert("Invalid/Participation");
    }
}