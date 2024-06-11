

// pop up ticket use =====================================================================
document.addEventListener('DOMContentLoaded', function () {
    ticketImage.addEventListener('click', function () {
        if (page2PopUp.style.display === 'none' || page2PopUp.style.display === '') { // page2PopUp.style.display === '' : it's for the first click
            page2PopUp.style.display = 'block';
        } else {
            page2PopUp.style.display = 'none';
        }
    });
});

// redirection page use to buy titles ===========================================
document.getElementById('page_2_by_a_title').addEventListener('click', function () {

    if (headerTitle.textContent === 'E-Tickets') {
        headerTitle.textContent = 'Acheter';
        navBar.style.display = 'none';
        buyContainer.style.display = 'block';
        closeBuyTitle.style.display = 'block';
        filterImg.style.display = 'block';
        myTittle.style.display = 'none';
        displayTable.style.display = 'block';
        // buyBusTittle.style.display = 'block';
    } else {
        headerTitle.textContent = 'E-Tickets';
        backLink.style.display = 'block';
        navBar.style.display = 'block';
        buyContainer.style.display = 'none';
        closeBuyTitle.style.display = 'none';
        filterImg.style.display = 'block';
        myTittle.style.display = 'none';
        displayTable.style.display = 'none';
        // buyBusTittle.style.display = 'none';
    }
});

// redirection buy title to total conditions page ===========================================
document.getElementById('buyButton').addEventListener('click', function () {

    if (headerTitle.textContent === 'Acheter') {
        headerTitle.textContent = 'Paiement';
        backLink.textContent = 'Acheter';
        backLink.style.display = 'block';
        backIcon.style.display = 'block';
        closeImg.style.display = 'none';
        filterImg.style.display = 'none';
        optionIcon.style.display = 'none';
        totalPage.style.display = 'block';
        buyTable.style.display = 'none';
        buyBusTittle.style.display = 'none';

    } else {
        headerTitle.textContent = 'Acheter';
        backLink.style.display = 'block';
        backIcon.style.display = 'none';
        backLink.style.display = 'none';
        closeImg.style.display = 'block';
        filterImg.style.display = 'block';
        optionIcon.style.display = 'block';
        totalPage.style.display = 'none';
        buyTable.style.display = 'none';
        buyBusTittle.style.display = 'block';

    }
});

// redirection total conditions page to authentification payment ===========================================
document.getElementById('buyButtonConditions').addEventListener('click', function () {

    if (headerTitle.textContent === 'Paiement') {
        backLink.style.display = 'none';
        totalPage.style.display = 'none';
        paymentContainer.style.display = 'block';

    } else {
        backLink.style.display = 'block';
        totalPage.style.display = 'block';
        paymentContainer.style.display = 'none';

    }
});

// redirection authentification payment form to accepted payment ===========================================
document.getElementById('submit-button').addEventListener('click', function () {

    if (headerTitle.textContent === 'Paiement') {
        backLink.textContent = 'Acheter';
        backLink.style.display = 'block';
        totalPage.style.display = 'none';
        acceptedPayment.style.display = 'block';
        paymentContainer.style.display = 'none';
    } else {
        backLink.style.display = 'none';
        totalPage.style.display = 'block';
        acceptedPayment.style.display = 'none';
        paymentContainer.style.display = 'block';

    }
});

// redirection accepted payment to page use (header and nav bar éléments) ==================
document.getElementById('close_button_accepted_payment').addEventListener('click', function () {

    if (headerTitle.textContent === 'Paiement') {
        acceptedPayment.style.display = 'none';
        page2.style.display = 'none';
        myTittle.style.display = 'block';
        page2UseContainer.style.display = 'block';
        headerTitle.textContent = 'E-Tickets';
        backLink.style.display = 'none';
        backIcon.style.display = 'none';
        optionIcon.style.display = 'block';
        navBar.style.display = 'block';
        page2ByATitle.style.display = 'block';
        // page2UseImgTicketUsed.style.display = 'none';
        page2UseImgTicket.style.display = 'block';
    } else {
        acceptedPayment.style.display = 'block';
        page2.style.display = 'none';
        page2UseContainer.style.display = 'block';
        page2UseImgTicket.style.display = 'none';

        headerTitle.textContent = 'Paiement';
        backLink.style.display = 'block';
        backIcon.style.display = 'block';
        optionIcon.style.display = 'none';
        navBar.style.display = 'none';
        page2ByATitle.style.display = 'none';
        myTittle.style.display = 'none';
        page2UseImgTicket.style.display = 'none';

    }
});

