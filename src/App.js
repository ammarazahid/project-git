import React from 'react';
import logo from './logo.svg';
import './App.css';
import images from './images/sap-logo.png';
import airbnb from './images/airbnb-logo.png';
import atom from './images/atom.png';
import bloomberg from './images/bloomberg-logo.png';
// import image3 from './images/capture.png';
import circleci from './images/circleci.png';
import codeclimate from './images/codeclimate.png';
import facebook from './images/facebook-logo.png';
import google from './images/google-logo.png';
import hero from './images/hero.jpg';
import homeBusiness from './images/home-illo-business.png';
import ibm from './images/ibm-logo.png';
import image14 from './images/iso-ui.jpg';
import nasa from './images/nasa-logo.png';
import node from './images/node-logo.png';
import newHero from './images/nw_hero.jpg';
// import image19 from './images/simple-codelines.svg';
import slackhq from './images/slackhq.png';
import spotify from './images/spotify-logo.png';
import swift from './images/swift-logo.png';
import travis from './images/travis-ci.png';
import walmart from './images/walmart-logo.png';
import zenhubio from './images/zenhubio.png';
import paypal from './images/paypal-logo.png';
import Header from '../src/components/Header';
import SignUpForm from './components/SignUpForm';
import Enterprises from './components/Enterprises';

