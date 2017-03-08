
//random code creation to split up gunnarsAbandonees

const gunnarsAbandonees = ['Larissa', 'Sean', 'Bill', 'Porter', 'Jason', 'Ryan'];

const nobleMentors = ['Gabe', 'Luis', 'Mikkel'];

function randomAssign (students, mentors) {

    const maxLength = Math.floor (students.length / mentors.length);
    const results = mentors.map(() => []);

        while (students.length) {
            const randomNum = Math.floor(Math.random() * students.length);
            const student = students.splice(randomNum, 1)[0];
            
            for( let i = 0; i < results.length; i++) {
                if (results[i].length < maxLength) {
                    results[i].push(student);
                    break;
                }
            }
        }
    console.log(results);
}