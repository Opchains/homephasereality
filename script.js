const menu = document.querySelector('#menu');
const mobile = document.querySelector('#mobileNav');

if (menu && mobile) {
  menu.addEventListener('click', () => {
    const isOpen = mobile.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
}

const searchButton = document.querySelector('#search');
if (searchButton) {
  searchButton.addEventListener('click', () => {
    const locationValue = document.querySelector('#loc')?.value ?? 'all';
    const typeValue = document.querySelector('#type')?.value ?? 'all';
    const budgetValue = document.querySelector('#budget')?.value ?? 'all';
    const resultLabel = document.querySelector('#result');
    let count = 0;

    document.querySelectorAll('.card').forEach((card) => {
      const matchesLocation = locationValue === 'all' || card.dataset.loc === locationValue;
      const matchesType = typeValue === 'all' || card.dataset.type === typeValue;
      const matchesBudget = budgetValue === 'all' || card.dataset.budget === budgetValue;
      const show = matchesLocation && matchesType && matchesBudget;

      card.style.display = show ? 'block' : 'none';
      if (show) count += 1;
    });

    if (resultLabel) {
      resultLabel.textContent = `${count} matching sample ${count === 1 ? 'opportunity' : 'opportunities'}.`;
    }
  });
}

document.querySelectorAll('[data-property]').forEach((link) => {
  link.addEventListener('click', () => {
    const noteField = document.querySelector('textarea[name="note"]');
    if (noteField) {
      noteField.value = `I am interested in: ${link.dataset.property}`;
    }
  });
});

const form = document.querySelector('#form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = [
      'Hi Homephase Realty, I would like help finding a property.',
      `Name: ${formData.get('name')}`,
      `Purpose: ${formData.get('purpose')}`,
      `Location: ${formData.get('location')}`,
      `Budget: ${formData.get('budget')}`,
      `Property type: ${formData.get('type')}`,
      `Details: ${formData.get('note') || 'None'}`
    ].join('\n');

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(message);
    }

    alert('WhatsApp enquiry prepared. Replace the WhatsApp number in script.js before delivery.');
  });
}
