import React from "react"

const Hero: React.FC = () => (
  <div className="flex flex-col items-center bg-white py-16 px-6 space-y-20">
    <div className="flex flex-col space-y-10 items-center w-240">
      <div className="flex flex-col items-center space-y-6 w-full">
        <p className="text-4xl font-bold text-black text-center">
          다음 세대와 함께 성장하는 AI
        </p>
        <p className="text-base font-normal text-gray-900 text-center">
          환영합니다! 우리는 미래의 세대와 함께 성장하고 배우는 AI를 구축하는
          일에 전념하고 있습니다. AI가 우리 생활 곳곳에 자리하고 있는 이 시대에,{" "}
          <br />
          우리의 핵심 임무는 다음 세대에게 진정으로 이익을 주는 방식으로 AI가
          발전하도록 하는 것입니다.
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
