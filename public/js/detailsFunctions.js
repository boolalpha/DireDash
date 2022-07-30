import styles from '../../styles/Details.module.css';
import SocialPost from '../../components/SocialPost';
import React from 'react';
import ReactDOM from 'react-dom'

// export function hidePopUps() {
//     var popUps = document.getElementsByClassName(`${styles.popUp}`);
//     console.log(popUps);
//     for(var i = 0; i < popUps.length; i++) {
//         popUps[i].style.top = "100%";
//     }
// }
export function hidePopUps(eventTarget) {
    console.log("trigger hide pop up");
    eventTarget.style.top = "100%";
}

export function showPopUp(elemId) {
    document.getElementById(elemId).style.top = "0";
}

export function selectSensorPage(tabElem) {
    //remove active tab id
    document.getElementById(`${styles.activeTab}`).id = "";
    // add active id
    tabElem.id = `${styles.activeTab}`;
    //find out what elem the active tab is
    var tabIndex = 0;
    var sensorTabs = document.getElementsByClassName(`${styles.sensorTab}`);
    for(var i = 0; i < sensorTabs.length; i++) {
        if(sensorTabs[i].id === `${styles.activeTab}`) {
            tabIndex = i;
            break;
        }
    }
    //multiply the pages by the index offset
    console.log("calc(100% * " + tabIndex + ")");
    document.getElementsByClassName(`${styles.sensorInnerContent}`)[0].style.left = "calc(-100% * " + tabIndex + ")";
}

export function toggleSocialPost(socialContainer) {

    //social container is open set to closed
    if(socialContainer.style.top === "50%"){
        socialContainer.style.top = "calc(100% - 75px - 6px)";
        socialContainer.children[0].children[0].style.transform = "rotate(0deg)"; 
        socialContainer.children[0].children[1].innerText = "Post";
    } else {    //container is closed set to open
        socialContainer.style.top = "50%";
        socialContainer.children[0].children[0].style.transform = "rotate(45deg)";
        socialContainer.children[0].children[1].innerText = "Cancel";
    }

}

export function postSubmission(postElement) {
    var datetime = new Date();
    var date = datetime.toLocaleDateString();
    var time = datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    var user = postElement.children[0].children[1].innerText;
    var category = postElement.children[1].children[1].value;
    var notes = postElement.children[2].value;

    var newPost = React.createElement(SocialPost, {
        user : user,
        date : date,
        time : time,
        category : category,
        notes : notes
    });

    var postParent = postElement.parentNode.parentNode.children[1];

    var newPostWrapper = document.createElement("div");
    newPostWrapper.className = `${styles.postWrapper}`;

    postParent.prepend(newPostWrapper);

    ReactDOM.render(
        newPost,
        newPostWrapper
    );

}

export function toggleTaskTracker(taskTrackerContainer) {
    //social container is open set to closed
    if(taskTrackerContainer.style.top === "25%"){
        taskTrackerContainer.style.top = "calc(100% - 75px - 6px)";
        taskTrackerContainer.children[0].children[0].style.transform = "rotate(-90deg)"; 
    } else {    //container is closed set to open
        taskTrackerContainer.style.top = "25%";
        taskTrackerContainer.children[0].children[0].style.transform = "rotate(90deg)";
    }
}