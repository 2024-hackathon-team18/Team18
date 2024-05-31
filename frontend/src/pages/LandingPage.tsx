import mainimg from '../assets/MainBackground.png';
import nextbtn from '../assets/NextButton.png';
import mainbonus from '../assets/MainBonus.png';
import { useState } from 'react';
import InputModal from '../components/InputModal';

export default function LandingPage() {
  const [isModal, setisModal] = useState(false);
  const modalopen = () => {
    setisModal(true);
  };
  console.log(isModal);
  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col w-[100vw] h-[300vh] box-sizing-border">
        {isModal && <InputModal setisModal={setisModal} />}
        <div className="relative flex flex-col items-center w-[100vw] box-sizing-border">
          <span className="m-[0_0.2px_24.6px_0] w-[279.8px] h-[31.4px] text-[30px] text-black font-[TheJamsil5Bold]">
            ONEDAY<span className="text-[#2C80FF]">Q</span>UIZ
          </span>
          <img src={mainimg} className="w-[100vw] h-[720px]"></img>
          <span className="absolute top-[242px] text-center break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[36px] tracking-[-0.7px] leading-[1.4] text-[#FFFFFF]">
            외우기만 하는 비효율적인 공부는 이제 그만
            <br />
            원데이퀴즈에서 현명하게 공부하세요
          </span>
          <span className="absolute top-[389px] text-center break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-light text-[18px] tracking-[-0.4px] leading-[1.7] text-[#FFFFFF]">
            실제 시험을 보듯 원데이퀴즈가 직접 내주는 시험
            <br />
            기존에 하던 공부와 달리 공부하던 PDF로 직접 문제를 받아보세요
          </span>
        </div>
        <button
          onClick={modalopen}
          className="gap-[20px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[4px] bg-[#1366DE] absolute left-[50%] top-[598px] translate-x-[-50%] flex flex-row p-[20px_0_13.5px_0] w-[204px] box-sizing-border justify-center"
        >
          <div className="inline-block break-words font-['Space_Grotesk'] font-medium text-[16px] tracking-[-0.3px] text-[#FFFFFF]">
            Get Started
          </div>
          <img src={nextbtn} className="m-[0_0_6.5px_0] w-[43px] h-[16px]" />
        </button>
        <span className="absolute left-[50%] top-[784px] translate-x-[-50%] break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] tracking-[-0.5px] leading-[1.4] text-[#AFADAD]">
          스크롤하여 원데이퀴즈의 가치를 살펴보세요
        </span>
        <div className="flex flex-col items-center box-sizing-border mt-[200px] mb-[200px]">
          <img src={mainbonus} className="w-[80vw] h-[2380px]"></img>
        </div>
        <div className="bg-[#1366DE] relative bottom-[0px] flex p-[53px_0.2px_44.1px_0] w-[100wv] h-[120px] box-sizing-border"></div>
      </div>
    </>
  );
}
