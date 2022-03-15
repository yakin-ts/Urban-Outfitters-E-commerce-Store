import { Link } from "react-router-dom";
import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_body">
        <div className="footer_company">
          <div className="p-up-wbig">Urban Outfitters</div>
          <div className="footer_company_info p-trans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            pariatur asperiores laborum facere doloremque earum, architecto
            mollitia soluta numquam dolorem modi alias excepturi recusandae id
            sunt nemo? Laboriosam, neque vero.
          </div>
          <div className="footer_company_contact">
            <div>121 king street, Melbourne 3000</div>
            <div>+612309874654</div>
            <div>contact@urbanoutfitters.com</div>
          </div>
          <div className="footer_company_social">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <AiFillFacebook className="icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <AiFillLinkedin className="icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <AiFillTwitterSquare color="white" className="icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <AiFillYoutube  className="icon"/>
            </a>
          </div>
        </div>
        <div className="footer_shopping">
          <div className="p-up-small">Shopping</div>
          <div className="footer-middle p-cap-small-white">
            <li>
              <Link to="/">Your Cart</Link>
            </li>
            <li>
              <Link to="/">Your Orders</Link>
            </li>
            <li>
              <Link to="/">Compared Items</Link>
            </li>
            <li>
              <Link to="/">Wishlist Items</Link>
            </li>
            <li>
              <Link to="/">Shopping Details</Link>
            </li>
          </div>
        </div>
        <div className="footer_more">
          <div className="p-up-small">More Link</div>
          <div className="p-cap-small-white footer-middle">
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Gift Center</Link>
            </li>
            <li>
              <Link to="/">Buying Guides</Link>
            </li>
            <li>
              <Link to="/">New Arrivals</Link>
            </li>
            <li>
              <Link to="/">Clearance</Link>
            </li>
          </div>
        </div>
        <div className="footer_blog">
          <div className="footer_blog_headline p-up-small">From The Blog</div>
          <div className="footer_blog_item1">
            <div className="footer_blog_item_date p-trans">
              <span className="day">26</span>
              <span className="month">May</span>
            </div>
            <div className="footer_blog_item_content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              pariatur asperiores laborum facere doloremque earum,
            </div>
            <div className="footer_blog_comment p-trans">3 comments</div>
          </div>
          <div className="footer_blog_item2">
            <div className="footer_blog_item_date p-trans">
              <span className="day">26</span>
              <span className="month">May</span>
            </div>
            <div className="footer_blog_item_content">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              pariatur asperiores laborum facere doloremque earum,
            </div>
            <div className="footer_blog_comment p-trans">3 comments</div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="copyright_text">
        <p >Urban Outfitters &#169; - All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
