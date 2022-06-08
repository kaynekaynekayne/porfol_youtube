class Youtube{
    constructor(key){
        this.key=key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async channelPlaylist(channelId){ //채널의 재생목록을 받아오는 용도
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=26&channelId=${channelId}&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        console.log(result)
        console.log("i'm in class of channel playlist")
        
        return result.items;
    }
    
    async playlistItems(plId){ //재생목록의 동영상들을 받아오는 용도
        console.log(plId);

        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=26&playlistId=${plId}&key=${this.key}`, 
            this.getRequestOptions);
        console.log(response);
        const result=await response.json();
        console.log(result); 
        console.log("i'm in class of playlist items");
        return result.items;
        
        // return result.items.map(item=>({...item, id: item.snippet.resourceId.videoId}));
        // return result.items && result.items.map(item=>({...item, id: item.snippet.resourceId.videoId}));
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