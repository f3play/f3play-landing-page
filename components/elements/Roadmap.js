import { RxDotFilled } from "react-icons/rx";

const Roadmap = () => {

  return (
    <>
      <div className="container roadmap-chart">
        <div className="row">
          <div className="col-xl-12">
            <section id="cd-timeline" class="cd-container">

              <div class="cd-timeline-block">
                <div class="cd-timeline-img-active cd-picture"></div>

                <div class="cd-timeline-content">
                  <h2 className="phase-roadmap">PHASE 1</h2>
                  <div class="timeline-content-info" style={{ fontSize: "16px", fontWeight: 500 }}>
                    <span class="timeline-content-info-title" >
                      Development
                    </span>
                    <span class="timeline-content-info-date">
                      Q3/2023
                    </span>
                  </div>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/rocket.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Bringing a full Experience:</span> The Battle is just the starting point of this empire. Later on, we will build the Economy related Facilities to make the Meme Empire prosper. The blueprints have been set for:
                    <p style={{ marginBottom: -10, marginLeft: 20, marginTop: 10, fontSize: "16px" }}><RxDotFilled style={{ width: "16px", heigth: "16px" }} />
                      Swap
                    </p>
                    <p style={{ marginBottom: -10, marginLeft: 20, fontSize: "16px" }}><RxDotFilled style={{ width: "16px", heigth: "16px" }} />
                      Yield Farming
                    </p >
                    <p style={{ marginBottom: -10, marginLeft: 20, fontSize: "16px" }}><RxDotFilled style={{ width: "16px", heigth: "16px" }} />
                      LP Staking
                    </p>
                    <p style={{ marginBottom: -10, marginLeft: 20, fontSize: "16px" }}><RxDotFilled style={{ width: "16px", heigth: "16px" }} />
                      Launchpad
                    </p>
                  </p>

                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-movie"></div>

                <div class="cd-timeline-content">
                  <h2 className="phase-roadmap">PHASE 2</h2>
                  <div class="timeline-content-info" style={{ fontSize: "16px", fontWeight: 500 }}>
                    <span class="timeline-content-info-title" >
                      Collaboration
                    </span>
                    <span class="timeline-content-info-date">
                      Q4/2023
                    </span>
                  </div>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/rocket.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>World Boss:</span> After horning your skill through various battles with each other, it's time to join our hand and fight against the powerful enemies who aim to overtake our Meme Empire. Defeat those Villains and retrieve the treasure.
                  </p>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/partner.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Collaboration:</span> Forming an Alliance with other countries has proved to be a good move to make your Empire stronger. Hence, The Meme from F3Play will welcome anyone to ally with our Empire.
                  </p>

                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-picture"></div>

                <div class="cd-timeline-content">
                  <h2 className="phase-roadmap">PHASE 3</h2>
                  <div class="timeline-content-info" style={{ fontSize: "16px", fontWeight: 500 }}>
                    <span class="timeline-content-info-title" >
                      Community
                    </span>
                    <span class="timeline-content-info-date">
                      Q1/2024
                    </span>
                  </div>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/earth.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Legion War:</span> Sometime, a maneuvering war between countries is not a bad idea. Let's form a Legion and compete with other Empire.
                  </p>

                </div>
              </div>

            </section>
          </div>
        </div >
      </div >
    </>
  );
};

export default Roadmap;