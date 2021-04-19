import { Component } from 'react';

class TextLimit extends Component {
    
    render() {
        if(this.props.limit === undefined)throw new Error("Limit should be specified.");
        var content = this.props.children;
        var limit = parseInt(this.props.limit);
        
        if(content.length > limit){
            content = content.substr(0, limit)+"...";
        }
        return (
            content
        );
    }
}

export default TextLimit;