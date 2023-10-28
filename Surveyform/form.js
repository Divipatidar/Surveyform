function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.getElementsByName('gender');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Check if at least one gender option is selected
    let gender = '';
    genderElements.forEach(element => {
        if (element.checked) {
            gender = element.value;
        }
    });

    // Display submitted values in the popup
    const popupList = document.getElementById('popupList');
    popupList.innerHTML = `
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Date of Birth: ${dob}</li>
        <li>Country: ${country}</li>
        <li>Gender: ${gender}</li>
        <li>Profession: ${profession}</li>
        <li>Email: ${email}</li>
        <li>Mobile Number: ${mobile}</li>
    `;

    // Display the popup
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    // Close the popup and reset the form
    document.getElementById('popup').style.display = 'none';
    document.getElementById('surveyForm').reset();
}
