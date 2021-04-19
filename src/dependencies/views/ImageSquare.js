import React, { Component } from 'react';

class ImageSquare extends Component {

    canvas;

    constructor(props) {
        super(props);
        this.size = (this.props.size !== undefined)? parseInt(this.props.size):100;

        this.state = {url: ""};
        
    }
    
    
    startProcess(){
        var promise = new Promise((resolve, reject)=>{
            var image = new Image();
                image.onload = (e)=>resolve(e.target);                
                image.onerror = (e)=>reject("ImageSquare src loading error.");
            image.src=this.props.src;
        });
        
    promise.then((img)=>{
            return this.preRendering(img);
        }, (error)=>{
            throw new Error(error);
        }).then((res) => {
            
            this.setState({url: res});
        }, (error)=>{
            this.setState({url: ""});
        });
        
    }

    preRendering(img){

        const w = img.width;
        const h = img.height;
        var ctx = this.getCanvas().getContext('2d');
        if(w > h){
            var dh = w-h;
            var dx = dh/2;
           
                ctx.drawImage(img, dx, 0, h, h, 0, 0, this.size, this.size);
               return this.canvas.toDataURL(); 
                
        }else if(h > w){
            var dw = h-w;
            var dy = dw/2;
                ctx.drawImage(img, 0, dy, w, w, 0, 0, this.size, this.size);
                return this.canvas.toDataURL(); 
                
        }else{
            ctx.drawImage(img, 0, 0, w, w, 0, 0, this.size, this.size);
            return this.canvas.toDataURL(); 
            
        }

    }

    getCanvas(){
        /**
         * TODO: try drawing without specifying dimensions
         */
        var canvas = document.createElement('canvas');
            canvas.setAttribute("width", this.size);
            canvas.setAttribute("height", this.size);
            return this.canvas = canvas;
    }

    componentDidMount(){
        this.startProcess();
    }
    render() {
        if(this.props.src === undefined)throw new Error("Imagepath not specified. SRC attribute is needed for ImageSquare");
        
        
        return (
            <img src={this.state.url} alt="profile-pic" />
        );
        
        
    }

    
}

export default ImageSquare;