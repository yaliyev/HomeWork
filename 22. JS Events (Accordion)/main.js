const items = document.querySelectorAll('.item');

items.forEach(item => {
    const head = item.querySelector('.header');
    const according = item.querySelector('.according');
    const icon = item.querySelector('.icon');

    according.style.display = 'none';

    head.addEventListener('click', () => {
        if (according.style.display === 'block' || according.style.display === '') {
            according.style.display = 'none';
            icon.innerHTML = '&#9660;';
            head.classList.remove('active');
        } else {
            items.forEach(otherItem => {
                const otherContent = otherItem.querySelector('.according');
                otherContent.style.display = 'none';
                const otherIcon = otherItem.querySelector('.icon');
                otherIcon.innerHTML = '&#9660;';
                const otherHead = otherItem.querySelector('.header');
                otherHead.classList.remove('active');
            });
            according.style.display = 'block';
            icon.innerHTML = '&#9650;';
            head.classList.add('active'); // aktivləşdikdə "active" klassını əlavə et
        }
    });
});
