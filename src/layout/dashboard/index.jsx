import React from 'react'
import styles from './style.module.css'
import SideMenu from '../../components/sidemenu'
import View from '../../routes'
import Navbar from '../../components/navbar'

function Dashboard() {
  return (
    <>
     <Navbar></Navbar>
      <div className={styles.mainContainner}>
        <SideMenu></SideMenu>
        <View></View>
      </div>
    </>
  )
}

export default Dashboard