const items = document.querySelectorAll('.item');

items.forEach(item => {
    const head = item.querySelector('.header');
    const according = item.querySelector('.according');

    head.addEventListener('click', () => {
        if (according.style.display === 'block' || according.style.display === '') {
            according.style.display = 'none';
        } else {
            items.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.according');
                otherContent.style.display = 'none';
            });
            according.style.display = 'block';
        }
    });
});
