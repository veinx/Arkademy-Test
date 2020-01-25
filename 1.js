const biodata = () => ({
    name: "Ivan Ardiansyah",
    age: 21,
    address:
        "Jln. OPI 1 No.32 , Kec. Jakabaring, Kota Palembang, Sumatera Selatan",
    hobbies: ["reading", "coding", "dota"],
    is_married: false,
    list_school: [
        {
            name: "SD Negeri 87 Palembang",
            year_in: 2004,
            year_out: 2010,
            major: null
        },
        {
            name: "SMP Negeri 48 Palembang",
            year_in: 2010,
            year_out: 2013,
            major: null
        },
        {
            name: "SMA Negeri 3 Palembang",
            year_in: 2013,
            year_out: 2016,
            major: "IPA"
        },
        
    ],
    skills: [
        {
            name: "Web Development",
            level: "Beginner"
        },
        {
            name: "Programming",
            level: "Begginer"
        },
        {
            name: "Design",
            level: "Advanced"
        }
    ],
    interest_in_coding: true
});

console.log(biodata());
