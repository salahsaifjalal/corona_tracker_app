import React from 'react';

import styles from './App.module.css';

// Remember! It is not Natural disaster.

import {Cards,Charts,Countries } from './All_Components';

class App extends React.Component{
    render() {
        return(
            <div className={styles.container}>
            
                    <Cards/>
                    <Charts/>
                    <Countries/>
            </div>
        )


    }


}
export default App;