class GitHub {
  constructor() {
    //These keys have obviously been disabled by now.
    this.client_id = 'ddbd104309e67e614a02';
    this.client_secret = 'd47411c0e06542c8b5cef02368410392ffb631cf';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return { profile: profile, repos: repos };
  }
}

// https://api.github.com/users/bartklaasse
// https://api.github.com/users/bartklaasse/repos