function App() {
  return (
    <main>
    <Header />
    <SignUpForm />
    <Enterprises />
    <div id="image-content">
        <h2>Introducing GitHub Actions with CI/CD </h2>
        <p>Automate any workflow with GitHub Actions.<br />
            See the latest updates announced at our HQ reveal.</p>
        <a href="https://live-stream.github.com/" id="check-out">Check it out
        <span className="link-icon"> → </span></a>
    </div>
    <div id="fourth"/>
            <h3 id="fourth-h3">More than 2.1 million businesses and organizations use GitHub</h3>
            <ul id="fourth-ul">
            <div className="fourth-div">
                <li>
                    <img alt="Airbnb"
                        src={airbnb} />
                </li>
                <li>
                    <img alt="sap" src={images} />

                </li>
                <li>
                    <img alt="ibm" src={ibm} />

                </li>
                <li>
                    <img className="change-width" alt="google" src={google} />

                </li>
                <li>
                    <img alt="paypal" src={paypal}/>

                </li>
                <li>
                    <img alt="bloomberg" src={bloomberg}/>
                </li>
                </div>
                <div id="second-fourth" className="fourth-div">
                                    <li>
                    <img alt="spotify" src={spotify}/>
                </li>
                <li>
                    <img className="change-width" alt="swift" src={swift}/>
                </li>
                <li>
                    <img className="change-width" alt="facebook" src={facebook}/>
                </li>
                <li>
                    <img alt="node" src={node}/>
                </li>
                <li>
                    <img className="change-width" alt="nasa" src={nasa}/>
                </li>
                <li>
                    <img alt="walmart" src={walmart}/>
                </li>
                </div>
            </ul>
            <div />
            <div id="fifth-outer">
            <div id="fifth-sec">
                <h2 id="fifth-h2">
                    GitHub for teams
                </h2>
                <h1>A better way to work together</h1>
                <p>GitHub brings teams together to work through problems, move<br /> ideas forward, and learn from each
                    other along the way.</p>
                <a hrfe="/join?plan=business&amp;setup_organization=true&amp;source=home">
                    Sign up your team
                <span className="Bump-link-symbol">→</span>
                    </a>
            </div>
</div>
        <div id="sixth-sec">
            <div id="sixth-outer">
                <div id="sixth-sec-img">
                    <img id="sixth-sec-img"
                        src="https://github.githubassets.com/images/modules/site/home-illo-team.svg" alt="logo" />
                </div>
                <div id="sixth-sec-right">
                    <a>
                        <div className="sixth-box">
                            <div>
                                <h3>Write better code</h3>
                                <p>Collaboration makes perfect. The conversations and code reviews that happen in
                                    pull requests help your team share the weight of your work and improve the
                                    software you build.
                                    <a className="sixth-a" href="#">Learn about code review.</a> </p>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="sixth-box">
                            <div>
                                <h3>Manage your chaos</h3>
                                <p>Take a deep breath. On GitHub, project management happens in issues and project
                                    boards, right alongside your code. All you have to do is mention a teammate to
                                    get them involved.
                                    <a className="sixth-a" href="#">Learn about project management.</a> </p>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="sixth-box">
                            <div>
                                <h3>Find the right tools</h3>
                                <p>Browse and buy apps from GitHub Marketplace with your GitHub account. Find the
                                    tools you like or discover new favorites—then start using them in minutes.
                                    <a className="sixth-a" href="#">Learn about integrations.</a></p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <h3 id="h3-sixth">See how the world's leading companies use GitHub Enterprise.</h3>
        <div id="seventh-sec">
            <div className="articles">
                <div className="art-cont">
                    <img src={hero} alt="hero" />
                    <h3>MGM Resorts International</h3>
                    <p>Hospitality</p>
                </div>
                <div id="hosp-art-read" className="art-read">
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
            <div className="articles">
                <div className="art-cont">
                    <img src={newHero} alt="new-hero" />
                    <h3>Nationwide</h3>
                    <p>Insurance</p>
                </div>
                <div className="art-read">
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
            <div className="articles">
                <div className="art-cont">
                    <img src="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg" alt="hero" />
                    <h3>SAP</h3>
                    <p>Business software</p>
                </div>
                <div className="art-read">
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
            <div className="articles">
                <div className="art-cont">
                    <img src="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg" alt="new-her" />
                    <h3>Spotify</h3>
                    <p>Technology / Streaming</p>
                </div>
                <div className="art-read">
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
        </div>
        <div id="eight-sec">
            <p>Security and administration</p>
            <h2>Your business needs, met</h2>
            <p id="eight-second-p">From flexible hosting to granular access controls, we’ve got your<br /> security requirements covered.</p>
            <a href="#" target="blank">Learn how GitHub Enterprises works
            <span className="link-icon">→</span>
            </a>
        </div>
        <div id="nine-sec">
            <div id="nine-left">
                <div>
                    <h2>Code security</h2>
                    <p>Prevent problems before they happen. Protected branches, signed commits, and required status
                        checks protect your work and help you maintain a high standard for your code.</p>
                </div>
                <div>
                    <h2>Access controlled</h2>
                    <p>Encourage teams to work together while limiting access to those who need it with granular
                        permissions and authentication through SAML/SSO and LDAP.</p>
                </div>
            </div>
            <div id="nine-right">
                <img id="nine-git-img" src={homeBusiness}/>
            </div>
        </div>
        <div id="ten-sec-outer">
        <div class="float-left">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="mr-4" width="64px"><path d="M27 13h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm15-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM27 28h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm15 3a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm4 0a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z" fill="#23292f"></path><path d="M50 44h-1a13 13 0 0 0-4.68-9H48a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-5v-3h5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H16a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h5v3h-5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11.72a13 13 0 0 0-3.79 5.21A7 7 0 0 0 13.28 44 6 6 0 0 0 14 56h36a6 6 0 0 0 0-12zM15 17v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H16a1 1 0 0 1-1-1zm8 3h18v3H23zm-7 13a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a12.9 12.9 0 0 0-10 0H16zm34 21H14a4 4 0 1 1 .09-8 1 1 0 0 0 1-.83 5 5 0 0 1 8.6-2.55 1 1 0 0 0 1.7-.42A11 11 0 0 1 47 45a1 1 0 0 0 1 1h2a4 4 0 0 1 0 8z" fill="#23292f"></path></svg>

      </div>
        <div id="ten-inner">
            <h3>Hosted where you need it</h3>
            <p>Securely and reliably host your work on GitHub using GitHub Enterprise Cloud. Or deploy GitHub
                Enterprise Server in your own data centers or in a private cloud using Amazon Web Services, Azure,
                or Google Cloud Platform.</p>
            <a href="#" target="blank">Compare plans
            <span className="link-icon">→</span>
            </a>
            <a href="#" target="blank">Contact sales for more information
            <span className="link-icon">→</span>
            </a>
            </div>
        </div>
        <div id="integrations">
            <p id="integration-first-p">Integrations</p>
            <h2>Build on GitHub</h2>
            <p id="integration-second-p">Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or
                discover new favorites to create a happier, more efficient way of working.</p>
            <a href="#" target="blank">Learn about integrations
            <span className="link-icon">→</span>
            </a>
        </div>
        <div id="apps-clusters">
            <div className="app">
                <img src={slackhq} alt="slack" />
            </div>
            <div className="app">
                <img src={zenhubio} alt="zenhub" />
            </div>
            <div className="app">
                <img src={travis} alt="travis" />
            </div>
            <div className="app">
                <img src={atom} alt="atom" />
            </div>
            <div className="app">
                <img src={circleci} alt="circleci" />
            </div>
            <div className="app">
                <img src={google} alt="google" />
            </div>
            <div className="app">
                <img src={codeclimate} alt="codeclimate" />
            </div>
        </div>
        <div id="workplace">
            <p>Sometimes, there’s more than one tool for the job. Why not try something new?</p>
            <a href="#" target="blank">Browse GitHub MarketPlace</a>
            <span className="link-icon">→</span>
        </div>
        <div id="developers">
            <p>Community</p>
            <h3>Welcome home,
                developers</h3>
            <p>GitHub is home to the world’s largest community of developers and their projects...</p>
        </div>
        <div id="developers-article">
            <div className="articles">
                <div className="art-cont">
                    <img src="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg" alt="" />
                    <h3>Rusell keith Magee</h3>
                    <p>Rusell keith Magee created BeeWare to fill a gap in his own process.Today, BeeWare is the
                        go-to project for supporting python on every platform. </p>
                </div>
                <div className="art-read">
                
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
            <div className="articles">
                <div className="art-cont">
                    <img src="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg" alt="" />
                    <h3>Kris Nova</h3>
                    <p>Kris nova quickly developed a passsio for open source software.Now she gets to work on open
                        source tooling at her day job, which includes maintaining Kubernetes Operations(kops).</p>
                </div>
                <div id="hosp-art-read" className="art-read">
                
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
            <div className="articles">
                <div className="art-cont">
                    <img src="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg" alt="" />
                    <h3>Evan you</h3>
                    <p>In 2013,Evan You founded Vue, a Javascript framework funded by the community on petreon.In
                        2016, Vue reached 2000,000 downloads.</p>
                </div>
                <div className="art-read">
                
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
            <div className="articles">
                <div className="art-cont">
                    <img src="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg" alt="" />
                    <h3>Jess Frazelle</h3>
                    <p>Jess Frazelle works on kubernetes full-time,previoysly she maintained docker a software
                        containerization platform used by thousands of teams.</p>
                </div>
                <div className="art-read">
                
                    <a href="#" target="blank" className="article-a">Read more</a>
                    <span className="link-icon">→</span>
                </div>
            </div>
            </div>
            <div id="container-responsive">
                <h3>...whether you’re making your first commit or sending a Rover to Mars, there’s room for you
                    here, too.</h3>
                <div id="circles">
                    <div id="Orange-circle">
                        <p>100M*</p>
                        <p>repositories worldwide</p>
                    </div>
                    <div id="blue-circle">
                        <p>40M*</p>
                        <p>developers worldwide</p>
                    </div>
                    <div id="purple-circle">
                        <p>2.1M*</p>
                        <p>business and organizations worldwide</p>
                    </div>
                </div>
                <div id="summary">
                    <div id="repo-sum">
                        <p>GitHub's users create and maintain influential technologies alongside the world largests
                            <span>open source community.</span>
                        </p>
                    </div>
                    <div id="developers-sum">
                        <p><span>Developers</span> use GitHub for personal projects, from
                            experimenting with new programming languages to hosting their life’s work.</p>
                    </div>
                    <div id="business-sum">
                        <p> <span>Business</span>of all sizes use GitHub to support their
                            development process and to securely build software.</p>
                    </div>
                    <div>
                        <p>*As of April 2019</p>
                    </div>
                </div>
            </div>
            <section id="sign-up">
                <h3>Get started for free — join the millions of developers already using GitHub to share their code,
                    work together, and build amazing things.</h3>
                <form id="Sign-up-form">
                    <label>Username</label>
                    <input type="name" placeholder="enter your username" />
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email address" />
                    <label>Password</label>
                    <input type="password" />
                    <button type="submit" id="sign-up">Sign up for GitHub</button>
                </form>
                <p>By clicking “Sign up for GitHub”, you agree to our <a href="#">terms of service</a> and <a
                        href="#">privacy statement</a>. We’ll occasionally send you account related emails.</p>
            </section>
<footer>
    <div id="footer-top">
        <h2>GitHub</h2>
        <div>
            <h2>product</h2>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Enterprise</a></li>
                <li><a href="#">Customer stories</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
        </div>
        <div>
            <h2>platform</h2>
            <ul>
                <li><a href="#">Developer API</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Atom</a></li>
                <li><a href="#">Electron</a></li>
                <li><a href="#">GitHub Desktop</a></li>
            </ul>
        </div>
        <div>
            <h2>Support</h2>
            <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Community Forum</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Contact GitHub</a></li>
            </ul>
        </div>
        <div>
            <h2>Company</h2>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
        </div>
    </div>
    <div id="footer-bottom">
        <div id="footer-botm-left">
            <p>© 2019 GitHub, Inc.</p>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
        </div>
        <div id="footer-botm-right">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-github"></i>
        </div>
    </div>
</footer>
</main>
  );
}

export default App;
