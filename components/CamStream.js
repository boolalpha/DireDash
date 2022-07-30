import React from 'react';
import styles from '../styles/CamStream.module.css'


// function CamStream(props) {
class CamStream extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.onLoad = this.onLoad.bind(this);
    }

    onLoad(e) {
        // console.log(e.target.src);
        setTimeout(
            function() {
                e.target.src = e.target.src.substring(0, (e.target.src.lastIndexOf("r=")+2))+(new Date()).getTime();
            }, 
            1000
        )
    }
    render() {
        return (
            <div className={styles.cctvContainer}>
                <p>Cam Number: {this.state.camNumber}</p>
                <img
                    className={styles.cctvCam}
                    src={this.state.source}
                    //onLoad={(e) => this.onLoad(e)}
                />
            </div>
        );
    };
}

export default CamStream;