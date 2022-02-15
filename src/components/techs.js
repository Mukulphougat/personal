import java from "../images/java.png"
import javascript from "../images/javascript.png"
import reactIcon from "../images/react.png"
import nodeIcon from "../images/node.png"
import htmlIcon from "../images/html.png"
import cssIcon from "../images/css.png"
import mongoIcon from "../images/mongo.png"

function Techs() {
    return (
        <div class="techs">
            <span>Tech i'm familiar with</span>
            <div class="techs-container">
                <div><img src={java} width={30}/><span>Java</span></div>
                <div><img src={javascript} width={30}/><span>Javascript</span></div>
                <div><img src={htmlIcon} width={30}/><span>HTML</span></div>
                <div><img src={cssIcon} width={30}/><span>Css</span></div>
                <div><img src={reactIcon} width={30}/><span>React</span></div>
                <div><img src={nodeIcon} width={30}/><span>NodeJs</span></div>
                <div><img src={mongoIcon} width={30}/><span>MongoDB</span></div>
            </div>
        </div>
    )
}

export default Techs;