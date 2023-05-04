const config = {
    card: '.card',
    cardTitle: '.card__heading',
    cardTitleComplete: 'card__heading_complete',
    buttonComplete: '.button_type_complete'
};

const cardsArr = document.querySelectorAll(config.card);

const popupEdit = document.querySelector('.popup_type_edit-task');

const handleEditTask = (card) => {
    const cardEditButton = card.querySelector('.button_type_edit');

    cardEditButton.addEventListener('click', () => {
        popupEdit.classList.toggle('popup_opened');
    });
}

const handleCompleteTask = (card) => {
    const cardButton = card.querySelector(config.buttonComplete);
    const cardTitle = card.querySelector(config.cardTitle);

    cardButton.addEventListener('click', () => {
        cardTitle.classList.toggle(config.cardTitleComplete);
    });
}

cardsArr.forEach((item) => {
    handleCompleteTask(item);
    handleEditTask(item);
});