// redirection use ticket button to chrono page =====================
document.getElementById('use_title').addEventListener('click', function () {

    if (headerTitle.textContent === 'E-Tickets') {
        headerTitle.textContent = 'Votre Voyage';
        backLink.textContent = 'E-Tickets';
        backLink.style.display = 'block';
        backIcon.style.display = 'block';
        optionIcon.style.display = 'none';
        page2UseTitle.style.display = 'none';
        page2UseTravelDescription.style.display = 'none';
        page2UseTicketAvailable.style.display = 'none';
        page2UseImgTicket.style.display = 'none';
        page2PopUp.style.display = 'none'
        timerPage.style.display = 'block';
        validateTitle.style.display = 'block';
        imageTimer.style.display = 'block';

    } else {
        headerTitle.textContent = 'E-Tickets';
        backLink.style.display = 'none';
        backIcon.style.display = 'none';
        optionIcon.style.display = 'block';
        page2UseTitle.style.display = 'block';
        page2UseTravelDescription.style.display = 'block';
        page2UseTicketAvailable.style.display = 'block';
        page2UseImgTicket.style.display = 'block';
        page2PopUp.style.display = 'block'
        timerPage.style.display = 'none';
        validateTitle.style.display = 'block';
        imageTimer.style.display = 'none';

    }
});

//  instructions page =========================
document.getElementById('p_instructions').addEventListener('click', function () {

    if (headerTitle.textContent === 'Votre Voyage') {
        headerTitle.textContent = 'Correspondance, Métro, Contrôle';
        backLink.style.display = 'none';
        backIcon.style.display = 'none';
        navBar.style.display = 'none';
        closeImg.style.display = 'block';
        timerPage.style.display = 'none';
        validateTitle.style.display = 'none';
        page2UseBuyATitle.style.display = 'none'
        instructions.style.display = 'block'
        myTittle.style.display = 'none'
    } else {
        headerTitle.textContent = 'Votre Voyage';
        backLink.style.display = 'block';
        backIcon.style.display = 'block';
        closeImg.style.display = 'none';
        navBar.style.display = 'block';
        timerPage.style.display = 'block';
        validateTitle.style.display = 'block';
        page2UseBuyATitle.style.display = 'block'
        instructions.style.display = 'none'
        myTittle.style.display = 'block'

    }
});


// 

// display Qr code ===========================================
document.getElementById('controls_buttons').addEventListener('click', function () {
    document.getElementById('qr_code_page').style.display = 'block';
    document.querySelector('.my_tittle').style.display = 'none';
    document.getElementById('nav_bar').style.display = 'none';
    document.querySelector('.header_page_nav').style.display = 'none';
    document.querySelector('.header_class').style.display = 'none';

});

// disable Qr code ===========================================

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('qr_code_page').style.display = 'none';
    document.querySelector('.my_tittle').style.display = 'block';
    document.getElementById('nav_bar').style.display = 'block';
    document.querySelector('.header_page_nav').style.display = 'flex';
    document.querySelector('.header_class').style.display = 'block';

});

 
// back redirection ========================
// close instuctions =======================
document.querySelector('.close_img').addEventListener('click', function () {
        if (headerTitle.textContent === 'Correspondance, Métro, Contrôle') {
            headerTitle.textContent = 'Votre Voyage';
            backLink.style.display = 'block';
            backIcon.style.display = 'block';
            navBar.style.display = 'block';
            closeImg.style.display = 'none';
            timerPage.style.display = 'block';
            validateTitle.style.display = 'block';
            page2UseBuyATitle.style.display = 'block'
            instructions.style.display = 'none'
            myTittle.style.display = 'block'
        } else {
            headerTitle.textContent = 'Correspondance, Métro, Contrôle';
            backLink.style.display = 'none';
            backIcon.style.display = 'none';
            navBar.style.display = 'none';
            closeImg.style.display = 'block';
            timerPage.style.display = 'none';
            validateTitle.style.display = 'none';
            page2UseBuyATitle.style.display = 'none'
            instructions.style.display = 'block'
            myTittle.style.display = 'none'
        }
    });
// back total conditions page to redirection buy title ===========================================
// document.getElementById('buyButton').addEventListener('click', function () {
//     if (headerTitle.textContent === 'Paiement') {
//         headerTitle.textContent = 'Acheter';
//         backLink.textContent = 'Paiement';
//         backLink.style.display = 'block';
//         backIcon.style.display = 'block';
//         closeImg.style.display = 'block';
//         filterImg.style.display = 'block';
//         optionIcon.style.display = 'block';
//         totalPage.style.display = 'none';
//         buyTable.style.display = 'block';
//         buyBusTittle.style.display = 'block';
//     } else {
//         headerTitle.textContent = 'Paiement';
//         backLink.textContent = 'Acheter';
//         backLink.style.display = 'none';
//         backIcon.style.display = 'none';
//         closeImg.style.display = 'none';
//         filterImg.style.display = 'none';
//         optionIcon.style.display = 'none';
//         totalPage.style.display = 'block';
//         buyTable.style.display = 'none';
//         buyBusTittle.style.display = 'none';
//     }
// });

