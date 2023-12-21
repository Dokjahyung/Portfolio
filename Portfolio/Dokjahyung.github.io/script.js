document.addEventListener("DOMContentLoaded", function() {
    const userData = {
        "login": "Dokjahyung",
        "avatar_url": "https://avatars.githubusercontent.com/u/117134089?v=4",
        "url": "https://api.github.com/users/Dokjahyung",
        "html_url": "https://github.com/Dokjahyung",
        "followers_url": "https://api.github.com/users/Dokjahyung/followers",
        "following_url": "https://api.github.com/users/Dokjahyung/following{/other_user}",
        "gists_url": "https://api.github.com/users/Dokjahyung/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Dokjahyung/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Dokjahyung/subscriptions",
        "organizations_url": "https://api.github.com/users/Dokjahyung/orgs",
        "repos_url": "https://api.github.com/users/Dokjahyung/repos",
        "events_url": "https://api.github.com/users/Dokjahyung/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Dokjahyung/received_events",
        "name": "Gabriel Sirvent",
        "location": "Fresno, California",
        "email": "gsirvent@me.com",
        "public_repos": 16,
        "followers": 2,
        "following": 4,
    };

    const userObject = JSON.parse(JSON.stringify(userData));

    const container = document.getElementById('githubUserData');

    // Create elements and apply styles
    const avatar = document.createElement('img');
    avatar.src = userObject.avatar_url;
    avatar.className = 'avatar';

    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    const username = document.createElement('h1');
    username.textContent = userObject.name || userObject.login;

    const userDetails = document.createElement('p');
    userDetails.textContent = `Followers: ${userObject.followers}, Following: ${userObject.following}`;

    const repoCount = document.createElement('p');
    repoCount.textContent = `Public Repositories: ${userObject.public_repos}`;

    const location = document.createElement('p');
    location.textContent = `Location: ${userObject.location}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${userObject.email || 'Not available'}`;

    const twitter = document.createElement('p');
    twitter.textContent = `Twitter: ${userObject.twitter_username || 'Not available'}`;


        // Specific repositories to display (replace these with the repositories you want)
        const specificRepos = ['Naraka-AI', 'Dr.Bulba', 'dataStructuresMLB'];

        const repoList = document.createElement('div');
        repoList.className = 'repo-list';
    
        const heading = document.createElement('h2');
        heading.textContent = 'Specific Repositories:';
    
        const ul = document.createElement('ul');
    
        specificRepos.forEach(repoName => {
            fetch(`https://api.github.com/repos/${userObject.login}/${repoName}`)
                .then(response => response.json())
                .then(repo => {
                    const li = document.createElement('li');
                    const repoLink = document.createElement('a');
                    repoLink.textContent = repo.full_name; // Display full name or customize as needed
                    repoLink.href = repo.html_url;
                    repoLink.target = '_blank';
                    li.appendChild(repoLink);
                    ul.appendChild(li);
                })
                .catch(error => console.error(`Error fetching ${repoName}:`, error));
        });

    // Append elements to container
    container.appendChild(avatar);
    userInfo.appendChild(username);
    userInfo.appendChild(userDetails);
    userInfo.appendChild(repoCount); // Adding repository count
    userInfo.appendChild(location); // Adding location
    userInfo.appendChild(email); // Adding email
    userInfo.appendChild(twitter); // Adding Twitter handle
    container.appendChild(userInfo);
    repoList.appendChild(heading);
    repoList.appendChild(ul);
    container.appendChild(repoList);
});