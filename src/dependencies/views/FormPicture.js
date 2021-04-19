import React, { Component } from 'react';
class FormPicture extends Component {

    editValue = 4;
    cropRegionSize = 150;
    cropped = false;
    left = 0;
    top = 0;
    oW = 300;
    oH = 300;

    constructor(props) {
        super(props);
        this.state = {
            x: 0, y: 0,
            cw: this.cropRegionSize, ch: this.cropRegionSize,
            imageData : null, 
            image: null, 
            croppedImageData: "", 
            mW: this.oW+60,
            mH: this.oH,
            imageOverlay: "none",
            imagePallete: ""}
        this.showCaseRef = React.createRef();
        this.canvasRef = React.createRef();
        this.inputRef = React.createRef();
        this.palletteRef = React.createRef();
    }
    
    onZoomOutPhoto=()=>{

        this.canvasColor(0);
        
        this.setState(state =>{
            return {cw: state.cw - this.editValue , ch: (state.ch - this.editValue)}
        });
    }

    onZoomInPhoto =()=>{
        this.canvasColor(0); 
        this.setState(state =>{
            return {cw: state.cw + this.editValue , ch: (state.ch + this.editValue)}
        });
        
    }


    onImageCrop =()=>{

        this.setState({imageOverlay: "block"});
        var cropperLeft = this.canvasRef.current.offsetLeft;
        var cropperTop = this.canvasRef.current.offsetTop;
        var ctx = this.canvasRef.current.getContext('2d');
        ctx.drawImage(this.palletteRef.current, cropperLeft, cropperTop, this.state.cw, this.state.ch
            , 0, 0, this.state.cw, this.state.ch);

         this.cropped = true;  

           
    }

    onpickCutPoint = (e) =>{
       // console.log(e);
        let px = e.clientX - e.target.parentNode.clientLeft
        let py = e.clientY - e.target.parentNode.clientTop;
        
        let mx = px - (this.state.cw/2);
        let my = py - (this.state.ch/2);

        mx = mx < 0?0:mx;
        my = my < 0?0:my;

        let sremX = this.palletteRef.current.offsetWidth - px;
        let sremY = this.palletteRef.current.offsetHeight - py;

        mx = sremX < (this.state.cw / 2) ? this.palletteRef.current.offsetWidth - this.state.cw : mx;
        my = sremY < (this.state.ch / 2) ? this.palletteRef.current.offsetHeight - this.state.ch : my;
        this.setState({x: mx, y: my});
    }

    onCutTouched = (e)=>{
        let mx = e.clientX - (this.state.cw / 2);
        let my = e.clientY - (this.state.ch / 2);

        // mx = mx < (this.state.cw / 2)? 0 : mx;
        // my = my < (this.state.ch / 2)? 0 : my;

        // let sremX = this.palletteRef.current.offsetWidth - mx;
        // let sremY = this.palletteRef.current.offsetHeight - my;

        // mx = sremX < (this.state.cw / 2) ? this.palletteRef.current.offsetWidth - this.state.cw : mx;
        // my = sremY < (this.state.ch / 2) ? this.palletteRef.current.offsetHeight - this.state.ch : my;
  
        this.setState({x: mx, y: my});
    }
    onImageMovingFromRegion =(e) =>{
       e.preventDefault();
       this.left +=e.movementX;
       this.top +=e.movementY;


            if(e.ctrlKey){
                
                    this.setState({x: this.left, y: this.top});
                
            }
            
    }

        onTouchMovingImage = (e)=>{
            e.preventDefault();
            let vals = e.changedTouches;
            let x = vals[0].clientX;
            let y = vals[0].clientY;


           
           let pL =  x- this.canvasRef.current.parentNode.clientLeft;
           let pT = y- this.canvasRef.current.parentNode.clientTop;
           this.setState({x: pL, y: pT});
            // console.log( this.canvasRef.current);
        }

      onClearCanvas = ()=>{
        this.canvasRef.current.getContext('2d').clearRect(0, 0, this.state.cw, this.state.ch);
        this.setState({imageOverlay: "none"});
    }

      canvasColor = (n)=>{
          this.canvasRef.current.style.borderColor = (n === 0)?"red":"blue";
          this.cropped = (n === 0)?false:true;
      }

