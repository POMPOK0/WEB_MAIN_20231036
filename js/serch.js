document.getElementById("serch_btn").addEventListener('click', googleSearch);

function googleSearch() {
    const searchTerm = document.getElementById("Search_input").value;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank");
    return false;
}
