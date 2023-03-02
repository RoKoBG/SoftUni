function loadRepos() {
    const output = document.getElementById("repos");
    const username = document.getElementById("username").value;
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then((response) => {
            if (response.ok == false) {
                console.log(
                    "Error encountered:",
                    response.status,
                    response.statusText
                );
				return Promise.reject(`${response.status}: ${response.statusText}`);
				// Or throw better readability, again it goes in catch
				//throw `${response.status}: ${response.statusText}`
				
               
            } else {
                return response.json();
            }
        })
        .then((data) => {
			//clear the output html
			output.replaceChildren()
            for (let entry of data) {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${entry.html_url}">${entry.full_name}</a>`;
                output.appendChild(li);
            }
        }).catch(error=>{
			console.log(error.message)
			output.innerHTML = `<p>${error}</p>`;
		});
}
