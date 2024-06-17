import './homePage.scss'
import SearchBar from "../../components/searchbBar/searchBar.jsx";

function HomePage(){
    return(
        <div className="homePage">
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>Find real estate & Get your dream place</h1>
                    <p>
                        Take full control of your investments and support your life’s many
                        passions with CAL Unit Trusts by growing your investment capital and
                        enjoying superior returns.
                    </p>
                    <SearchBar/>
                    <div className='boxes'>
                        <div className='box'>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className='box'>
                            <h1>200</h1>
                            <h2>Awards gained</h2>
                        </div>
                        <div className='box'>
                            <h1>2000+</h1>
                            <h2>Property ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src='/bg.png'/>
            </div>
        </div>
    )
}

export default HomePage;