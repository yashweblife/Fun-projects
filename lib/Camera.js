class Camera{
    stream;
    video;
    pointing=false;
    constructor(vid = document.createElement("video")){
        this.video = vid;
        this.init()
    }

    async init(){
        const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
        this.stream = stream;
        this.video.srcObject = stream;
        this.video.play()
    }
    pause = ()=>{
        this.video.pause()
    }
    play = ()=>{
        this.video.play()
    }
    stop = ()=>{
        this.video.stop()
    }
    close = ()=>{
        if(this.stream){
            this.stream.tracks.forEach((t)=>{
                t.stop()
            })
        }
    }
    reverse = ()=>{
        this.close()
        if(this.pointing){
        }else{

        }
    }
}