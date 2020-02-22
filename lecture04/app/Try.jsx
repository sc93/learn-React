const React = require('react');
const { Component } = React;
console.log('Try')

const Try = ({v,i}) => {
    return (
        <li>
            <b>{i+1}번째 시도 {v.result}</b>
            <div>{v.try[0]}</div>
            <div>{v.try[1]}</div>
            <div>{v.try[2]}</div>
            <div>{v.try[3]}</div>
        </li>
    );
}

module.exports = Try;