const Banner = (props) => {
    let data = props.data
 
    return (
        <div className="banner d-flex align-items-center justify-content-center">
            <h1> <b>{data}</b></h1>
           
        </div>)
}
export default Banner;