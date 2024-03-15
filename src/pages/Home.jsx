// components
import Electronics from '../component/electronics/Electronics'
import NewArrivals from '../component/newArrivals/NewArrivals'
import NewRelaese from '../component/newRelease/NewRelaese'
import Promo from '../component/promo/Promo'
import PromoVideo from '../component/promoVideo/PromoVideo'

const Home = () => {
  return (
    <>
      <Promo/> 
      <Electronics/>
      <NewArrivals/>
      <NewRelaese/>
      <PromoVideo/>
    </>
  )
}

export default Home