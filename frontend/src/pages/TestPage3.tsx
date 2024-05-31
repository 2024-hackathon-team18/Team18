import { useNavigate } from "react-router-dom";

export default function TestPage3() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/test4')
    }
    return (
      <div className="bg-[#FFFFFF] flex flex-col pt-10 px-10 h-[100hv] w-[100wv] box-sizing-border">
        {/* 상단 영역 */}
        <div className="flex flex-row justify-between w-[100wv] h-[100hv] box-sizing-border">
          <span className=" font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#000000]">0</span>
          <span className=" font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#000000]">1</span>
          <span className=" font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#000000]">2</span>
          <span className=" font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#000000]">3</span>
          <span className=" font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#000000]">4</span>
          <span className=" font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#000000]">5</span>
          <span className="m-[0_0px_0_0] font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#000000]">6</span>
        </div>
  
        {/* 진행률 바 */}
        <div className="rounded-[8.5px] bg-[#D9D9D9] relative w-[100wv] h-[100hv] box-sizing-border">
          <div className="rounded-[8.5px] bg-[#1366DE] w-[830px] h-[17px]"></div>
        </div>
  
        {/* 문제 영역 */}
        <div className="bg-[#E5E8EA] relative mt-10 pl-5 w-[content-fit] h-[80px] box-sizing-border flex justify-left items-center">
            <span className="break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[48px] leading-[0.375] text-[#111111]">문제 1. 가나다라마바사 아자차카타파하</span>
        </div>


  
            {/* 문제 내용 */}
        <div className="my-20">    
            <div className="mx-10 my-10 inline-block self-start break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[48px] leading-[0.5] text-[#1366DE] mr-4">1. 가나다라마바사 아자차카타파하</div>
            <div className="mx-10 my-10 inline-block self-start break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[48px] leading-[0.5] text-[#111111] mr-4">2. 가나다라마바사 아자차카타파하</div>
            <div className="mx-10 my-10 inline-block self-start break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[48px] leading-[0.5] text-[#111111] mr-4">3. 가나다라마바사 아자차카타파하</div>
            <div className="mx-10 my-10 inline-block self-start break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[48px] leading-[0.5] text-[#111111] mr-4">4. 가나다라마바사 아자차카타파하</div>
        </div>
            
        {/* 버튼 영역 */}
        <div className="grid grid-cols-2 self-end w-[422px] box-sizing-border gap-[22px]">
            <button onClick={handleClick} className="rounded-[4px] bg-[#1366DE] relative flex justify-center place-items-center p-[13px_0.4px_13px_0] w-[200px] box-sizing-border">
                <span className="break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[20px] leading-[1.2] text-[#FFFFFF]">다음으로</span>
            </button>
            <div className="rounded-[4px] border-[1px] border-solid border-[#B6B8B8] relative flex justify-center place-items-center p-[13px_0.4px_13px_0] w-[200px] box-sizing-border">
                <span className="break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[20px] leading-[1.2] text-[#B6B8B8]">이전으로</span>
            </div>
        </div>
    </div>
    );
}
