import React from 'react';
import { css } from 'glamor';

const Header = () => {
    return (
        <div className={styles.header}>
             Game Of Drones
        </div>
    );
};

const styles = {
    header: css({
        fontSize: 100,
        color: "#01FF70",
        margin: 4,
        fontWeight: 50,
        fontStyle: 'normal'
    })
};

export default Header;