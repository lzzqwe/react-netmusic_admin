import { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import './index.scss'
import { banner } from '../../api/index'
const Home = () => {
    const [slideBanner, setSlideBanner] = useState([])
    const getBanner = () => {
        const params = {
            type: 1
        }
        banner(params).then((res) => {
            if (res.code === 200) {
                setSlideBanner(() => {
                    return [...res.banners]
                })
            }
        })
    }
    useEffect(() => {
        getBanner()
    }, [])
    return (
        <div className="home">
            <Carousel 
             autoplay
             effect='fade'
             speed='3000'
            >
                {slideBanner.map((item) => {
                    console.log(item.pic);
                    return (
                        <div key={item.pic} >
                            <div className='wrapper' style={{ backgroundImage: `url(${item.pic})` }}>
                                <div className='inner-box-carousel'>
                                    <img height='100%' width='100%' src={item.pic} alt="" />
                                </div>
                            </div>

                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
export default Home