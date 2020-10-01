class GitHub {
  constructor() {
    this.client_id = 'ddbd104309e67e614a02';
    this.client_secret = 'd47411c0e06542c8b5cef02368410392ffb631cf';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    return { profile: profile };
  }
}

// https://api.github.com/users/bartklaasse
// https://api.github.com/users/bartklaasse/repos
