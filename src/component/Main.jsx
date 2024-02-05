import walmart from '../assets/Logos/Walmart.svg'
import jpMorgan from '../assets/Logos/Morgan.svg'
import visa from '../assets/Logos/Visa.svg'
import tinder from '../assets/Logos/Tinder.svg'
import samsung from '../assets/Logos/Samsung.svg'
import verizon from '../assets/Logos/Verizon.svg'
import Spense from '../assets/Spense.png'
import YelpCamp from '../assets/YelpCamp.png'
import github from '../assets/Social_Icons/Github.svg'
import linkedin from '../assets/Social_Icons/Linkedin.svg'
import twitter from '../assets/Social_Icons/Twitter.svg'


function Main() {
  return (
    <>
      <div className='header_text padding'>
        <h1>Helping companies build better, scalable software.</h1>
        <p className='paragraph'>
          Award-winning web developer and author, with over 15+ years working experience with Fortune 500 companies like Apple, Google, Facebook, and more.
        </p>
      </div>
      <div className="padding logo_wrap">
        <ul className='logos'>
          <li><img src={walmart} alt="logo" /></li>
          <li><img src={jpMorgan} alt="logo" /></li>
          <li><img src={visa} alt="logo" /></li>
          <li><img src={tinder} alt="logo" /></li>
          <li><img src={samsung} alt="logo" /></li>
          <li><img src={verizon} alt="logo" /></li>
        </ul>
      </div>
      <div className="company_web_info padding">
        <div className="left_img">
          <img src={Spense} alt="spense" />
          <h5>Spense.com →</h5>
          <p className='paragraph'>Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writting, and less on when and how they would get paid</p>
        </div>
        <div className="right_img">
          <img src={YelpCamp} alt="yelpcamp" />
          <h5>YelpCamp →</h5>
          <p className='paragraph'>Allow backpack travellers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over a 1m MAU, YelpCamp has been the crowd{`'`}s favorite in 2021</p>
        </div>
      </div>
      <div className="About padding">
        <h3 className=''>A co-founder at the world{`'`}s largest communities.</h3>
        <p className='paragraph p_spacing text_width'>
          The combine experience i have working at the top Fortune 500 companies have allowed me to develop a skillset that helps me in not just development, but in every aspect of my any business.
        </p>
        <p className='paragraph p_spacing text_width'>
          i'm proud to announce that i am now working at one of the world's largest communities teach young minds about how to sell yourself as a developer and open them to whole new world of opportunities.
        </p>
        <p className='paragraph p_spacing text_width'>
          As a developer, you have everything available to you and all that's holding you back is youself.
        </p>
        <p className='paragraph p_spacing text_width'>A quote i live by perfectly illustrates what i mean</p>
        <p className='paragraph p_spacing text_width'>
          {`''`}How big would you dream, if you <span>knew</span> you wouldn't fail?{`''`} you've already gone through the hardest parts being a developer, it time to elevate your skill and become a leader in something you're <span>passionate</span> about.
        </p>
        <p className='paragraph p_spacing text_width'>
          I'm happy to chat over coffee some time about how i can help your company.
        </p>
      </div>
      <div className="CTA padding">
        <h3>Interested in working with me?</h3>
        <p className='paragraph'>I'm active on all social media platforms listed below, but you can also leave me an email and i will get back to you within 24-48 hours.</p>
        <button type="button" className='btn' >Get in touch</button>
      </div>
      <div className="Footer padding">
        <p className="header">Johnathan Specter</p>
        <ul className='socialmedia_icon'>
          <li className="icon"><img src={twitter} alt="twitter"/></li>
          <li className="icon"><img src={linkedin} alt="linkedin"/></li>
          <li className="icon"><img src={github} alt="github" /></li>
        </ul>
      </div>
    </>
  )
}

export default Main