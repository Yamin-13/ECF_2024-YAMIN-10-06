// redirection and accept conditions page to payment page ===================================
document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('conditionsCheckbox');
    let buttonConditions = document.getElementById('buyButtonConditions');
    let generalConditionsPage = document.querySelector('.total_page');
    let paymentContainer = document.querySelector('#payment-container');
    let buyButton = document.getElementById('buyButton');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            buttonConditions.style.backgroundColor = '#d33a20';
            buttonConditions.disabled = false;
        } else {
            buttonConditions.style.backgroundColor = '#ec9687';
            buttonConditions.disabled = true;
        }
    });

    buttonConditions.addEventListener('click', function () {
        if (checkbox.checked) {
            generalConditionsPage.style.display = 'none';
            paymentContainer.style.display = 'block';
            // headerBuyTitlle.style.display = 'none';
            // headerPaiement.style.display = 'block';
        }
    });

    // hide the buy page and showing the conditions page
    buyButton.addEventListener('click', function () {
        document.querySelector('.display_table').style.display = 'none';
        // document.querySelector('#groupTickets').style.display = 'none';
        document.querySelector('.buyBusTittle').style.display = 'none';
        // document.querySelector('#headerBuyTitlle').style.display = 'none';
        // document.querySelector('#headerPaiement').style.display = 'block';
        generalConditionsPage.style.display = 'block';
    });
});
