import React from 'react';

function Layout({children}) {
    return ( 
        <div className={styles.Layout}>
            {children}
        </div>
     );
}

export default Layout;