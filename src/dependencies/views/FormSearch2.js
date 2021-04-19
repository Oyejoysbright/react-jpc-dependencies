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
            loading: false
        }
        this.noSearch = "no result found.";
        this.initFakeData()
    }

    handleSubmit = (e)=>{
        // e.preventDefault();
    }
    handleChange =(e)=>{
        const value = e.target.value;

        if(this.type === 0 && value.length > 0){
            this.setState({loading: true});
            var list = this.testList(value);
            setTimeout(() => {
                if(this.state.loading)this.setState({loading: false});
            }, 500);
        }

        this.setState({
            formsearch: value, 
            formList: list
        });

    }

    handleClickClear =()=>{
       this.setState({formsearch: "", formList: ""});
    }

    handleClickAdvance = ()=>{
        var list = this.testList(this.state.formsearch);

        this.setState({
            formList: list
        });
    }

    handleClickSearchResult(id, data){
        if(this.props.routes === undefined || this.props.routes === true){
            this.props.onResult(id);
        }else{
            this.props.onResult(data);
        }
    }


    componentDidMount(){
        if(this.props.onSelectedSearch === undefined && this.props.onChange === undefined && this.props.onInputResults === undefined) throw new Error("FormSearch: this.props.onSelectedSearch or onInputResults or onSelectedSearch is undefined!");
    }

    componentDidUpdate(){
        
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
                        placeholder="Search Joke" 
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

    testList(value){
        
       if(value.trim() !== "" && value.trim().length !== 0){
        let result = this.bank.filter((e) => {
            let key = e[0];

            if(key.includes(value)){
                return true;
            }else{
                return false;
            }
        });
        
        if(!!result){
           let data = result.map((e, i) => {

                let obj = JSON.parse(e[1]);
                
                return <li onClick={()=>this.handleClickSearchResult(obj.id, obj.search)} key={i} dangerouslySetInnerHTML={{__html: obj.search}}/>

            });

            return <ul >{data}</ul>;
        }else{
            return <ul><li>{this.noSearch}</li></ul>
        }
       }
 
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

    fakeHandler(name, id){
        return `
            {"id": ${id}, "search": "<div><b>${name}</b><br/><small>Hey! you searched for me...</small></div>"}
        `;
    }

    initFakeData(){
        this.bank = [
            ["ade", this.fakeHandler("Ade", 1)],
            ["bisi", this.fakeHandler("Bisi", 2)],
            ["bimpe", this.fakeHandler("Bimpe", 3)],
            ["tolu", this.fakeHandler("Tolu", 4)],
            ["adey", this.fakeHandler("Adey", 5)],
        ];
    }
}

export default FormSearch;