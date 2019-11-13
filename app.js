const github = new Github;
const ui = new UI;

const searchuser = document.getElementById('searchuser');

searchuser.addEventListener('keyup',(e) => {
    const usertext = e.target.value;

    if(usertext !=''){
    github.getuser(usertext)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                    // show alert
                ui.showalert('User Not Found','alert alert-danger');

            }
            else{
                // show profile
                ui.showprofile(data.profile);
                ui.showrepos(data.repos);
            }
        })
    }
    else{

        // clear profile
        ui.clearprofile();
    }
});
