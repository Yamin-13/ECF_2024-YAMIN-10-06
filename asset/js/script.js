// Dynamically adds the select month and year options =========================

// Table with the names of the months
let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

// Get the <select> element with id 'expiry-month'
let monthSelect = document.getElementById('expiry-month');

// Fills the <select> of the months
months.forEach((month) => {
    let option = document.createElement('option'); // 
    option.text = month;
    monthSelect.add(option);
});

// Get the <select> element for years
let yearSelect = document.getElementById('expiry-year');
let actualYear = new Date().getFullYear(); // ca obtient l'année actuelle pour commencer en 2024

// Fills the <select> years, from current year to 2030
for (let year = actualYear; year <= 2030; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearSelect.add(option);
}




