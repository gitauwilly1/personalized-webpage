const form = document.getElementById('userForm');
const displaySection = document.getElementById('displaySection');


/**
 * Calculates age in months
 * @param {number} years 
 * @returns {number}
 */
const getAgeInMonths = (years) => years * 12;


function updateUI() {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');

    if (name && age) {
        displaySection.classList.remove('hidden');

        // 1. Personalized Greeting (Template Literals)
        document.getElementById('greeting').innerText = `Hello, ${name}!`;

        // 2. Age in Months
        const months = getAgeInMonths(parseInt(age));
        document.getElementById('ageResult').innerText = `You are ${months} months old.`;

        // 3. Conditional Content (If/Else)
        const accessDiv = document.getElementById('contentAccess');
        if (age >= 18) {
            accessDiv.innerText = "Premium Content Unlocked ";
            accessDiv.style.color = "green";
        } else {
            accessDiv.innerText = "Restricted Mode Active ";
            accessDiv.style.color = "orange";
        }

        // 4. Quote Loop
        const quoteBox = document.getElementById('quoteRepeater');
        quoteBox.innerHTML = ''; // Clear previous loop
        for (let i = 0; i < 5; i++) {
            const p = document.createElement('p');
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

