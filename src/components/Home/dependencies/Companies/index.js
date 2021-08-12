import React from 'react';
import Logo1 from '../../../../assets/logo-1.webp'
import Logo2 from '../../../../assets/logo-2.webp'
import Logo3 from '../../../../assets/logo-3.webp'
import Logo4 from '../../../../assets/logo-4.webp'
import Logo5 from '../../../../assets/logo-5.webp'
import Logo6 from '../../../../assets/logo-6.webp'
import Logo7 from '../../../../assets/logo-7.webp'
import Logo8 from '../../../../assets/logo-8.webp'
import './company.scss'

const companies = () => {
    const logos = [Logo1,Logo2,Logo3,Logo4,Logo2,Logo5,Logo6,Logo7,Logo8]
    return (
        <div>
          {logos.map(ele =><img className = "company-logo" src = {ele} alt =""/>)}
        </div>
    )

}

export default companies