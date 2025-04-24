// Learn More Button Toggle
document.getElementById('learnMoreButton').addEventListener('click', function () {
  const content = document.getElementById('learnMoreContent');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

// Myth-Busting Section Toggle
document.getElementById('mythButton').addEventListener('click', function () {
  const content = document.getElementById('mythContent');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});
