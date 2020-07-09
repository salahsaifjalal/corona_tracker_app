import React from 'react';
import styles from './App.module.css';
import {Cards,Charts,Countries } from './All_Components';
import {fetchData} from './API_Folder';


// Remember! It is not Natural disaster.



class App extends React.Component{
    state = {
        data:{},
    }

   async  componentDidMount () {
        const data = await fetchData();
        this.setState({data });
   }
    render() {
        const { data } = this.state;
        return(
            <div className={styles.container}>
                     <Cards data = {data}/>
                     <Charts/>
                     <Countries/>
            </div>
        )


    }


}
export default App;