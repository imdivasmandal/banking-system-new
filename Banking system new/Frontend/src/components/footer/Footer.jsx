import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">

            <a className="link link-hover" href="https://www.instagram.com/ammu._.aman/">
            <IoLogoInstagram size={30}/>              
            </a>

            <a className="link link-hover" href="https://github.com/Gyan-singhh">
            <FaGithub size={30}/>              
            </a>

            <a className="link link-hover" href="https://www.linkedin.com/in/gyan-singhh/">
            <FaLinkedin size={30}/>           
            </a>

          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;