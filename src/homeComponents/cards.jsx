import React, { Component } from 'react';
import ImgMediaCard2 from "./card2";
import Typewriter from "typewriter-effect";
import "./style.scss";
import './style.css';
import { getDetails } from "./cardDetails";

class Cards extends Component {
    state = {
        cards: [],
        filter: ""
    };

    componentDidMount() {
        this.setState({ cards: getDetails() });
    }

    getData = (e) => {
        this.setState({ filter: e.target.value });
    }

    render() {
        return (
            <div>
                <div className="filter-container flex">
                <div className="type display-3">
                <span className="badge badge-dark">
                    <Typewriter
                        options={{
                            strings: ['Graph Algorithms', 'Sorting Algorithms', "8 Queen"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            </div>
                    <input
                        type="text"
                        placeholder="Search cards..."
                        onChange={this.getData}
                        className="filter-input"
                    />
                </div>
                <div className="gradient-bg">
                    <div className="card-container">
                        {
                            this.state.cards.filter(card =>
                                card.title.toLowerCase().includes(this.state.filter.toLowerCase()) ||
                                card.description.toLowerCase().includes(this.state.filter.toLowerCase())
                            ).map(card => (
                                <div key={card.id} className="card-wrapper">
                                    <ImgMediaCard2
                                        className="d-flex flex-wrap"
                                        card={card}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="gradients-container">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                        <div className="interactive"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
