const COLOR_ARRAY = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'grey']

const colorValue = document.getElementById('color-value')
const changeButton = document.getElementById('change-button')
const resetButton = document.getElementById('reset-button')

changeButton.addEventListener('click', () => onChangeButtonClick())
resetButton.addEventListener('click', () => onResetButtonClick())

const onChangeButtonClick = () => {
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = COLOR_ARRAY[randomNumber]
    colorValue.textContent = COLOR_ARRAY[randomNumber]
}

const getRandomNumber = () => Math.floor(Math.random() * COLOR_ARRAY.length)

const onResetButtonClick = () => {
    document.body.style.backgroundColor = '#fafafa'
    colorValue.textContent = ''
}
