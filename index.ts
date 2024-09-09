const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
const moreSkills = document.querySelectorAll('.more-skills') as NodeListOf<HTMLElement>;

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        moreSkills.forEach(skill => {
            if (skill instanceof HTMLElement) {
                skill.style.display = skill.style.display === 'block' ? 'none' : 'block';
            }
        });
        
        toggleButton.textContent = 
            toggleButton.textContent === 'See More' ? 'See Less' : 'See More';
    });
}
