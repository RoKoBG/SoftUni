function attachEvents() {
    document
        .getElementById("btnLoadPosts")
        .addEventListener("click", loadPosts);
    document.getElementById("btnViewPost").addEventListener("click", viewPost);
    const posts = [];

    async function loadPosts() {
        try {
            const url = "http://localhost:3030/jsonstore/blog/posts";
            const res = await fetch(url);
            if (!res.ok) throw new Error();

            const data = await res.json();
            document.getElementById("posts").innerHTML = "";

            Object.entries(data).forEach(([key, value]) => {
                const optionEl = document.createElement("option");
                optionEl.value = key;
                optionEl.textContent = value.title;
                document.getElementById("posts").appendChild(optionEl);
                posts.push({ title: value.title, body: value.body });
            });
        } catch (e) {
            console.log(e);
        }
    }

    async function viewPost() {
        try {
            const selectedEle = document.getElementById("posts");
            const url = "http://localhost:3030/jsonstore/blog/comments";
            const res = await fetch(url);
            if (!res.ok) throw new Error();

            const data = await res.json();
            const comments = Object.values(data).filter(
                (el) => el.postId === selectedEle.value
            );
            document.getElementById("post-title").textContent =
                selectedEle.selectedOptions[0].textContent;
            const filtered = posts.filter(
                (p) => p.title === selectedEle.selectedOptions[0].textContent
            );
            document.getElementById(
                "post-body"
            ).innerHTML = `${filtered[0].body}`;
            document.getElementById("post-comments").innerHTML = "";
            comments.forEach((el) => {
                const liEle = document.createElement("li");
                liEle.textContent = el.text;
                document.getElementById("post-comments").appendChild(liEle);
            });
        } catch (e) {
            console.log(e);
        }
    }
}
attachEvents();
