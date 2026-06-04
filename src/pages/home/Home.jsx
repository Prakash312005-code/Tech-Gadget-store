import React from 'react'
import Homefirst from '../../sections/homefirst/Homefirst'
import Homesecond from '../../sections/homesecond/Homesecond'
import Homefourth from '../../sections/homefourth/Homefourth'
import Homefifth from '../../sections/homefifth/Homefifth'
import Homethird from '../../sections/homethird/Homethird'
import Homeonsale from '../../sections/homeonsale/Homeonsale'
import Shopby from '../../sections/shopbycategory/Shopby'
import Gamingbestsale from '../../sections/gamingbestsale/Gamingbestsale'
const Home = () => {
  return (
    <div>
        <Homefirst/>
        <Homesecond/>
        <Shopby/>
        <Gamingbestsale/>
        <Homethird/>  
        <Homefourth/>
        <Homeonsale/>
        <Homefifth/>
    </div>
  )
}

export default Home