import React from 'react';

import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handlePick = () => {
        const option_id = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[option_id];
        this.setState(() => ({selectedOption: option}));
    };

    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nada
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('unmount!')
    }

    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div className="background">
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                        <OptionModal
                            handleClearSelectedOption={this.handleClearSelectedOption}
                            selectedOption={this.state.selectedOption} />
                    </div>
                </div>
            </div>
        )
    }
}
