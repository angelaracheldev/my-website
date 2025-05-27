const Footer = () => {
    return (
      <footer className="py-16 text-center text-xs text-base-content opacity-60">
        
            <p>
            © {new Date().getFullYear()} Angela Rachel.
            <br/>This project was developed using React.js, Tailwind.css, DaisyUI and deployed via AWS. 
            <br/>Special thanks to <a className="underline" href="https://brittanychiang.com/">Brittany Chiang </a> for her inspirational design.           </p>

      </footer>
    );
  };
  
  export default Footer;
  