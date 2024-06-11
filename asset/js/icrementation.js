// buy incrementation ticket ====================================================
let incrementationSolo = 0;
let incrementationGroup = 0;
let totalSpan = document.getElementById('total');
let unitPriceSolo = 1.20;
let unitPriceGroup = 9.00;

let totalOrderValue = document.querySelector('.total_page .total_table .orderValue');
let orderDescriptionValue = document.querySelector('.total_page .description_table .orderValue');

function updateTotal() {
    let total = (incrementationSolo * unitPriceSolo) + (incrementationGroup * unitPriceGroup);
    totalSpan.innerText = total.toFixed(2) + '€';

    totalOrderValue.innerText = total.toFixed(2) + '€';
    paymentAmount.innerText = total.toFixed(2) + ' EUR';

    let description = "";
    if (incrementationSolo > 0) {
        description += `${incrementationSolo} x ${unitPriceSolo.toFixed(2)} €`;
    }
    if (incrementationGroup > 0) {
        if (description) description += " + ";
        description += `${incrementationGroup} x ${unitPriceGroup.toFixed(2)} €`;
    }
    if (!description) {
        description = "0 x 0.00 €";
    }
    orderDescriptionValue.innerText = description;

    if (total > 0) {
        buyBusTittle.style.display = 'block';
    } else {
        buyBusTittle.style.display = 'none';
    }
}

// Solo Tickets ============
document.querySelector(".display_table .quantity").innerText = 0;
document.querySelector(".display_table .button_positiv").addEventListener("click", function () {
    document.querySelector(".display_table .quantity").innerText = ++incrementationSolo;
    updateTotal();
});
document.querySelector(".display_table .button_negativ").addEventListener("click", function () {
    if (incrementationSolo > 0) {
        document.querySelector(".display_table .quantity").innerText = --incrementationSolo;
        updateTotal();
    }
});

// Group Tickets ============
document.querySelector("#groupTickets .quantity").innerText = 0;
document.querySelector("#groupTickets .positifImg").addEventListener("click", function () {
    document.querySelector("#groupTickets .quantity").innerText = ++incrementationGroup;
    updateTotal();
});
document.querySelector("#groupTickets .negativeImg").addEventListener("click", function () {
    if (incrementationGroup > 0) {
        document.querySelector("#groupTickets .quantity").innerText = --incrementationGroup;
        updateTotal();
    }
});