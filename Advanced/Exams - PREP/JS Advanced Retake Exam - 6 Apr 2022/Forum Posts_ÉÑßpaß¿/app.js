window.addEventListener("load", solve);

function solve() {
    const postTitle = document.getElementById("post-title");
    const postCategory = document.getElementById("post-category");
    const postContent = document.getElementById("post-content");
    const publishBtn = document.getElementById("publish-btn");
    const clearBtn = document.getElementById("clear-btn");

    publishBtn.addEventListener("click", publish);

    function publish(e) {
        e.preventDefault();

        const title = postTitle.value;
        const category = postCategory.value;
        const content = postContent.value;

        if (!title || !category || !content) {
            return;
        }

        const ul = document.getElementById("review-list");
        const li = document.createElement("li");
        li.classList.add("rpost");
        li.innerHTML = `
        <article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p>
        </article> 
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>
       
        `;
        ul.appendChild(li);
        postTitle.value = "";
        postCategory.value = "";
        postContent.value = "";

        const actionBtns = Array.from(document.querySelectorAll(".action-btn"));
        const editBtn = actionBtns[0];
        const approveBtn = actionBtns[1];

        editBtn.addEventListener("click", (event) => {
            event.preventDefault();
            postTitle.value = title;
            postCategory.value = category;
            postContent.value = content;
            li.remove();
        });
        approveBtn.addEventListener("click", approve);

        function approve() {
            li.remove();
            const publishUl = document.getElementById("published-list");
            const pubLi = document.createElement("li");
            pubLi.classList.add("rpost");
            pubLi.innerHTML = `
        <article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p>
        </article> 
        `;
            publishUl.appendChild(pubLi);
            clearBtn.addEventListener("click", () => {
                pubLi.remove();
            });
        }
    }
}
