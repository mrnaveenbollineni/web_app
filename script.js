document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;

    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.style.color = color;
    greetingMessage.textContent = `Hello, ${name}! Your favorite color is ${color}.`;
    greetingMessage.classList.remove('hidden');
});
