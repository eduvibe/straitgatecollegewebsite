document.getElementById('toggleButton').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    const button = this;
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        button.textContent = 'Read Less';
        moreInfo.parentNode.insertBefore(button, moreInfo.nextSibling);
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'Read More';
        moreInfo.parentNode.insertBefore(button, moreInfo);
    }
});


//side navbar for mobile contact display phone number copy
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Phone number copied to clipboard');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
