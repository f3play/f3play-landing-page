import Link from "next/link";
import LayoutFront from "../components/layout/Layout";
import IntroSlider from "./../components/slider/IntroSlider";
import Roadmap from "./../components/elements/Roadmap";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { TbArrowUpRight } from "react-icons/tb";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { BiSolidRightArrow } from "react-icons/bi";


const Index = () => {
	return (
		<>
			<LayoutFront >
				<div className="intro1 section-padding">
					<div className="container">
						<div className="row align-items-center justify-content-between" >
							<div className="col-xl-6">
								<div className="intro-content">
									{/* <h1 className="intro-content-text">FUN - FAIR - FAST</h1> */}
									<img src="/images/slogan.png" className="slogan" />

									<p style={{ fontSize: 16, fontWeight: 400, marginBottom: 14 }}>
										Welcome to F3Play, the innovative fusion of Meme and GameFi, redefining the interaction between Web3 Lunatics and gaming.
									</p>
									<p style={{ fontSize: 16, fontWeight: 400, marginBottom: 14 }}>
										We take things back to basics while creating a thrilling, player-centric environment.
									</p>
									<p style={{ fontSize: 16, fontWeight: 400 }}>
										F3Play offers a FUN - FAIR - FAST gaming experience where every player has the opportunity to rise as a champion, embracing fairness and speed.
									</p>

									<div className="intro-btn">
										<div className="btn btn-primary"
											style={{
												fontWeight: 600,
												width: "175px",
												paddingTop: "8px",
												paddingBottom: "8px",
											}}>
											Coming soon
										</div>
										<Link href={"https://docs.f3play.io/"} className="btn btn-outline-primary"
											style={{
												fontWeight: 600,
												width: "175px",
												paddingTop: "8px",
												paddingBottom: "8px",
											}} >
											Explore
											<BiSolidRightArrow style={{ marginLeft: "4px", width: "10px", height: "10px" }} />
										</Link>
									</div>
									<div className="intro-social">
										<Link href="#">
											<FaTwitter />
										</Link>
										<Link href="https://t.me/F3Play">
											<FaTelegram />
										</Link>
										<Link href="#">
											<FaDiscord />
										</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-1" />

							<div className="col-xl-5">
								<div className="intro-slider">
									<IntroSlider />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-padding" id="feature">
					<div className="container">
						<div className="section-title">
							<p>F3Play’s Proudful Features</p>
						</div>
						<div className="row align-items-center">
							<div className="col-xl-4">
								<div className="built-in-list">
									<ul>
										<li><RiArrowDropRightLine style={{ width: "30px", height: "30px" }} /> Everything is on-chain</li>
										<li><RiArrowDropRightLine style={{ width: "30px", height: "30px" }} /> Endless battle</li>
										<li><RiArrowDropRightLine style={{ width: "30px", height: "30px" }} /> Referral system</li>
										<li><RiArrowDropRightLine style={{ width: "30px", height: "30px" }} /> Unique random on-chain</li>
									</ul>
								</div>
							</div>
							<div className="row col-xl-8 token-feature">
								<div className="col-xl-4 col-lg-4">
									<div className="built-in-content">
										<img src="/images/svg/nft.png" className="img-feature"></img>

										<p className="feature-title">NFT</p>
										<p><RxDotFilled style={{ width: "20px", heigth: "20px" }} />
											Iconic Meme as NFT, comes with various versions.
										</p>
										<p><RxDotFilled style={{ width: "20px", heigth: "20px" }} />Raise Rarity & Level to increase combat power.</p>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4">
									<div className="built-in-content">
										<img src="/images/svg/bnb.png" className="img-feature"></img>

										<p className="feature-title">Native Token</p>
										<p><RxDotFilled style={{ width: "20px", heigth: "20px" }} />
											Used to summon powerful Meme NFT.
										</p>
										<p><RxDotFilled style={{ width: "20px", heigth: "20px" }} />
											Valuable prize for players
										</p>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4">
									<div className="built-in-content" style={{ marginBottom: "0px" }}>
										<img src="/favicon.png" className="img-feature"></img>

										<p className="feature-title">F3Play Token</p>
										<p><RxDotFilled style={{ width: "20px", heigth: "20px" }} />
											Used as battle fee as you fight with the others.
										</p>
										<p><RxDotFilled style={{ width: "20px", heigth: "20px" }} />
											Strengthen your NFT requires expense.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-padding" id="tokenomic">
					<div className="container">
						<div className="section-title">
							<p>Tokenomics</p>
						</div>
						<div className="row">
							<div className="col-xl-7 col-lg-6">
								<img src="/images/token/pie_chart.png" className="tokenomic-chart"></img>
							</div>

							<div className="col-xl-5 col-lg-6">
								<p style={{
									color: "white",
									fontSize: "20px",
								}}>What is F3Play Token?</p>
								<p style={{
									fontSize: "16px",
									fontWeight: 400,
									marginBottom: "25px"
								}}>F3Play is a deflationary token that will be utilized by F3Play ecosystem applications. The total supply of F3Play tokens is <a style={{ fontWeight: 500, color: "white" }}>42,069,000,000</a>. The F3Play token is owned by everyone in the F3Play community and serves as a crucial key to unlock the future utilities of the F3 universe.</p>
								<div className="btn btn-primary"
									style={{
										fontWeight: 600,
										width: "150px",
										padding: "6px 0px",
										borderRadius: "10px",
										marginRight: "25px"
									}}>
									Buy F3Play
								</div>
								<Link href={"https://docs.f3play.io/"} className="btn btn-outline-primary"
									style={{
										fontWeight: 600,
										width: "150px",
										padding: "6px 0px",
										borderRadius: "10px",
									}}>
									View Docs
									<TbArrowUpRight style={{ marginLeft: "6px", width: "20px", height: "20px", marginBottom: "2px" }} />
								</Link>
							</div>
						</div>
					</div>
				</div>


				<div className="section-padding" id="roadmap">
					<div className="container">
						<div className="section-title">
							<p>Roadmap</p>
						</div>
						<div className="row">
							<Roadmap />
						</div>
					</div>
				</div>

				<div className="section-padding" id="partner">
					<div className="container">
						<div className="section-title text-center">
							<p>Support By</p>
						</div>
						{/* <div>
							<PartnerSlider />
						</div> */}
						<div className="row justify-content-center">
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/opBNB.png"
										alt=""
										style={{
											width: "250px",
											height: "75px",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</LayoutFront>
		</>
	);
};

export default Index;
