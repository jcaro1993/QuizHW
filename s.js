document.getElementById("form1").onsubmit = function() {
    Hammer = parseInt(document.querySelector('input[name = "Hammer"]:checked').value);
    shield = parseInt(document.querySelector('input[name = "shield"]:checked').value);
    stone = parseInt(document.querySelector('input[name = "stone"]:checked').value);
    panther = parseInt(document.querySelector('input[name = "panther"]:checked').value);


    result = Hammer + shield + stone + panther;

    document.getElementById("grade").innerHTML = result;
    return false;
};