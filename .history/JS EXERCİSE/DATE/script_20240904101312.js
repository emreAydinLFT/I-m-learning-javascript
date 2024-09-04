const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedDate = `${day}/${month}/${year}`;

document.getElementById('current-date').textContent = `Bugünün tarihi: ${formattedDate}`;

dateDİc