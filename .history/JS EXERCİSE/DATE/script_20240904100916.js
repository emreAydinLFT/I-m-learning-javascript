const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedDate = `${year}:${month}:${day}`;

document.getElementById('current-Date').textContent = `Bugünün tarihi: ${formattedDate}`;