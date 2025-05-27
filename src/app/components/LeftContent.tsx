import Navigations from './left_content/Navigations';
import SocialLinks from './left_content/SocialLinks';




export default function LeftContent() {
  
  return (
     <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
          <div>
          <a href="https://angelarachel.dev"><h1 className="text-4xl lg:text-5xl font-bold mb-2"> Jealarr Joseph </h1></a>
          <h2 className="text-2xl lg:text-3xl mb-2"> Full-Stack-ish </h2>
          <Navigations/>
          </div> 
          <SocialLinks />
    </header>
  );
}