const toggleButton: HTMLElement | null = document.getElementById('toggle-skills');
const moreSkills: NodeListOf<HTMLElement> = document.querySelectorAll('.more-skills');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        moreSkills.forEach(skill => {
            skill.style.display = skill.style.display === 'block' ? 'none' : 'block';
        });
        
        toggleButton.textContent = 
            toggleButton.textContent === 'See More' ? 'See Less' : 'See More';
    });
}
