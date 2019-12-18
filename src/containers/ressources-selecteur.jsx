import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRessource} from '../actions'
import {getIntegerList, getContainsOneList, getPrimeNumber, getSpecialNumbersList} from '../selectors'

class RessourcesSelecteur extends Component  {
    renderRessources = ressources => {
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
                    <ul>{this.renderRessources(this.props.integerRessources)}</ul>
                </div>
                <div className="col">
                    Contiennent "1"
                    <ul>{this.renderRessources(this.props.containsOneRessources)}</ul>
                </div>
                <div className="col">
                    Entier premiers
                    <ul>{this.renderRessources(this.props.primeNumber)}</ul>
                </div>
                <div className="col">
                    Entiers premiers contenants "1"
                    <ul>{this.renderRessources(this.props.specialNumberList)}</ul>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        integerRessources : getIntegerList(state),
        containsOneRessources : getContainsOneList(state),
        primeNumber : getPrimeNumber(state),
        specialNumberList : getSpecialNumbersList(state)
    }
}

const mapDispatchToProps = {
    addRessource
}

export default connect(mapStateToProps, mapDispatchToProps) (RessourcesSelecteur)