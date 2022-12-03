const dropdownButton = document.querySelector('.dropdown__button')
const dropDownMenu = document.querySelector('.search__engine')

dropdownButton.addEventListener('click',function () {
        dropDownMenu.classList.toggle('hide');
    })