      onfileSelected = (e)=>{
        var file = e.target.files[0];
            
       const promise = new Promise((resolve, reject) => {
            const reader = new FileReader();
                reader.onload = (e)=>{
                   
                            resolve(e.target.result);
                       
                };
                reader.onerror = (e)=>{
                    reject(new Error("An error has occurred."));
                };
            reader.readAsDataURL(file);
        });
        
        promise.then(response =>{
            return response;
        }).then(data =>{
            var image = new Image();
                image.onload = (e)=>{
                    let ratio = image.width/ image.height;
                    if(this.oW/this.oH > ratio){
                        this.oW = this.oH * ratio;
                    }else{
                        this.oH = this.oW / ratio;
                    }
                    let canvas = this.palletteRef.current;
                        canvas.setAttribute("width", this.oW+"px");
                        canvas.setAttribute("height", this.oH+"px");
                    let context = canvas.getContext('2d');
                    context.drawImage(e.target, 0, 0, image.width, image.height, 0, 0, this.oW, this.oH);
                    this.setState({imageData: data, image: e.target, mW: this.oW + 55, mH: this.oH});
                };
                image.src = data;
        }, (error)=>{
            console.log(error);
        })
      }

      onSaveCrop =()=>{
            if(this.cropped){
                

                if(
                    this.state.cw >= 0 
                    && this.state.ch >= 0 
                    && (this.state.cw + this.state.x) <= this.palletteRef.current.offsetWidth 
                    && (this.state.ch + this.state.y) <= this.palletteRef.current.offsetHeight ){
                        
                        
                        this.setState({imageData: null, image: null,
                            croppedImageData: this.canvasRef.current.toDataURL()});
                       this.canvasColor(0);
                       this.onClearCanvas();
                       
                    }
            }
      }


      componentDidUpdate(props, state){
          if(this.state.croppedImageData !=="" && state.croppedImageData !== this.state.croppedImageData){
            let e = {
                target:{
                    name: this.props.name,
                    value: this.state.croppedImageData
                }
            }

            this.props.onChange(e);
          }
      }
      
      closeMe =()=>{
        this.setState({imageData: null});
      }



    render() {
        return (
            <div className="form-file-dp" >                
                <div id="image-showcase">
                    
                    <img src={this.props.value !== undefined ? this.props.value : this.state.croppedImageData} alt="" />
                    {this.state.croppedImageData === "" ? <svg className="form-file-avatar" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="2em" width="2em" >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>: ""}
                    <label htmlFor="form-dp-picker" id="image-picker">
                    <svg className="form-file-choose" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z"/>
                    </svg>
                    </label>
                    <input id="form-dp-picker" type="file" onChange={this.onfileSelected} />
                    <input type="hidden" name={this.props.name} value={this.state.croppedImageData}/>
                </div>
                
                <div id="image-crop-dialogue" style={{display: (this.state.imageData === null)?"none":"block"}}>
                    <div id="image-crop-wrapper" style={{width: this.state.mW, height: this.state.mH}}>  

                        <canvas ref={this.canvasRef} id="image-crop-region" width={this.state.cw} height={this.state.ch}
                         onClick={this.onCutTouched}
                        style={{left: this.state.x, top: this.state.y}} ></canvas> 

                        <canvas  id="image-original" ref={this.palletteRef} onClick={this.onpickCutPoint}></canvas>
                        <div id="form-pic-overlay"  style={{display: this.state.imageOverlay}}></div>              
                   
                         <Controller listener={[this.onZoomInPhoto, this.onZoomOutPhoto, 
                            this.onImageCrop, this.onClearCanvas, this.onSaveCrop, this.closeMe]} /> 
                    </div>
                </div>
            </div>
            );
    }
}

function Controller(props){
   

    return(
        <ul id="image-control-wrapper">
            <li onClick={props.listener[0]}>+</li>
            <li onClick={props.listener[1]}>-</li>           
            <li onClick={props.listener[2]}>crop</li>
            <li onClick={props.listener[3]}>clear</li>
            <li onClick={props.listener[4]}>save</li>
            <li onClick={props.listener[5]}>close</li>
        </ul>
    );
}

export default FormPicture;