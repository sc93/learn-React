import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneList extends Component {
    static defaultProps = {
        data : [],
        onRemove : ()=> console.log('onRemove not defined'),
        onUpdate : ()=> console.log('onUpdate not defined'),
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.data !== nextProps.data;
    }
    render() { 
        console.log("PhoneList render")
        const getList = this.props.data.map((v,i)=><PhoneInfo key={i} info={v} onRemove={this.props.onRemove} onUpdate = {this.props.onUpdate}/>);
        return ( 
            <>
                {getList}
            </>
         );
    }
}
 
export default PhoneList;