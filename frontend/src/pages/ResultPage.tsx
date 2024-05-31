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
          2 / 4
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
          <p className="font-[14.6px] ml-[10px] mb-[30px] ">
            문제 1. 다음 중 병행성 관련 오류의 예시가 아닌 것은 무엇인가요?
          </p>
          <p className="bg-white w-[100%] p-[10px]">1. 원자성 위반 오류</p>
          <p className="bg-white w-[100%] p-[10px]">2. 순서 위반 오류</p>
          <p className="bg-white w-[100%] p-[10px]">3. 데드락 오류</p>
          <p className="bg-white w-[100%] p-[10px]">4. 경쟁 조건 오류</p>
        </div>
        <div className="bg-[#FFC1C1] relative flex-col flex pt-[10px] w-[400px] box-sizing-border border-[1px] border-solid border-black">
          <p className="font-[14.6px] ml-[10px] mb-[30px] ">
            문제 2. 다음 중 병행성 관련 오류의 종류가 아닌 것은 무엇인가요?
          </p>
          <p className="bg-white w-[100%] p-[10px]">1. 교착 상태(deadlock)</p>
          <p className="bg-white w-[100%] p-[10px]">2. 비 교착 상태 오류</p>
          <p className="bg-white w-[100%] p-[10px]">3. 원자성 위반 오류</p>
          <p className="bg-white w-[100%] p-[10px]">4. 부족 상태 오류</p>
        </div>
      </div>
      <div className="relative mt-[100px] flex flex-row justify-center gap-[50px] w-[100%] box-sizing-border">
        <div className="bg-[#FFC1C1] relative flex-col flex pt-[10px] w-[400px] box-sizing-border border-[1px] border-solid border-black">
          <p className="font-[14.6px] ml-[10px] mb-[30px] ">
            문제 3. 다음 중 비교착 상태 오류를 예방하기 위한 방법이 아닌 것은 무엇인가요?
          </p>
          <p className="bg-white w-[100%]  p-[10px]">1. 원자성 위반 오류를 방지하기 위해 락의 추가</p>
          <p className="bg-white w-[100%]  p-[10px]">2. 점유 및 대기 상태를 방지하기 위해 trylock() 사용</p>
          <p className="bg-white w-[100%]  p-[10px]">3. 순서 위반 오류를 방지하기 위해 락의 순서를 정해놓음</p>
          <p className="bg-white w-[100%]  p-[10px]">
            4. 교착 상태 회피를 위해 환형 대기 조건을 만들지 않음 답안을 골라주세요.
          </p>
        </div>
        <div className="bg-[#FFC1C1] relative flex-col flex pt-[10px] w-[400px] box-sizing-border border-[1px] border-solid border-black">
          <p className="font-[14.6px] ml-[10px] mb-[30px] ">
            문제 4. 다음 중에서 병행성 관련 오류를 방지하기 위한 방법이 아닌 것은 무엇인가요?
          </p>
          <p className="bg-white w-[100%]  p-[10px]">1. 데드락 발생 조건을 분석하여 회피하기</p>
          <p className="bg-white w-[100%]  p-[10px]">2. 락을 사용하여 상호배제 구현하기</p>
          <p className="bg-white w-[100%]  p-[10px]">3. 경쟁 조건이 발생할 수 있는 코드를 병렬 실행하기</p>
          <p className="bg-white w-[100%]  p-[10px]">4. 순환 대기 발생 가능성 없도록 락의 획득 순서 정하기</p>
        </div>
      </div>
    </div>
  );
}
