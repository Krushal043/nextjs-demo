import React from 'react'
import PropTypes from 'prop-types'

import styles from '@assets/styles/layouts/HomePageLayout.module.scss'

export default function HomeLayout ({ children }) {
  return (
    <div className={styles.HomeLayout}>
      <div className={styles.HomeArticleSection}>
        {children}
      </div>
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.object,
  menu: PropTypes.array
}
