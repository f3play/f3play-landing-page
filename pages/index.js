import Link from "next/link";
import LayoutFront from "../components/layout/Layout";
import IntroSlider from "./../components/slider/IntroSlider";
import Roadmap from "./../components/elements/Roadmap";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";


const Index = () => {
	return (
		<>
			<LayoutFront >
				<div className="intro1 section-padding">
					<div className="container">
						<div className="row align-items-center justify-content-between">
							<div className="col-xl-5">
								<div className="intro-content">
									<p style={{
										fontWeight: 500,
										fontSize: "40px",
										color: "#fff",
										marginTop: "-75px",
									}}>100% ON-CHAIN GAMEFI</p>
									<p style={{ fontSize: 18, fontWeight: 400 }}>F3Play revolutionizes the way Web3 Lunatics engages with GameFi. Embracing a player-centric philosophy, our game offers a delightful and hilarious gaming experience.</p>

									<div className="intro-btn">
										<Link href="https://beta.f3play.io/" className="btn btn-primary"
											style={{
												fontWeight: 600,
											}}>
											Play Now
										</Link>
									</div>
									<div className="intro-social">
										<Link href="#">
											<FaTwitter />
										</Link>
										<Link href="#">
											<FaTelegram />
										</Link>
										<Link href="#">
											<FaDiscord />
										</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="intro-slider">
									<IntroSlider />
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="section-padding" id="tokenomic">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<p style={{
										fontWeight: 500,
										fontSize: "40px",
										color: "#fff",
									}}>TOKENOMICS</p>
								</div>
							</div>
						</div>
					<img src="/images/token/pie_chart.png" className="tokenomic-chart"></img>
					</div>
				</div>

				<div className="section-padding" id="roadmap">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="section-title">
									<p style={{
										fontWeight: 500,
										fontSize: "40px",
										color: "#fff",
									}}>ROADMAP</p>
								</div>
							</div>
						</div>
						<div className="row">
							<Roadmap />
						</div>
					</div>
				</div>

				<div className="section-padding" id="partner">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-6">
								<div className="section-title text-center">
									<p style={{
										fontWeight: 500,
										fontSize: "40px",
										color: "#fff",
									}}>PARTNERS</p>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/1.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							{/* <div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/2.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-auto">
								<div className="investor-brand">
									<img
										src="/images/brand/3.png"
										class="img-fluid"
										alt=""
									/>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</LayoutFront>
		</>
	);
};

export default Index;
