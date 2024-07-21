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
