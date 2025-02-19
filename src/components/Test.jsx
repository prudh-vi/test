import { useState } from "react"
import "../style.css"


const Test = () => {
    const[currentIndex,setCurrentIndex]=useState(0);
    const test = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ];

    const handlePrev=()=>{
        setCurrentIndex(
            (currentIndex ===0 ? test.length-1 : currentIndex-1)
        )
    }
    const handleNext=()=>{
        setCurrentIndex(
            (currentIndex===test.length-1 ? 0 :currentIndex+1)
        )
    }
  return (
    <div className="test">
        <div className="test-quote">
            {test[currentIndex].quote}

        </div>
        <div className="test-author">
            {test[currentIndex].author}

        </div>
        <div className="test-nav">
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Test