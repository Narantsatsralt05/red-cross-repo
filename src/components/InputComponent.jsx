import StyledInput from "./input"

const Styledinput =({label,height,width,border,borderradius,fontSize,color,animationName,font})=>{
    return(
      <div className="InputContainer">
        <span style={{"fontSize":{fontSize},'font':{font}}}  >{label}</span>
        <StyledInput height={height} width={width} border={border} borderradius={borderradius} size={fontSize} color={color} animation={animationName} font={font} />
      </div>
    )
  }
  
  export default Styledinput