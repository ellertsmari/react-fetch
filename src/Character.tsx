
const Character = ({obj})=>{
  return(
    <div>
      <h1>{obj.name}</h1>
      <img src={obj.image} />
    </div>
  )
}
export default Character;
