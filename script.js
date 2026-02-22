let form = document.getElementById('userForm');
let displaySection = document.getElementById('displaySection');


let getAgeInMonths = (years) => years * 12;


function updateUI() {
    let name = localStorage.getItem('name');
    let age = localStorage.getItem('age');

    if (name && age) {
        displaySection.classList.remove('hidden');

        // 1. Personalized Greeting (Template Literals)
        document.getElementById('greeting').innerText = `Hello, ${name}!`;

        // 2. Age in Months
        let months = getAgeInMonths(parseInt(age));
        document.getElementById('ageResult').innerText = `You are ${months} months old.`;

        // 3. Conditional Content (If/Else)
        let accessDiv = document.getElementById('contentAccess');
        if (age >= 18) {
            accessDiv.innerText = "Premium Content Unlocked ";
            accessDiv.style.color = "green";
        } else {
            accessDiv.innerText = "Restricted Mode Active ";
            accessDiv.style.color = "orange";
        }

        // 4. Quote Loop
        let quoteBox = document.getElementById('quoteRepeater');
        quoteBox.innerHTML = ''; // Clear previous loop
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

