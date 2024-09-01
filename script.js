import { aspects } from "./aspects.js";

function createAspectElement(aspect, index) {
    const container = document.createElement('div');
    container.classList.add('aspect');

    const label = document.createElement('label');
    label.className = "aspect-title";
    label.innerText = aspect.title;
    container.appendChild(label);

    let inputElement;
    switch (aspect.type) {
        case 'radio':
            inputElement = document.createElement('div');
            aspect.options.forEach((option, i) => {
                const radioLabel = document.createElement('label');
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = `aspect-${index}`;
                radioInput.value = option.value;
                if (i === 0) radioInput.checked = true; 
                radioInput.addEventListener('change', () => {
                    updatePoints(index, option.score, container);
                });
                radioLabel.appendChild(radioInput);
                radioLabel.append(` ${option.value}`);
                inputElement.appendChild(radioLabel);
                inputElement.appendChild(document.createElement('br'));
            });
            break;
        case 'dropdown':
            inputElement = document.createElement('select');
            inputElement.name = `aspect-${index}`;
            aspect.options.forEach((option, i) => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.innerText = option.value;
                inputElement.appendChild(optionElement);
                if (i === 0) inputElement.selectedIndex = 0;
            });
            inputElement.addEventListener('change', () => {
                const selectedOption = aspect.options.find(opt => opt.value === inputElement.value);
                updatePoints(index, selectedOption.score, container);
            });
            break;
        case 'slider':
            inputElement = document.createElement('input');
            inputElement.type = 'range';
            inputElement.name = `aspect-${index}`;
            inputElement.min = 0;
            inputElement.max = 10;
            inputElement.value = aspect.options[0].value;
            inputElement.addEventListener('input', () => updatePoints(index, inputElement.value, container));
            break;
    }
    inputElement.className = aspect.type;
    container.appendChild(inputElement);

    const pointsContainer = document.createElement('div');
    pointsContainer.className = "points";

    const pointsInput = document.createElement('input');
    pointsInput.type = 'text';
    pointsInput.value = aspect.options[0].score;
    pointsInput.readOnly = true;
    pointsContainer.appendChild(pointsInput);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleEdit(pointsInput, editButton);
    });
    pointsContainer.appendChild(editButton);

    container.appendChild(pointsContainer);

    return container;
}

function renderAspects() {
    const aspectsContainer = document.getElementById('aspectsContainer');
    aspects.forEach((aspect, index) => {
        const aspectElement = createAspectElement(aspect, index);
        aspectsContainer.appendChild(aspectElement);
    });
    updateTotalScore();
}

function updatePoints(index, value, selector) {
    if (value > 0){
        selector.classList.add('selected');
    }   else {
        selector.classList.remove('selected');
    }
    const pointsInput = document.querySelectorAll('.points input[type="text"]')[index];
    pointsInput.value = value;
    updateTotalScore();
}

function toggleEdit(pointsInput, button) {
    if (button.innerText === 'Edit') {
        pointsInput.readOnly = false;
        button.innerText = 'Save';
    } else {
        pointsInput.readOnly = true;
        button.innerText = 'Edit';
        updateTotalScore();
    }
}

function updateTotalScore() {
    let totalScore = 0;
    let totalMax = getMaxValue();
    let priority = '';

    document.querySelectorAll('.points input[type="text"]').forEach(input => {
        totalScore += parseInt(input.value) || 0;
    });

    if (totalScore === 0) {
        priority = "Won't fix";
    } else if (totalScore < 0.2 * totalMax) {
        priority = "Minor";   
    } else if (totalScore < 0.4 * totalMax) {
        priority = "Major"; 
    } else if (totalScore < 0.8 * totalMax) {
        priority = "Critical"; 
    } else {
        priority = "Incident";
    }

    document.getElementById('severityScore').innerHTML = `
    <span style="color: blue;">${totalScore}</span>, priority: 
    <span style="color: red;">${priority}</span>`;
}

function getMaxValue() {
    let totalSum = 0;

    aspects.forEach(aspect => {
        const lastOption = aspect.options[aspect.options.length - 1];
        totalSum += lastOption.score;
    });
    console.log('Total sum of every last aspect.option.score:', totalSum);
    return totalSum;
}

document.addEventListener('DOMContentLoaded', renderAspects);
