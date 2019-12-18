import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRessource} from '../actions'

class RessourcesSelecteur extends Component  {
    renderResources = ressources => {
        return ressources.map(ressource => <li key={ressource}>{ressource}</li>)
    }
    render () {
        return (
            <div className="row">
                <div className="col">
                    <button type="button" onClick={() => this.props.addRessource()} className="btn btn-raised btn-primary">Ajouter un nombre</button>
                </div>
                <div className="col">
                    Entiers
                    <ul>{this.renderResources(this.props.integerRessources)}</ul>
                </div>
                <div className="col">
                    Contiennent "1"
                </div>
                <div className="col">
                    Entier premiers
                </div>
                <div className="col">
                    Entiers premiers contenants "1"
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        integerRessources : state.ressource.ressourceList
    }
}

const mapDispatchToProps = {
    addRessource
}

export default connect(mapStateToProps, mapDispatchToProps) (RessourcesSelecteur)