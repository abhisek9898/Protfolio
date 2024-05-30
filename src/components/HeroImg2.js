import React, { Component } from "react";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="w-full h-[37vh] bg-[#4ccbd2]/60 relative">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-[2.4rem] md:text-[2rem]">{this.props.heading}</h1>
          <p className="text-[1.4rem] text-center">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
