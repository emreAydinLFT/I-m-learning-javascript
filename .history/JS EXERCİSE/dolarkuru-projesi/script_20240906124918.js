var xhr = new XMLHttpRequest();
var url = 'https://api.yapikredi.com.tr/api/stockmarket/v1/bistIndices';
xhr.open('GET', url);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'\nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'\nBody: '+this.responseText);
    }
};

xhr.send('');