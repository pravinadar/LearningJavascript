const form = document.querySelector('form')

form.addEventListener('submit', function (sub) {
    sub.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const resultWeight = document.querySelector('#resultWeight')


    if (isNaN(height) || height < 1 || height === '') {

        result.innerHTML = 'Enter a valid height';
    }
    else if (isNaN(weight) || weight < 1 || weight === '') {
        result.innerHTML = 'Enter a valid weight';
    }
    else {
        height /= 100;
        const BMI = (weight / (height * height)).toFixed(3)

        result.innerHTML = `Your BMI is ${BMI}`

    }

    
    if (!isNaN(weight)) {
        if (weight < 18.6) {
            resultWeight.innerHTML = `You are under weight`

        }
        else if (weight > 18.6 && weight < 24.9) {
            resultWeight.innerHTML = ` You're weight is normal`

        }
        else {
            resultWeight.innerHTML = `You're over weight`

        }
    }



})