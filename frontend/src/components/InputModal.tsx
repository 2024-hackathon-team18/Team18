import quitbtn from '../assets/QuitBtn.png';
import imgaddbtn from '../assets/ImgAddBtn.png';

export default function InputModal({ setisModal }: any) {
  const modalclose = () => {
    setisModal(false);
  };
  return (
    <div className="bg-[#FFFFFF] flex w-[100vw] h-[100vh] box-sizing-border z-10 bg-opacity-90 fixed">
      <div className="shadow-[0px_4px_20.3px_3px_rgba(0,0,0,0.25)] p-[20px] rounded-[4px] bg-[#FFFFFF] absolute left-[50%] top-[103px] translate-x-[-50%] w-[60%] h-[80%]">
        <div className="relative flex flex-col box-sizing-border">
          <div className="flex flex-row justify-between w-[100%] h-[22.9px] box-sizing-border mt-[10px]">
            <div className="mt-[20px] inline-block self-start break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[36px] leading-[0.667] text-[#111111]">
              파일 업로드
            </div>
            <img onClick={modalclose} src={quitbtn} className="w-[22.9px] h-[22.9px] cursor-pointer" />
          </div>
          <div className="flex items-center flex-col">
            <div className="mt-[50px] inline-block self-center break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[24px] leading-[1] text-[#111111]">
              파일을 첨부해주세요
            </div>
            <div className="mt-[20px] mb-[20px] inline-block self-center break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[12px] leading-[2] text-[#B6B8B8]">
              또는
            </div>
            <button className="rounded-[4px] bg-[#1366DE] flex flex-row p-[19px_0_18.9px_0] w-[253px] box-sizing-border">
              <div className="flex justify-center items-center w-[100%] h-[18px] box-sizing-border gap-[10px]">
                <img src={imgaddbtn} className="w-[18px] h-[18px]" />
                <span className="text-white">파일추가하기</span>
              </div>
            </button>
          </div>

          <div className="flex flex-row mt-[20px] ml-[20px]">
            <div className="flex flex-col w-[100%] box-sizing-border">
              <span className="w-[420px] break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#111111] mb-[10px]">
                시작하는 페이지
              </span>
              <input
                placeholder="시작하는 페이지를 숫자로 적어주세요"
                className="shadow-[0px_0px_5.5px_0px_rgba(0,0,0,0.25)] rounded-[4px] bg-[#FFFFFF] relative p-[15px_16px_15px_16px] w-[284px] box-sizing-border"
              ></input>
            </div>
            <div className="m-[0_17px_90px_17px] flex flex-col w-[716px] box-sizing-border">
              <span className="mb-[10px] break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#111111]">
                끝나는 페이지
              </span>
              <input
                placeholder="끝나는 페이지를 숫자로 적어주세요"
                className="shadow-[0px_0px_5.5px_0px_rgba(0,0,0,0.25)] rounded-[4px] bg-[#FFFFFF] relative p-[15px_18px_15px_18px] w-[284px] box-sizing-border"
              ></input>
            </div>
          </div>

          <div className="m-[0_17px_6px_17px] inline-block self-start break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#111111]">
            문제의 갯수
          </div>
          <input
            placeholder="원하는 문제의 갯수를 숫자로 적어주세요"
            className="shadow-[0px_0px_5.5px_0px_rgba(0,0,0,0.25)] rounded-[4px] bg-[#FFFFFF] relative m-[0_17px_102px_17px] flex flex-row justify-between self-start p-[15px_19.3px_15px_16px] w-[284px] box-sizing-border"
          ></input>
          <div className="flex flex-row self-end w-[272px] box-sizing-border">
            <button className="items-center justify-center  rounded-[4px] bg-[#1366DE] relative m-[0_20px_0_0] flex p-[10px_0_10px_0.9px] w-[126px] box-sizing-border">
              <span className="break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#FFFFFF]">
                다음으로
              </span>
            </button>
            <button
              onClick={modalclose}
              className="items-center justify-center rounded-[4px] border-[1px] border-solid border-[#B6B8B8] relative flex p-[10px_0_10px_0.9px] w-[126px] box-sizing-border"
            >
              <span className="break-words font-['The_Jamsil_OTF','Roboto_Condensed'] font-normal text-[16px] leading-[1.5] text-[#B6B8B8]">
                취소하기
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
