const diceButton = document.getElementById('diceButton');
const adviceText = document.getElementById('adviceText');
const adviceId = document.getElementById('adviceId');

loadAdvice();

async function loadAdvice() {
  diceButton.disabled = true;
  diceButton.setAttribute('aria-busy', 'true');

  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`
    );

    if (!response.ok) {
      throw new Error('Could not fetch resources');
    }

    const data = await response.json();
    const { id, advice } = data.slip;

    adviceText.textContent = advice;
    adviceId.textContent = id;

  } catch (error) {
    console.error(error);
    adviceText.textContent = 'Failed to load advice. Try again.';
  } finally {
    diceButton.disabled = false;
    diceButton.removeAttribute('aria-busy');
  }
}

diceButton.addEventListener('click', loadAdvice);
