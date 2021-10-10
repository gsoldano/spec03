window.onload = function() {
    selectAllItems();
}

function selectAllItems() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/spec03/items");
    xhttp.onload = function() {
        var data = JSON.parse(xhttp.responseText);
        for (i = 0; i < data.length; i++) {
            var htmlString = 
            "<tr>" + 
            "<td>" + data[i].id + "</td>" +
            "<td>" + data[i].value + "</td>" +
            "</tr>";
        document.getElementById("mainTable").insertAdjacentHTML("beforeend", htmlString);
        }
    }
    xhttp.send();
}

function insertItem() {
    var itemToInsert = {};
    itemToInsert.value = document.getElementById('insertValue').value;
    var jsonPostDemo = JSON.stringify(itemToInsert);
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://localhost:8080/spec03/items');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onload = function() {
        document.getElementById("mainTable").innerHTML = "";
        selectAllItems();
    }
    xhttp.send(jsonPostDemo);
}

function updateItem() {
    var itemToUpdate = {};
    itemToUpdate.value = document.getElementById('updateValue').value;
    var jsonPostDemo = JSON.stringify(itemToUpdate);
    var id = document.getElementById('updateId').value;
    var xhttp = new XMLHttpRequest();
    xhttp.open('PUT', 'http://localhost:8080/spec03/items/' + id);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onload = function() {
        document.getElementById("mainTable").innerHTML = "";
        selectAllItems();
    }
    xhttp.send(jsonPostDemo);
}

function deleteItem() {
    var id = document.getElementById('deleteId').value;
    var xhttp = new XMLHttpRequest();
    xhttp.open('DELETE', 'http://localhost:8080/spec03/items/' + id);
    xhttp.onload = function() {
        document.getElementById("mainTable").innerHTML = "";
        selectAllItems();
    }
    xhttp.send();
}
