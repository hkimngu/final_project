var activeFilters = [];

function toggleFilter(category, button) {
    var index = activeFilters.indexOf(category);
    if (index !== -1) {
        activeFilters.splice(index, 1);
        button.classList.remove('active');
    } 
    else {
        activeFilters.push(category);
        button.classList.add('active');
    }
    filterList();
}

function filterList() {
    var items = document.getElementsByClassName("songs")[0].getElementsByTagName("button");
    for (var i = 0; i < items.length; i++) {
        var show = activeFilters.length === 0 || activeFilters.includes(items[i].classList[0]);
        items[i].style.display = show ? "block" : "none";
    }
}

function showSong(song, button) {
    var song_button = button;
    var urlMap = {
        "aju_nice": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Rrj7KyS2R6SP9CQMDJW1w?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "bitter_water": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2mijcmCvkvig8SkNCgYZC5?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "ca_phe": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5cvW3PYJeQjRTnj9vHP5Va?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "circles": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6rurduYegrf5XSZrphuyF2?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "creature": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6tJkq3zUXlEjWluMW9Hdij?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "curses": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7wjmdC4OL3l1nh9zQwCpv8?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "ditto": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3r8RuvgbX9s7ammBn07D3W?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "eurus": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6fltUHBFN6FNdeskwHa0IE?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "ghen": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6jghnZHYAyNlEiWbxDITjy?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "grow": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/75bSeiRwLQ5ByZReB0uC1Y?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "hot_tea": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2cmcbrmNtywPjVEPmyvbgA?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "idubilu": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3acGHJqr9xU1cnCEfLX1Lx?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "like_the_dawn": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6Nt65Ai8u0oUBAXhARj04o?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "make_of_it": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2rtrk98kS6oXlHH8AGRnxK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "oh_my": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/06pQBEBRpmMv9JlxbpLp0E?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "omg": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/65FftemJ1DbbZ45DUfHJXE?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "passerine": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4pIpjNNk21oQfOtkcMUul1?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "rock_with_you": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6LnEoRQKMcaFTR5UvaKuBy?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "shadow": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2rwJP8OEao5y3xexw52HfD?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "super_shy": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5sdQOyqq2IDhvmx2lHOpwd?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "tongues_and_teeth": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0XSOLgNqtHZgEEaQyoQctR?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        "whats_wrong": '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1C5YO3ItmCjO2lUtLQmYYO?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    };
    document.querySelector('#record_player').innerHTML = urlMap[song];
    var buttons = document.getElementsByClassName("songs")[0].getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    song_button.classList.add('active');
}
