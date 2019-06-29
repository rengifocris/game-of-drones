import React from 'react';
import { css } from 'glamor';

const Header = ({onLogout}) => {
    return (
        <div className={`row ${styles.container}`}>
            <div className={`col-12 text-center`}>
                Game of Drones
                <div onClick={onLogout} className={styles.logout}>Log out</div>
            </div>
        </div>
    );
}

const styles = {
    container: css({
        padding: 15,
        fontSize: 40,
        color: "#fff",
        background: '#00b09b',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #96c93d, #00b09b)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #96c93d, #00b09b)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }),
    logout:css({
        fontSize: 20,
        cursor: "pointer",
        marginRight: "15px",
    })
};

export default Header;