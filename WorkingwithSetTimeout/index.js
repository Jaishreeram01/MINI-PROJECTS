let clearId;
function startTimer() {
    clearId = setTimeout(()=> window.alert("Hello jai!"), 3000);
    console.log("Started");
}

function clearTimer() {
    clearTimeout(clearId);
    console.log("Cleared");
}