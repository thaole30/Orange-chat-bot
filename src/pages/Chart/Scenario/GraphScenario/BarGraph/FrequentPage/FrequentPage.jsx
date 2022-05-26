import React from 'react';
import PlatformItem from './PlatformItem';
import * as icons from "./svg/index";

const FrequentPage = () => {
  return (
    <div className="frequent-page">
        <h3 className="text-20 bold">シナリオがよく使われたページ
        </h3>

        <div className="platforms-group mt-24">
        <PlatformItem
            name="spectrum"
            number="912,873"
            icon={icons.Icon1}
            decor={icons.Decor1}
            bgColor="#518bae"
          />
        <PlatformItem
            name="unsplash"
            number="912,873"
            icon={icons.Icon2}
            decor={icons.Decor2}
            bgColor="#494c4e"
          />
        <PlatformItem
            name="lazada"
            number="912,873"
            icon={icons.Icon3}
            decor={icons.Decor3}
            bgColor="#0c0f80"
          />
        <PlatformItem
            name="baemin"
            number="912,873"
            icon={icons.Icon4}
            decor={icons.Decor1}
            bgColor="#26c1bc"
          />
        <PlatformItem
            name="tiki"
            number="912,873"
            icon={icons.Icon4}
            decor={icons.Decor4}
            bgColor="#04b9f2"
          />
        </div>
    </div>
  )
}

export default FrequentPage