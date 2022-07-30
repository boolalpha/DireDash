import React from 'react';
import styles from '../styles/TaskTrackerItem.module.css';

class TaskTrackerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({notes: e.target.value});
    }

    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
    }
    
    getOxygen(value) {
        value = parseFloat(value);
        if(value <= 95) {
            return styles.red;
        } else if(value <= 97.5) {
            return styles.orange;
        } else {
            return styles.green;
        }
    }

    getBodyTemp(value) {
        value = parseFloat(value);
        if(value <= 95) {
            return styles.red;
        } else if(value <= 97.5) {
            return styles.orange;
        } else if(value <= 100) {
            return styles.green;
        } else if(value <= 102) {
            return styles.orange;
        } else {
            return styles.red;
        }
    }

    getPulse(value) {
        value = parseFloat(value);
        if(value <= 73.33) {
            return styles.green;
        } else if (value <= 86.66) {
            return styles.orange;
        } else {
            return styles.red;
        }
    }

    render() {
        return (
            <div className={styles.taskTrackerItemContainer}>
                <div className={styles.taskTrackerValuesContainer}>
                    <div className={styles.taskTrackerHeader}>
                        <select value={this.state.department} className={styles.dropdown}>
                            <option value="Police">
                                Police Department
                            </option>
                            <option value="Fire">
                                Fire Department
                            </option>
                            <option value="Redisdent">
                                Resident of Building
                            </option>
                        </select>
                        <p>{this.state.name}</p>
                        <p>{this.state.time}</p>
                        <select value={this.state.status} className={styles.dropdown}>
                            <option value="In Building">
                                In Building
                            </option>
                            <option value="Awaiting">
                                Awaiting Task
                            </option>
                            <option value="Stationed">
                                Stationed Outside Building
                            </option>
                        </select>
                    </div>
                    <div className={styles.taskTrackerVitals}>
                        <div>
                            <p>Oxygen</p>
                            <p className={this.getOxygen(this.state.oxygen)}>{this.state.oxygen}%</p>
                        </div>
                        <div>
                            <p>Body Temperature</p>
                            <p className={this.getBodyTemp(this.state.temperature)}>{this.state.temperature}°</p>
                        </div>
                        <div>
                            <p>Pulse</p>
                            <p className={this.getPulse(this.state.pulse)}>{this.state.pulse} BPM</p>
                        </div>
                    </div>
                </div>
                <textarea className={styles.taskNotes} type="text" value={this.state.notes} onChange={this.handleChange} onKeyDown={this.handleKeyDown}>
                </textarea>
            </div>
        );
    };
}

export default TaskTrackerItem;