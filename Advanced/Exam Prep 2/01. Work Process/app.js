function solve() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const mail = document.getElementById("email");
    const birth = document.getElementById("birth");
    const pos = document.getElementById("position");
    const salary = document.getElementById("salary");
    const tbody = document.getElementById("tbody");
    const addSalary = document.getElementById("sum");

    document.getElementById("add-worker").addEventListener("click", (event) => {
        event.preventDefault();
        if (
            fname.value &&
            lname.value &&
            mail.value &&
            birth.value &&
            pos.value &&
            salary.value
        ) {
            addEmployee(
                event,
                fname.value,
                lname.value,
                mail.value,
                birth.value,
                pos.value,
                salary.value
            );

            clearInputFields();
        }
    });
    function addEmployee(event, fname, lname, mail, birth, pos, salary) {
        const tr = createElement("tr");
        createElement("td", `${fname}`, tr);
        createElement("td", `${lname}`, tr);
        createElement("td", `${mail}`, tr);
        createElement("td", `${birth}`, tr);
        createElement("td", `${pos}`, tr);
        createElement("td", `${salary}`, tr);

        const td = createElement("td", "", tr);
        let fireBtn = createElement("button", "Fired", td);
        fireBtn.setAttribute("class", "fired");
        let edidBtn = createElement("button", "Edit", td);
        edidBtn.setAttribute("class", "edit");
        tbody.appendChild(tr);

        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent = (Number(salary) + currentSalary).toFixed(2);
        edidBtn.addEventListener("click", (event) =>
            editWorker(event, fname, lname, mail, birth, pos, salary)
        );
        fireBtn.addEventListener("click", (event) =>
            fireEmployee(event, salary)
        );
    }

    
    function fireEmployee(event, salary) {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        reduceSalary(salary);
    }

    function editWorker(
        event,
        firstName,
        lastName,
        emailAddress,
        birthDate,
        currentPosition,
        currentSalary
    ) {
        event.preventDefault();
        event.target.parentNode.parentNode.remove();
        fname.value = firstName;
        lname.value = lastName;
        mail.value = emailAddress;
        birth.value = birthDate;
        pos.value = currentPosition;
        salary.value = currentSalary;

        reduceSalary(currentSalary);
    }
    function reduceSalary(salary) {
        const sumSalary = Number(addSalary.textContent);
        addSalary.textContent = Math.abs((Number(salary)-sumSalary)).toFixed(2);
    }
    function createElement(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

    function clearInputFields() {
        fname.value = "";
        lname.value = "";
        mail.value = "";
        birth.value = "";
        pos.value = "";
        salary.value = "";
    }
}
solve();
