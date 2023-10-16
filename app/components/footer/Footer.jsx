import styles from './footer.module.css'


const Footer = () =>{
return(
    <>
    <footer className={styles.site }>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className={styles.col}>
            <h6>Categories</h6>
            <ul className={styles.footer}>
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h6>Quick Links</h6>
            <ul className={styles.footer}>
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
    
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p className={styles.copyright}>Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className={styles.col}>
            <ul className={styles.social}>
              <li><a className={styles.facebook} href="#"><i className={styles.fa}></i></a></li>
              <li><a className={styles.twitter} href="#"><i className={styles.fa}></i></a></li>
              <li><a className={styles.dribbble} href="#"><i className={styles.fa }></i></a></li>
              <li><a className={styles.linkedin} href="#"><i class={styles.fa }></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</>
)

}

export default Footer;