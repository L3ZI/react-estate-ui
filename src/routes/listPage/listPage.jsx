import './listPage.scss'
import {listData} from "../../lib/dummydata.js";
import Filter from "../../components/Filter/Filter.jsx";
import Card from "../../components/Card/Card.jsx";

function ListPage(){
    const data = listData;
    return(
        <div className="listPage">
            <div className='listContainer'>
                <div className='wrapper'>
                    <Filter/>
                    {data.map(item=>(
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
            </div>
            <div className='mapContainer'>Map</div>
        </div>
    )
}

export default ListPage;