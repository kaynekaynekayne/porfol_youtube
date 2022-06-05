class Youtube{
    constructor(key){
        this.key=key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    // mostPopular(){    
    //     return fetch(
    //         `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, 
    //         this.getRequestOptions)
    //     .then(response => response.json())
    //     .then(result => result.items);
    // }

    // search(query){
    //     return fetch(
    //         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`, 
    //         this.getRequestOptions)
    //     .then(response => response.json())
    //     .then(result=>result.items.map(item=>({...item, id:item.id.videoId})))
    //     // .then(items => setVideos(items))
    // }

    async channelPlaylist(channelId){
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=25&channelId=${channelId}&key=${this.key}`,
            this.requestOptions);
        const result = await response.json();
        return result.items;
    }

    async mostPopular(){    
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(query){
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
    
    
}

export default Youtube;