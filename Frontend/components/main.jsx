import React from 'react';
import ReactDOM from 'react-dom';
import request from 'request';
import Header from './Header.jsx';
import ContentConteiner from './Content';



class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Sidebar />
                <ContentConteiner />
            </div>
        );
    }
}

class Breadcrumbs extends React.Component {
    render() {
        return (
            <ol className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li className="active">Data</li>
            </ol>

        );
    }
}


function renderAll() {
    ReactDOM.render(
        <HomePage />,
        document.getElementById('root')
    );
}

export  default renderAll();