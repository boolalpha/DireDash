import Head from 'next/head'
import Image from 'next/image'

import SensorBreakdown from '../components/SensorBreakdown'
import SocialPost from '../components/SocialPost'
import { Carousel } from 'react-responsive-carousel';
import TaskTrackerItem from '../components/TaskTrackerItem';
import Header from '../components/Header';
import CamStream from '../components/CamStream';

import styles from '../styles/Details.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import { hidePopUps, showPopUp, selectSensorPage, toggleSocialPost, postSubmission, toggleTaskTracker } from '../public/js/detailsFunctions.js'

function Details() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Emergency Dashboard</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-3SG9WPWGKJ"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-3SG9WPWGKJ');
            </script> */}
        </Head>

        <main className={styles.main}> 
            
            <Header />

            <div className={styles.primaryDisplay}>
                <h1 className={styles.title}>
                    Campione Building
                </h1>
                <Image 
                    src="/img/sampleBuildingTransparent.png"
                    width={300}
                    height={300}
                    alt="3D image of the sample building"
                    className={styles.mainImage}
                />
            </div>
            <div className={styles.buttonsDisplay}>
                <button onClick={() => showPopUp("info")} className={`${styles.detailButton} ${styles.infoButton}`}>
                    Info
                </button>
                <button onClick={() => showPopUp("sensors")} className={`${styles.detailButton} ${styles.sensorsButton}`}>
                    Sensors
                </button>
                <button onClick={() => showPopUp("social")} className={`${styles.detailButton} ${styles.socialButton}`}>
                    Social
                </button>
                <button onClick={() => showPopUp("map")} className={`${styles.detailButton} ${styles.mapButton}`}>
                    Map
                </button>
                <button onClick={() => showPopUp("emergency")} className={`${styles.detailButton} ${styles.emergencyButton}`}>
                    Emergency
                </button>
            </div>

            {/* Info content pop up */}
            <div id="info" className={styles.popUp} onClick={(e) => hidePopUps(e.target)}>
                <div className={styles.popUpContent}>
                    <h2 className={styles.popUpTitle}>Info</h2>
                    <div className={styles.popUpInnerContent}>
                        <div className={styles.popUpSubContainer}>
                            <h3 className={styles.popUpSubTitle}>Year Built</h3>
                            <p>1997</p>
                        </div>
                        <div className={styles.popUpSubContainer}>
                            <h3 className={styles.popUpSubTitle}>Address Type</h3>
                            <p>Commercial</p>
                        </div>
                        <div className={styles.popUpSubContainer}>
                            <h3 className={styles.popUpSubTitle}>Address</h3>
                            <p>123 Esempio St.</p>
                        </div>
                        <div className={styles.popUpSubContainer}>
                            <h3 className={styles.popUpSubTitle}>Number of Floors</h3>
                            <p>20</p>
                        </div>
                        <div className={styles.popUpSubContainer}>
                            <h3 className={styles.popUpSubTitle}>Number of Inhabitants</h3>
                            <p>150</p>
                        </div>
                        <div className={styles.popUpSubContainer}>
                            <div>
                                <h3 className={styles.popUpSubTitle}>Number of Entrances</h3>
                                <p>8</p>
                            </div>
                            <div>
                                <h3 className={styles.popUpSubTitle}>Number of Stairwells</h3>
                                <p>4</p>
                            </div>
                        </div>
                        <div className={styles.popUpSubContainer}>
                            <h3 className={styles.popUpSubTitle}>Fire Suppresison</h3>
                            <p>Sprinkler System</p>
                        </div>
                        <div className={styles.popUpSubContainer}>
                            <h3 className={styles.popUpSubTitle}>Utility Systems</h3>
                            <div className={styles.utilitiesContainer}>
                                <div className={styles.subUtilityContainer}>
                                    <h4 className={styles.subUtilityTitle}>Heat</h4>
                                    <p className={styles.subUtilityValue}>Gas</p>
                                </div>
                                <div className={styles.subUtilityContainer}>
                                    <h4 className={styles.subUtilityTitle}>Electric</h4>
                                    <p>Solar</p>
                                </div>
                                <div className={styles.subUtilityContainer}>
                                    <h4 className={styles.subUtilityTitle}>Water</h4>
                                    <p>Municipal</p>
                                </div>
                                <div className={styles.subUtilityContainer}>
                                    <h4 className={styles.subUtilityTitle}>Sewage</h4>
                                    <p>Septic Tank</p>
                                </div>
                                <div className={styles.subUtilityContainer}>
                                    <h4 className={styles.subUtilityTitle}>Telecommunications</h4>
                                    <p>Fiber</p>
                                </div>
                                <div className={styles.subUtilityContainer}>
                                    <h4 className={styles.subUtilityTitle}>Garbage Disposal</h4>
                                    <p>Trash Shoot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sensors content pop up */}
            <div id="sensors" className={styles.popUp} onClick={(e) => hidePopUps(e.target)}>
                <div className={styles.popUpContent}>
                    <h2 className={styles.popUpTitle}>Sensor Readings</h2>
                    <ul className={styles.sensorTabsContainer}>
                        <li id={styles.activeTab} className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Temperature</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Humidity</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Motion Sensors</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>CCTV Streams</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Contact Sensors</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Air Quality</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Energy Consumption</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Smoke Detectors</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Flood Sensors</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Earthquake Sensors</a></li>
                        <li className={styles.sensorTab}><a className={styles.innerSensorTab} onClick={(e) => selectSensorPage(e.target.parentNode)}>Fire Suppression</a></li>
                    </ul>
                    <div className={`${styles.popUpInnerContent} ${styles.sensorInnerContent}`}>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Temperature Readings"
                                readings = {{1: 68, 2: 72, 3: 73, 4: 71, 5:72, 6:70, 7:73, 8:74, 9:75, 10:76, 11:73, 12:73, 13:72, 14:74, 15:75, 16:74, 17:75, 18:78, 19:86, 20:120}}
                                units = "° F"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Humidity Readings"
                                readings = {{1: 45, 2: 46, 3: 49, 4: 48, 5:49, 6:50, 7:51, 8:55, 9:53, 10:52, 11:53, 12:54, 13:55, 14:57, 15:59, 16:58, 17:60, 18:61, 19:63, 20:68}}
                                units = "%"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Motion Sensors"
                                readings = {{1: 0, 2: 0, 3: 1, 4: 0, 5:0, 6:0, 7:1, 8:1, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:1, 17:1, 18:1, 19:1, 20:1}}
                                units = " Active"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <h3>CCTV Streams</h3>
                            <div className={styles.camStreamContainer}>
                                <CamStream
                                    camNumber="1"
                                    source="http://83.3.56.24:5000/cgi-bin/viewer/video.jpg?r="
                                    load="true"
                                /> 
                                <CamStream
                                    camNumber="2"
                                    source="http://158.58.130.148:80/mjpg/video.mjpg"
                                    load="true"
                                /> 
                                <CamStream
                                    camNumber="3"
                                    source="http://166.159.102.252:80/mjpg/video.mjpg"
                                    load="false"
                                /> 
                                <CamStream
                                    camNumber="4"
                                    source="http://95.154.104.187:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER"
                                    load="false"
                                /> 
                                <CamStream
                                    camNumber="5"
                                    source="http://212.88.135.186:8081/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER"
                                    load="false"
                                /> 
                                <CamStream
                                    camNumber="6"
                                    source="http://217.24.53.20:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER"
                                    load="false"
                                /> 
                                <CamStream
                                    camNumber="7"
                                    source="http://82.208.151.106:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER"
                                    load="false"
                                /> 
                                <CamStream
                                    camNumber="8"
                                    source="http://150.176.10.89:80/cgi-bin/camera?resolution=640&amp;quality=1&amp;Language=0&amp;1659064371"
                                    load="false"
                                />
                            </div>
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Contact Sensors"
                                readings = {{1: 1, 2: 1, 3: 1, 4: 1, 5:1, 6:1, 7:1, 8:1, 9:1, 10:1, 11:1, 12:1, 13:1, 14:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1}}
                                units = " Active"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Air Quality (CO2)"
                                readings = {{1: 4, 2: 3, 3: 4, 4: 3, 5:2, 6:3, 7:2, 8:2, 9:3, 10:3, 11:4, 12:3, 13:4, 14:4, 15:4, 16:4, 17:4, 18:5, 19:8, 20:10}}
                                units = " %"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Energy Consumption"
                                readings = {{1: 27.3, 2: 29.2, 3: 44.5, 4: 33.33, 5:32.34, 6:38.5, 7:28.9, 8:29.8, 9:34.5, 10:23.2, 11:42.1, 12:31.33, 13:40.02, 14:26.8, 15:29.9, 16:30.5, 17:38.5, 18:44.23, 19:48.9, 20:55.6}}
                                units = " kWh"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Smoke Detectors"
                                readings = {{1: 0, 2: 0, 3: 0, 4: 0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:1, 11:1, 12:1, 13:1, 14:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1}}
                                units = " Active"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Flood Sensors"
                                readings = {{1: 0, 2: 0, 3: 0, 4: 0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:0, 17:0, 18:0, 19:0, 20:0}}
                                units = " Active"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Earthquake Sensors"
                                readings = {{1: 0, 2: 0, 3: 0, 4: 0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:0, 17:0, 18:0, 19:0, 20:0}}
                                units = " Active"
                            />
                        </div>
                        <div className={styles.sensorPage}>
                            <SensorBreakdown 
                                title="Fire Suppression"
                                readings = {{1: 0, 2: 0, 3: 0, 4: 0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0, 13:0, 14:0, 15:0, 16:1, 17:1, 18:1, 19:1, 20:1}}
                                units = " Active"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Social content pop up */}
            <div id="social" className={styles.popUp} onClick={(e) => hidePopUps(e.target)}>
                <div className={styles.popUpContent}>
                    <h2 className={styles.popUpTitle}>Social Feed</h2>
                    <div className={styles.popUpInnerContent}>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "John Doe"
                                date = "7/21/22"
                                time = "07:22 PM"
                                category = "Fire"
                                notes = "I saw smoke coming from the top floor stairwell door!!"
                            />
                        </div>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "Jane Doe"
                                date = "7/21/22"
                                time = "05:32 PM"
                                category = "Etc."
                                notes = "Someone left trash bags in the hall of floor 13"
                            />
                        </div>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "John Smith"
                                date = "7/21/22"
                                time = "08:00 AM"
                                category = "Flood"
                                notes = "The first floor has a puddle of water is this flooding?"
                            />
                        </div>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "Jane Smith"
                                date = "7/20/22"
                                time = "07:30 PM"
                                category = "Etc."
                                notes = "Saw the enterance doors unlocked and open"
                            />
                        </div>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "Jack Doe"
                                date = "7/20/22"
                                time = "07:00 PM"
                                category = "Fire"
                                notes = "Someones fire alarm keeps going off!"
                            />
                        </div>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "Janette Doe"
                                date = "7/19/22"
                                time = "05:00 PM"
                                category = "Etc."
                                notes = "Is anyone else feeling like thier floor is very humid?"
                            />
                        </div>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "John Williams"
                                date = "7/19/22"
                                time = "11:00 AM"
                                category = "Etc."
                                notes = "Who do I contact about a clogged dryer exhaust?"
                            />
                        </div>
                        <div className={styles.postWrapper}>
                            <SocialPost
                                user = "Jane Williams"
                                date = "7/18/22"
                                time = "10:00 PM"
                                category = "Etc."
                                notes = "Crazy amount of stomping on the floor above is everyone okay?"
                            />
                        </div>
                    </div>
                    <div className={styles.postToSocial} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.addPostContainer} onClick={(e) => {e.stopPropagation();toggleSocialPost(e.target.parentNode);}}>
                            <img
                                className={styles.addPostButton}
                                src="/img/plus.png"
                                alt="Button to add a post to the social feed"
                                width={25}
                                height={25}
                                onClick={(e) => {e.stopPropagation();toggleSocialPost(e.target.parentNode.parentNode);}}
                            />
                            <p onClick={(e) => {e.stopPropagation();toggleSocialPost(e.target.parentNode.parentNode);}}>Post</p>
                        </div>
                        
                        <div className={styles.postSubmissionContainer}>
                            <div className={styles.postDetailContainer}>
                                <div>
                                    <p className={styles.postTitle}>Posting As:</p>
                                    <p className={styles.postUserValue}>Admin User</p>
                                </div>
                                <div>
                                    <p className={styles.postTitle}>Select Category</p>
                                    <select value="Etc." className={styles.dropdown}>
                                        <option>
                                            Fire
                                        </option>
                                        <option>
                                            Flood
                                        </option>
                                        <option>
                                            Neighbors
                                        </option>
                                        <option>
                                            Safety
                                        </option>
                                        <option>
                                            Etc.
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <textarea 
                                className={styles.postNotes}
                                type="text" 
                                placeholder="Enter notes here"
                            />
                            <a className={styles.submitPostButton} onClick={(e) => {e.stopPropagation();postSubmission(e.target.parentNode);}}>
                                Submit Post
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map content pop up */}
            <div id="map" className={styles.popUp} onClick={(e) => hidePopUps(e.target)}>
                <div className={styles.popUpContent}>
                    <h2 className={styles.popUpTitle}>Map</h2>
                    <div className={`${styles.popUpInnerContent} ${styles.mapInnerContent}`}>
                        <div className={styles.mapContentContainer}>
                            <div className={styles.mapCategory}>
                                <p>Floorplans</p>
                                <Carousel>
                                    <div>
                                        <Image 
                                            src="/img/floorplanLobby.jpg"
                                            width={300}
                                            height={300}
                                            alt="Floorplan for lobby of building"
                                            // className={styles.mainImage}
                                        />
                                        <p className="legend">Floor 1 (Lobby)</p>
                                    </div>
                                    <div>
                                        <Image 
                                            src="/img/floorplan1.jpg"
                                            width={300}
                                            height={300}
                                            alt="Floorplan for floor 2"
                                            // className={styles.mainImage}
                                        />
                                        <p className="legend">Floor 2</p>
                                    </div>
                                    <div>
                                        <Image 
                                            src="/img/floorplan2.jpg"
                                            width={300}
                                            height={300}
                                            alt="Floorplan for floor 3"
                                            // className={styles.mainImage}
                                        />
                                        <p className="legend">Floor 3</p>
                                    </div>
                                    <div>
                                        <Image 
                                            src="/img/floorplan3.jpg"
                                            width={300}
                                            height={300}
                                            alt="Floorplan for floor 4"
                                            // className={styles.mainImage}
                                        />
                                        <p className="legend">Floor 4</p>
                                    </div>
                                    <div>
                                        <Image 
                                            src="/img/floorplan4.jpg"
                                            width={300}
                                            height={300}
                                            alt="Floorplan for floor 5"
                                            // className={styles.mainImage}
                                        />
                                        <p className="legend">Floor 5</p>
                                    </div>
                                </Carousel>
                            </div>
                            <div className={`${styles.mapCategory} ${styles.mapLocation}`}>
                                <p>Google Map Location and Long. Lat.</p>
                                <iframe
                                    className={styles.mapIframe}
                                    // style="border:0" 
                                    loading="lazy" 
                                    allowFullScreen 
                                    src={"https://www.google.com/maps/embed/v1/place?q=place_id:Ei8xMjcgQ3JlZWsgU3QsIEJyaXNiYW5lIENpdHkgUUxEIDQwMDAsIEF1c3RyYWxpYSIwEi4KFAoSCYXdcTwdWpFrEXM8SEFkxAcdEH8qFAoSCWtsgxEdWpFrETltLpQI9e-d&key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}
                                >
                                </iframe>
                            </div>
                            <div className={`${styles.mapCategory} ${styles.arTour}`}>
                                <p>AR Tour</p>
                                <iframe
                                    className={styles.mapIframe}
                                    // style="border:0;"
                                    loading="lazy" 
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps/embed?pb=!4v1658629977032!6m8!1m7!1sCAoSLEFGMVFpcE9IZHMzX2tsbkh3dTRheUNnS0pMRDhZc2xOZ2kyR3JWanpCV3Zk!2m2!1d38.90042063019791!2d-77.0112580445292!3f64.37168366401693!4f-11.480057287480093!5f0.7820865974627469"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency content pop up */}
            <div id="emergency" className={styles.popUp} onClick={(e) => hidePopUps(e.target)}>
                <div className={styles.popUpContent}>
                    <h2 className={styles.popUpTitle}>Emergency</h2>
                    <div className={`${styles.popUpInnerContent} `}>
                        <div className={styles.emergencyContentContainer}>
                            <a className={styles.emergencyDetail} href="tel:+12345678909">
                                <h3 className={styles.emergencyDetailTitle}>Local Police Department</h3>
                                <p className={styles.emergencyDetailValue}>+1 (234) 567 - 8909</p>
                            </a>
                            <a className={styles.emergencyDetail} href="tel:+18765432123">
                                <h3 className={styles.emergencyDetailTitle}>Local Fire Department</h3>
                                <p className={styles.emergencyDetailValue}>+1 (876) 543 - 2123</p>
                            </a>
                            <a className={styles.emergencyDetail} href="tel:+14567890987">
                                <h3 className={styles.emergencyDetailTitle}>Local Poison Control</h3>
                                <p className={styles.emergencyDetailValue}>+1 (456) 789 - 0987</p>
                            </a>
                        </div>
                    </div>
                    <div className={styles.taskTrackerContainer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.taskTrackerButton} onClick={(e) => {e.stopPropagation();toggleTaskTracker(e.target.parentNode);}}>
                            <img
                                className={styles.taskTrackerButtonImage}
                                src="/img/arrow.png"
                                alt="Button to review tasks"
                                width={25}
                                height={25}
                                onClick={(e) => {e.stopPropagation();toggleTaskTracker(e.target.parentNode.parentNode);}}
                            />
                            <p onClick={(e) => {e.stopPropagation();toggleTaskTracker(e.target.parentNode.parentNode);}}>
                                Task Tracker
                            </p>
                        </div>
                        <div className={styles.taskTrackerContent}>
                            
                            <TaskTrackerItem
                                department = "Fire Department"
                                name = "Jane Wright"
                                status = "In Building"
                                notes = "Clearing out the first floor then moving to south stairwell"
                                time = "05:33 PM"
                                oxygen = "95"
                                temperature = "97.0"
                                pulse = "80"
                            />
                            <TaskTrackerItem
                                department = "Fire Department"
                                name = "Jack Wright"
                                status = "Stationed Outside Building"
                                notes = "Stationed outside awaiting orders from charge"
                                time = "05:43 PM"
                                oxygen = "97"
                                temperature = "99.3"
                                pulse = "93"
                            />
                            <TaskTrackerItem
                                department = "Fire Department"
                                name = "Jim Doe"
                                status = "Awaiting Task"
                                notes = "Cleared perimeter of building and waiting on emergency vehicles"
                                time = "05:45 PM"
                                oxygen = "94"
                                temperature = "102.1"
                                pulse = "99"

                            />
                            <TaskTrackerItem
                                department = "Police Department"
                                name = "Sarah Smith"
                                status = "Stationed Outside Building"
                                notes = "Directing incoming officers and guiding residents to safe distance"
                                time = "05:50 PM"
                                oxygen = "99"
                                temperature = "98.6"
                                pulse = "72"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Details;