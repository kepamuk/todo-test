import {memo} from "react";
import Marquee from "react-double-marquee/dist/bundle.esm";

const NewsStroke = memo(function NewsStroke ({newsData}) {
  return (
    <div>
      <div
        style={{
          width: '390px',
          whiteSpace: 'nowrap',
          color: '#fff'
        }}
      >
        <Marquee delay={0}>
          {newsData[Math.floor(Math.random() * newsData.length)].description}
        </Marquee>
      </div>
    </div>
  )
})
export default NewsStroke;