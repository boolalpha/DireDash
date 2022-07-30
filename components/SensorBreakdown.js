import styles from '../styles/SensorBreakdown.module.css'

function getColor(min, max, value){
    const gap = (max - min) / 3;

    if(value > (min + (gap * 2))) {
        return `${styles.red}`;
    } else if (value > (min + gap)) {
        return `${styles.orange}`;
    } else {
        return `${styles.green}`;
    }

}

function SensorBreakdown(props) {
    // console.log(props);

    const {title, readings, units} = props;

    const avg = Object.values(readings).reduce((a, b) => a + b) / Object.keys(readings).length;
    const max = Math.max(...Object.values(readings));
    const min = Math.min(...Object.values(readings));
    // console.log(max);
    // console.log(min);
    
    // var items = 

    // console.log(avg)
    // console.log(readings);

    return (
        <div className={styles.breakdownContainer}>
            <h3>{title}</h3>
            <div className={styles.sensorAverageContainer}>
                <h4 className={styles.sensorAverageTitle}>Average Reading</h4>
                <p>{avg}</p>
            </div>
            <div className={styles.building}>
                {
                    Object.keys(readings).map(floor => (
                        <div className={styles.floor}>
                            <p className={styles.floorName}>{floor}</p>
                            <p className={`${styles.floorReading} ` + getColor(min, max, readings[floor])}>{readings[floor]}{units}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SensorBreakdown;