const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mock movie posters from Unsplash
const posters = [
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1574267432553-4b462808152a?auto=format&fit=crop&w=400&q=80'
];

function populateSlider(id) {
    const slider = document.getElementById(id);
    // shuffle array
    const shuffled = [...posters].sort(() => 0.5 - Math.random());
    
    shuffled.forEach(src => {
        const div = document.createElement('div');
        div.className = 'movie-card';
        div.innerHTML = `<img src="${src}" alt="Movie Poster">`;
        slider.appendChild(div);
    });
}

populateSlider('trending-slider');
populateSlider('top-slider');
