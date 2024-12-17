import styling from "./OxpinsCharity.module.css";

const OxpinCharity = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.container}>
          <div className={styling.leftside}>
            <div className={styling.imgContainer}>
              <img src="/images/about-one-img-1.webp" alt="Coverimg" />
            </div>
          </div>
          <div className={styling.rightside}></div>
        </div>
      </div>
    </>
  );
};

export default OxpinCharity;
