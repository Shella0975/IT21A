class Employee {
    #name;
    #baseSalary;

    setName(val) {
        this.#name = val;
    }
    setBaseSalary(val) {
        this.#baseSalary = val;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        let bonus = 1000;
        return this.#baseSalary + bonus;
    }
}

const emp = new Employee();

document.getElementById('setEmployee').onclick = () => {
    const name = document.getElementById('name').value;
    const salary = parseFloat(document.getElementById('salary').value);
    emp.setName(name);
    emp.setBaseSalary(salary);
};

document.getElementById('showName').onclick = () => {
    document.getElementById('outputName').textContent = `Employee Name: ${emp.getName()}`;
};

document.getElementById('showSalary').onclick = () => {
    document.getElementById('outputSalary').textContent = `Total Salary (with bonus): $${emp.getSalary()}`;
};
