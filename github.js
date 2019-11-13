class Github{
    constructor(){
        this.client_id = '612b58eb469ad8971804';
        this.client_secret = '2a8b3d1f81927cd923cd3d32ef580c5f5be16968';
        this.repos_count = 5;
        this.repos_sort = 'created :asc';
    }


async getuser(user){
    const profileresponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reporesponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileresponse.json();
    const repos = await reporesponse.json();

    return{
        profile,
        repos
    }
}
} 