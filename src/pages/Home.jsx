// components
import Electronics from '../component/electronics/Electronics'
import NewArrivals from '../component/newArrivals/NewArrivals'
import NewRelaese from '../component/newRelease/NewRelaese'
import Promo from '../component/promo/Promo'
import PromoVideo from '../component/promoVideo/PromoVideo'
import WelcomeModal from '../component/welcomeModal/WelcomeModal'

const Home = () => {
  return (
    <>
      <WelcomeModal/>
      <Promo/> 
      <Electronics/>
      <NewArrivals/>
      <NewRelaese/>
      <PromoVideo/>
    </>
  )
}

export default Home