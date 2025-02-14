const bigHeart = document.getElementById('bigHeart');
bigHeart.addEventListener('click', () => {
    const proposalContainer = document.querySelector('.proposal-container');
    proposalContainer.innerHTML = `
        <h1>Will you be my Valentine forever?</h1>
        <button class="yes-button" onclick="acceptProposal()">Yes ❤️</button>
        <button class="no-button" onmouseover="moveNoButton(this)">No 😢</button>
    `;
});

function acceptProposal() {
    window.location.href = "message.html";
}

function moveNoButton(button) {
    button.style.position = 'absolute';
    button.style.top = Math.random() * 80 + '%';
    button.style.left = Math.random() * 80 + '%';
}
