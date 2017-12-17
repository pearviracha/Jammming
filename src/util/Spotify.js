const clientId = '56f5e1c8f43e44418e48f7f1f61b51fe';
const redirectUri = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInmatch) {
      //what to return?
    }
    const expiresIn = //step 80!!
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/'); //this wipes access token and url parameters, allows us to grab new token when it expires
    return accessToken;
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
},

  search(term) {
    constant accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }
  }.then(response => {
    return response.json();
  }).then(jsonResponse => {
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
    }));
  });
};

  savePlaylist(name, trackURIs) {
    if (!name || !trackURIs) {
      return;
    }
    const accessToekn = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    let userId;

    return fetch('https://api.spotify.com/v1/me', )
  }

export default Spotify;
