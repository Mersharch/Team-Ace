import Footer from '.././components/homeComponents/footer';
import Header from '../components/homeComponents/header';
import '.././styles/about.css';



function About() {
  return (
      <div className="About">
        <Header />
        <h1 style={{color:"#000"}}>ABOUT US</h1>
        
         <body>
          Founded in 2018 "Just Hair and Fashion Wear" is a business enterprise aimed at providing women and young girls the necessary confidence to feel good in any kind of clothes they wear. 
          Our clothes are of the highest quality and leaves customers feeling <b>beautiful and confident</b>.
        </body> 

        <h2 style={{color:"#000"}}>VISION STATEMENT</h2>

         <body>The vision of Just Hair and Fashion Wear is to bring out the beauty in our customers because the first step in loving ourselves is loving how we look, and we thrive in making sure that the objective is established.</body>

        <img src="https://t3.ftcdn.net/jpg/03/14/09/50/360_F_314095077_iJtVBwPTvbd1fdJIKi6Sub3XNkT5Qnfy.jpg" className="nicepic"/>
        <Footer />
      </div>
      
  );
}

export default About;
