import Image from 'next/image'

import styles from '../styles/SocialPost.module.css'

function SocialPost(props) {
    const {user, date, time, category, notes} = props;

    return (
        <div className={styles.socialPost}>
            <Image
                className = {styles.profileImage}
                alt = "Profile picture of poster"
                src = "/img/profile-user.png"
                width={35}
                height={35}
            />
            <p className={styles.postUser}>{user}</p>
            <div className={styles.postDatetime}>
                <p>{time}</p>
                <p>{date}</p>
            </div>
            <p className={styles.postNotes}>{notes}</p>
            <p className={styles.postCategory}>{category}</p>
        </div>
    )
}

export default SocialPost;