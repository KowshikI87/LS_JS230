//copied from LS; see OneNote for explanation
document.getElementById('notice').onclick = e => {
  e.preventDefault(); // for consistency: not needed here

  e.currentTarget.setAttribute('class', 'hidden');
};