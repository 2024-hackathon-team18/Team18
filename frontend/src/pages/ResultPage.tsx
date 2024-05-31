import { useNavigate } from 'react-router-dom';

export default function ResultPage() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };
  return (
    <div className="bg-[#FFFFFF] flex flex-col w-[100wv] box-sizing-border">
      <div className="relative mt-[70px] flex flex-row justify-center box-sizing-border">
        <div className="inline-block break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[96px] leading-[0.25] text-[#000000]">
          3 / 6
        </div>
      </div>
      <button
        onClick={handleOnClick}
        className="rounded-[4px] right-[20px] top-[60px] bg-[#1366DE] fixed items-center justify-center flex p-[13px_0.4px_13px_0] w-[200px] box-sizing-border"
      >
        <span className="break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[20px] leading-[1.2] text-[#FFFFFF]">
          처음으로
        </span>
      </button>
      <div className="relative mt-[100px] flex flex-row justify-center gap-[50px] w-[100%] box-sizing-border">
        <div className="bg-[#FFC1C1] relative flex-col flex pt-[10px] w-[400px] box-sizing-border border-[1px] border-solid border-black">
          <p className="font-[14.6px] ml-[10px] mb-[30px] ">문제 1. 가나다라마바사 아자차카파타하</p>
          <p className="bg-white w-[100%] h-[200px] p-[10px]">1. 가나다라마바사 아자차카파타하</p>
        </div>
        <div className="bg-[#FFC1C1] relative flex-col flex pt-[10px] w-[400px] box-sizing-border border-[1px] border-solid border-black">
          <p className="font-[14.6px] ml-[10px] mb-[30px] ">문제 1. 가나다라마바사 아자차카파타하</p>
          <p className="bg-white w-[100%] h-[200px] p-[10px]">1. 가나다라마바사 아자차카파타하</p>
        </div>
      </div>
    </div>
  );
}
