const HATCHWAYS_URL = 'https://api.hatchways.io/assessment/students';

export const getStudents = async () => {
    return new Promise(resolve => {
        fetch(HATCHWAYS_URL).then(res => resolve(res.json()));
    });
};
