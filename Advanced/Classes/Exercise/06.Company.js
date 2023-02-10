class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        } else {
            if (!this.departments[department]) {
                this.departments[department] = [];
            }
            this.departments[department].push({ name, salary, position });
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }
    bestDepartment() {
        const avgDepartments = {};
        Object.keys(this.departments).forEach((key) => {
            const avg =
                this.departments[key].reduce(
                    (acc, curr) => acc + curr.salary,
                    0
                ) / this.departments[key].length;
            avgDepartments[key] = avg;
        });
        const sorted = Object.entries(avgDepartments).sort(
            (a, b) => b[1] - a[1]
        );
        let result = `Best Department is: ${sorted[0][0]}\nAverage salary: ${sorted[0][1].toFixed(2)}`;
        this.departments[sorted[0][0]]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach((x) => {
                result += `\n${x.name} ${x.salary} ${x.position}`;
            });
        return result;
        
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
