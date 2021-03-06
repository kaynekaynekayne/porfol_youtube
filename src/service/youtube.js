class Youtube{
    constructor(key){
        this.key=key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async channelPlaylist(channelId){
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=26&channelId=${channelId}&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        
        return result.items;
    }
    
    async playlistItems(plId){
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=26&playlistId=${plId}&key=${this.key}`, 
            this.getRequestOptions);
        const result=await response.json();
        
        return result.items.map(item=>({...item, id: item.snippet.resourceId.videoId}));
    }

    async mostPopular(){    
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(query){
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
    
    
}

export default Youtube;