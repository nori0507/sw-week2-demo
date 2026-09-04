//once the uesr click the submit button, a small window pops up with the message "Submission success! Yay!"
function initForm() {
    const submitBtn = document.getElementById('submit-btn');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            alert('Submission success! Yay!');
        });
    }
}

//call the function 
document.addEventListener('DOMContentLoaded', initForm);

//when the mouse havors over these specific words, a hidded window will popup
function havorDetails(){
    const detailItems = document.querySelectorAll('.detail-item');

    detailItems.forEach(item => {
        const infoBox = item.querySelector('.info-box');

        //make the box visible when the mouse is on the text
        item.addEventListener('mouseenter', () => {
            infoBox.style.opacity = '1';
            infoBox.style.visibility = 'visible';
        });

        //make the box unvisible when the mouse is not on the text
        item.addEventListener('mouseleave', () => {
            infoBox.style.opacity = '0';
            infoBox.style.visibility = 'hidden';
        });
    });
}

//call the function
document.addEventListener('DOMContentLoaded', havorDetails);

