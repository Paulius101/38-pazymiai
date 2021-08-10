class ClassDiary {
    constructor(name) {
        this.name = name;
        this.class = [];
        // this.lessons = [];
        // this.grades = [];
        // this.authenticator = 0;
    }

    prisistatymas() {
        console.log(`Welcome to "${this.name}".`);
    }

    pridetiMokini(name) {
        this.class.push({
            name: name,
            stuff: []
        })
        console.log(`${name} has joined "${this.name}"`);
    }

    pridetiPamoka(className) {
        for (let i = 0; i < this.class.length; i++) {
            const element = this.class[i];
            element.stuff.push({
                className: className,
                grades: []
            })
            // console.log(element.stuff);
        }

        console.log(`${className} has been added as a lesson.`);

    }

    pridetiPazymi(date, name, className, grade) {
        for (let i = 0; i < this.class.length; i++) {
            const element = this.class[i];
            if (element.name === name) {
                for (let y = 0; y < this.element.stuff.length; y++) {
                    const elementy = this.element.stuff[y];
                    if (elementy.className === className) {
                        elementy.grades.push({
                            date: date,
                            grade: grade
                        })
                    }
                }
            }

        }

    }



    isspaudintiPazymius(name) {
        console.log(`${name} pazymiai.`);
        for (let i = 0; i < this.class.length; i++) {
            const element = this.class[i];
            if (element.name === name) {
                for (let y = 0; y < this.element.stuff.length; y++) {
                    const elementy = this.element.stuff[y];
                    console.log(`${elementy.className}:${elementy.grade}`);
                }
            }


        }

    }

    isspausdintiVidurkius() {

    }
}

module.exports = ClassDiary;