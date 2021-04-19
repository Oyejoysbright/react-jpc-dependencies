import React, { Component } from 'react';
import LoaderBar from './LoaderBar';

/**
 * props: type: int, test: boolean, routes: boolean, onResult: function(Object obj)
 */
class FormSearch extends Component {


    constructor(props){
        super(props);

        this.type = this.props.type === undefined?1:parseInt(this.props.type);
        
        this.state = {
            formsearch: "", 
            formType: this.initFormType(this.type),
            formList: null,
            loading: false,
            cleared: false
        }
        this.noSearch = "no result found.";
        
    }


    static getDerivedStateFromProps(props, state) {
        if(typeof props.onInputResults === "object" && props.onInputResults.length > 0 && state.cleared === false){
            
            let resultList = props.onInputResults.map((e, i) =>{
                let count = 0;
                for (const key in e) {
                        if(count === 0) var id = e[key];
                        if(count === 1) var data = e[key];
                        count++;
                }

                return <li onClick={()=>props.onSelectedSearch(id, data)} key={i} >{data}</li>

            });

            return {formList: <ul>{resultList}</ul>};
        }
        return {formList: ""};
    }


    handleSubmit = (e)=>{
        e.preventDefault();
    }
    handleChange =(e)=>{
        const value = e.target.value;
        this.setState({cleared: false});
        if(value.length === 0){
            console.log("empty");
            this.setState({formList: "", formsearch: ""});
            if(this.type === 1){
                this.setState({cleared: true});
            }
            return;
        }

        this.setState({formsearch: value});

        if(this.type === 0){
            this.setState({loading: true});    
            this.props.onChange(value);
        }else{
            this.setState({cleared: true, formList: ""});
        }
        
        console.log(value, value.length);
    }

    handleClickClear =()=>{
       this.setState({formsearch: "", formList: "", cleared: true});
    }

    handleClickAdvance = ()=>{
        this.setState({loading: true, cleared: false});
        this.props.onChange(this.state.formsearch);
    }


    componentDidMount(){
        if(this.props.onSelectedSearch === undefined && this.props.onChange === undefined && this.props.onInputResults === undefined) throw new Error("FormSearch: this.props.onSelectedSearch or onInputResults or onSelectedSearch is undefined!");
    }

    componentDidUpdate(){
        setTimeout(() => {
                if(this.state.loading)this.setState({loading: false});
            }, 500);
    }
    render() {

        return (
                <form className='form-block' onSubmit={this.handleSubmit}>
                    <div className="img-form form-search">
                        <span className="form-search-icon">
                        <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>

                        </span>

                        <input  type="search" name="formsearch" 
                        value={this.state.formsearch}  
                        onChange={this.handleChange} 
                        placeholder={this.props.placeholder?this.props.placeholder:"Search.."}
                         />
                        {this.state.formType}                        
                    </div>

                    <div className="form-search-list">
                             <LoaderBar  show={this.state.loading}/>
                            {this.state.formList}
                    </div>
                                
                </form>
        );
    }

    initFormType(type){
        if(type === 1){
           return <span className="form-search-advance" onClick={this.handleClickAdvance}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="context-fill" 
                        fillOpacity="context-fill-opacity" d="M15.707,7.293l-6-6A1,1,0,0,0,8.293,2.707L12.586,7H1A1,1,0,0,0,1,9H12.586L8.293,13.293a1,1,0,1,0,1.414,1.414l6-6A1,1,0,0,0,15.707,7.293Z"/>
                    </svg>
                </span>;
        }else{
            return <span className="form-search-clear" onClick={this.handleClickClear}></span>;
        }
    

    }


}

export default FormSearch;