import React from "react"

const Hero: React.FC = () => (
  <div className="flex flex-col items-center bg-white py-16 px-6 space-y-20">
    <div className="flex flex-col space-y-10 items-center w-240">
      <div className="flex flex-col items-center space-y-6 w-full">
        <p className="text-4xl font-bold text-black text-center">
          All of us Learn AI
        </p>
        <p className="text-base font-normal text-gray-900 text-center">
          환영합니다! AlolA는 &#34;모두가 AI를 배운다&#34;는 의미에서 시작된
          프로젝트입니다. <br />
          디지털 시대의 차세대를 위한 교육이 필요하다는 것을 인식하며, <br />
          AlolA는 어린이부터 성인까지 모두에게 AI와의 유익하고 건강한 상호작용을
          제공하고자 합니다.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-start w-full">
      <div
        className="w-full h-0 pt-50 bg-center bg-cover"
        style={{ backgroundImage: `url(./image.png)` }}
      />
    </div>
  </div>
)

export default Hero
