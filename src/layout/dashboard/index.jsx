import React from 'react'
import styles from './style.module.css'
import SideMenu from '../../components/sidemenu'
import View from '../../routes'

function Dashboard() {
  return (
    <>
      <SideMenu></SideMenu>
      <View></View>
    </>
  )
}

export default Dashboard