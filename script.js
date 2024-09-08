const toggleButton = document.getElementById('toggle-skills');
const moreSkills = document.querySelectorAll('.more-skills');

toggleButton.addEventListener('click', () => {
    moreSkills.forEach(skill => {
        skill.style.display = skill.style.display === 'block' ? 'none' : 'block';
    });
    
    toggleButton.textContent = 
        toggleButton.textContent === 'See More' ? 'See Less' : 'See More';
});
