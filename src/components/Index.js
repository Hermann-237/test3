
import SideLeft from "./SideLeft"
import SideRight from "./SideRight"
import SideCenter from "./SideCenter"
function Index() {
    return (
        <div className="d-flex  flex-column flex-md-row justify-content-around">
            <SideLeft />
            <SideCenter />
            <SideRight />
        </div>
    )
}

export default Index
