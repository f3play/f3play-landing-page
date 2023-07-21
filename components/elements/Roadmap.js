
const Roadmap = () => {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <section id="cd-timeline" class="cd-container">

              <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-picture"></div>

                <div class="cd-timeline-content">
                  <h2 style={{ fontSize: "28px", fontWeight: 500 }}>PHASE 1</h2>
                  <div class="timeline-content-info">
                    <span class="timeline-content-info-title" style={{ fontSize: "16px", fontWeight: 500 }}>
                      Foundation
                    </span>
                    {/* <span class="timeline-content-info-date">
                      <i class="fa fa-calendar-o" aria-hidden="true"></i>
                      June 2016 - Present
                    </span> */}
                  </div>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/rocket.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Smart Contract Development:</span> Secure and audited smart contract for F3Play token to ensure transparency and trust.
                  </p>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/earth.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Community Building:</span> Telegram, Discord, Twitter - Get ready for the hype train with a strong and engaged F3 community.
                  </p>
                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-movie"></div>

                <div class="cd-timeline-content">
                  <h2 style={{ fontSize: "28px", fontWeight: 500 }}>PHASE 2</h2>
                  <div class="timeline-content-info">
                    <span class="timeline-content-info-title" style={{ fontSize: "16px", fontWeight: 500 }}>
                      Launch
                    </span>
                    {/* <span class="timeline-content-info-date">
                      <i class="fa fa-calendar-o" aria-hidden="true"></i>
                      June 2016 - Present
                    </span> */}
                  </div>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/rocket.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Token Launch:</span> F3Play token officially takes off. Get ready for liftoff!
                  </p>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/partner.svg" className="img-fluid"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Partnerships:</span> Collaborate with meme creators, influencers, and content platforms. Let's join forces and spread the F3Play movement!
                  </p>

                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img cd-picture"></div>

                <div class="cd-timeline-content">
                  <h2 style={{ fontSize: "28px", fontWeight: 500 }}>PHASE 3</h2>
                  <div class="timeline-content-info">
                    <span class="timeline-content-info-title" style={{ fontSize: "16px", fontWeight: 500 }}>
                      Community Empowerment
                    </span>
                    {/* <span class="timeline-content-info-date">
                      <i class="fa fa-calendar-o" aria-hidden="true"></i>
                      June 2016 - Present
                    </span> */}
                  </div>
                  
                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/unlock.svg" className="img-fluid"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                        paddingBottom: "5px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Gated Community:</span> Unlock exclusive benefits in the F3Play gated community. Early updates, exclusive content, and interactive experiences await you!
                  </p>

                  <p style={{ fontWeight: 300, fontSize: "16px" }}>
                    <img src="/images/svg/marketing.svg" className="img-fluid"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                        paddingBottom: "5px",
                      }} />
                    <span style={{ fontWeight: 500 }}>Branding and Marketing:</span> Spread the word about F3Play with a comprehensive marketing campaign. Let's go viral!
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