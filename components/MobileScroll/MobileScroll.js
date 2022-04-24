import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Image } from "next/image";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    let refCurr = ref.current;
    if (refCurr) {
      observer.observe(refCurr);
    }

    return () => {
      if (refCurr) {
        observer.unobserve(refCurr);
      }
    };
  });

  return (
    <div className={`screen-text ${isVisible ? "text-visible" : ""}`} ref={ref}>
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <Image
              alt="phone"
              src={screen.mobile_img}
              className="mobile-screen-img slide-in-right "
              key={screen.mobile_img}
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const scrollData = [
    {
      heading: "we’ve got your back.",
      description:
        "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
      mobile_img:
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
    },
    {
      heading: "begin your winning streak.",
      description:
        "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
      mobile_img:
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
    },
    {
      heading: "for your eclectic taste.",
      description:
        "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
      mobile_img:
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
    },
    {
      heading: "more cash in your pockets.",
      description:
        "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
      mobile_img:
        "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png",
    },
  ];
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div key={uuidv4()} className=" scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <Image
              src={scrollData[currentImg].mobile_img}
              alt="phone"
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
