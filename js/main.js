fetch("https://api.icndb.com/jokes/random?escape=javascript&limitTo=[nerdy]&firstName=Leon&lastName=Noel")
    .then(res => res.json())
    .then(data => document.querySelector('p').innerText = data.value.joke);