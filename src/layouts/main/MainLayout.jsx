import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'

export default function MainLayout ({ children, menu, footerData }) {
  return (
    <>
      <Navbar menu={menu} />
      {children}
      <Footer footerData={footerData} />
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.object,
  menu: PropTypes.array,
  footerData: PropTypes.array
}