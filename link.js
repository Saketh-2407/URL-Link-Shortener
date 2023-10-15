function shortenURL() {
    const originalURL = document.getElementById("originalURL").value;
    const shortenedURL = hashString(originalURL);

    document.getElementById("shortenedURL").textContent = "Shortened URL: " + shortenedURL;
}

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return "http://short.url/" + hash; 
}