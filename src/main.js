"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

function enableForm(){
    const select = document.getElementById("items");

    let index = 0;

    Object.values(itemData).forEach(item => {
        //<option value="-1" disabled>Seleccione un valor</option>
        let option = document.createElement("option");

        option.value = index;
        option.textContent = item.name;

        select.appendChild(option);

        index++;
    });

    select.addEventListener("change", function () {
        const selectedIndex = parseInt(select.value);
        mostrarItemSeleccionado(selectedIndex);
    });

    document.getElementById("increaseScore").addEventListener("click", function () {
        const items = Object.values(itemData);
        if (select.value < 0 || select.value >= items.length) return;
        items[select.value].score++;
        document.getElementById("score").value = items[select.value].score;
    });

    // Botón para disminuir el score
    document.getElementById("decreaseScore").addEventListener("click", function () {
        const items = Object.values(itemData);
        if (select.value < 0 || select.value >= items.length) return;
        items[select.value].score--;
        document.getElementById("score").value = items[select.value].score;
    });
}

function mostrarItemSeleccionado(index) {
    const items = Object.values(itemData);
    if (index < 0 || index >= items.length) return;

    const item = items[index];
    document.getElementById("displayImage").src = item.image;
    document.getElementById("photographer").value = item.photographer;
    document.getElementById("description").value = item.description;
    document.getElementById("score").value = item.score;

    const select = document.getElementById("items");

    select.addEventListener("change", function () {
        const selectedIndex = parseInt(this.value);
        mostrarItemSeleccionado(selectedIndex);
    });
}



{{
    enableForm();
}}