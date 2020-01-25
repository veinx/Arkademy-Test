// start method
function biodata() 
{
    // variabel
    var name = "Ivan Ardiansyah";
    var age = 21;
    var address = "PERUM OPI Jakabaring ,Lrg. Bangau 1 Blok A 32 Palembang ,Indonesia.";
    var hobbies = ['Gaming','little bit coding','Reading Novel','traveling','graphic design'];
    var is_married = false;
    var list_school = {
        school name : {
            'SD Negeri 87 Palembang' : {
                year_in : 2004,
                year_out : 2010,
                major : null
            },
            'SMP Negeri 48 Palembang' : {
                year_in : 2010,
                year_out : 2013,
                major : null
            },
            'SMA Negeri 3 Palembang' : {
                year_in : 2013,
                year_out : 2016,
                major : 'science'
            }
        }
    };
    var skills = {
        skill_name : {
            photoshop : { level : 'advanced' },
            illustrator : { level : 'beginner' },
            pascal : { level : 'beginner' },
            javascript : { level : 'beginner' },
            php : { level : 'beginner' },
            css : { level : 'beginner' },
            html : {level : 'beginner'},
        }
    };
    var interest_in_coding = true;
    
    // variabel result
    let result = {name, age, address, hobbies, is_married, list_school, skills, interest_in_coding};
    let json_result = JSON.stringify(result);

    // return result
    return console.log(json_result);
    // let target = document.getElementById("target");
    // return target.innerHTML = result['name'];
}
// end method

// start method
biodata();
// let bio = biodata();

// // start method
// function print(){

//     // alses data JSON
//     let print = JSON.parse(bio);

//     // var target
//     var target = document.getElementById("target");

//     // return value
//     return target.innerHTML = print['name'];

// }
// // end method

// // start method
// print();
