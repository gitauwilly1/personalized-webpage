let form = document.getElementById('userForm');
let displaySection = document.getElementById('displaySection');


let getAgeInMonths = (years) => years * 12;


function updateUI() {
    let name = localStorage.getItem('name');
    let age = localStorage.getItem('age');

    if (name && age) {
        displaySection.classList.remove('hidden');

        document.getElementById('greeting').innerText = `Hello, ${name}!`;

        let months = getAgeInMonths(parseInt(age));
        document.getElementById('ageResult').innerText = `You are ${months} months old.`;

        let accessDiv = document.getElementById('contentAccess');
        if (age >= 18) {
            accessDiv.innerText = "Premium Content Unlocked ";
            accessDiv.style.color = "green";
        } else {
            accessDiv.innerText = "Restricted Mode Active ";
            accessDiv.style.color = "orange";
        }

        let quoteBox = document.getElementById('quoteRepeater');
        quoteBox.innerHTML = ''; 
        for (let i = 0; i < 5; i++) {
            let p = document.createElement('p');
            p.textContent = "Keep pushing forward, you're doing great!";
            quoteBox.appendChild(p);
        }
    }
}

// --- Event Listeners ---
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Store in localStorage
    localStorage.setItem('name', document.getElementById('userName').value);
    localStorage.setItem('age', document.getElementById('userAge').value);
    
    updateUI();
});

window.onload = updateUI;