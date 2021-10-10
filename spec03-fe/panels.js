function openInsertPanel() {
    document.getElementById("insertDiv").style.display = "block";
}

function closeInsertPanel() {
    document.getElementById("insertValue").value = "";
    document.getElementById("insertDiv").style.display = "none";
}

function openUpdatePanel() {
    document.getElementById("updateDiv").style.display = "block";
}

function closeUpdatePanel() {
    document.getElementById("updateId").value = "";
    document.getElementById("updateValue").value = "";
    document.getElementById("updateDiv").style.display = "none";
}

function openDeletePanel() {
    document.getElementById("deleteDiv").style.display = "block";
}

function closeDeletePanel() {
    document.getElementById("deleteId").value = "";
    document.getElementById("deleteDiv").style.display = "none";
}
