document.querySelectorAll('.btn-hero, .btn-submit').forEach(button => {
  button.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
    circle.style.top = (e.clientY - rect.top - size / 2) + 'px';

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});
