function Footer() {
    return (
       <footer className="page-footer #1565c0 blue darken-3">
          <div className="footer-copyright">
             <div className="container">
                by zanozzzza © {new Date().getFullYear()}
                <a className="grey-text text-lighten-4 right" href="#!">
                   Repository
                </a>
             </div>
          </div>
       </footer>
    );
 }
 export {Footer};