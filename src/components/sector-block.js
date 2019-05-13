import React from 'react'

const SectorBlock = ({children, className, style}) => (
  <section className={`${className} row pt-4 pb-4 justify-content-center`} style={style}>
    <div className={`col-xl-8 col-sm-10`}>
      {children}
    </div>
  </section>
)

export default SectorBlock;