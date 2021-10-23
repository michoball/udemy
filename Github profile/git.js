const APIURL= 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.querySelector('.main');



async function getUser(username){
    try{  
         const {data} = await axios(APIURL + username);

         createUserCard(data);
         getRepos(username);

    } catch(err){
        createErrorCard('No profile with this username')
    }
}

async function getRepos(username){
    try{  
         const {data} = await axios(APIURL + username + '/repos?sort=created');

         addReposToCard(data);

    } catch(err){
        if(err.response.status === 404){
        createErrorCard('Problem fetching repos');
        }
    }
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos');

    repos.slice(0,10).forEach(repo=>{
        const repoEl = document.createElement('a');
        repoEl.innerText = repo.name;
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url;
        repoEl.target ='_blank';

        reposEl.appendChild(repoEl);
    })

}



function createUserCard(user){
    main.innerHTML = ` 
    <div class="card">
    <div>
    <img src="${user.avatar_url}" width="150px" height="150px" alt="${user.name}" class="avatar">
</div>
<div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>

    <ul>
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos}<strong>Repos</strong></li>
    </ul>

    <div id="repos">
    </div>

</div>
</div>`
}





function createErrorCard(msg){
    main.innerHTML = `<div class="card">
    <h1>${msg}</h1>
    </div>`
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const user = search.value;

    if(user){
        getUser(user);
        search.value ='';
    }
})