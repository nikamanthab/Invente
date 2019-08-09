import React from 'react';
import '../../css/animation.css';

class Animation extends React.Component {

    render = () => {
        const bulb = {
            position:"absolute",
            top:"30vh",
            left:"32vw",
            width:"35vw",
            height:"35vh"
        };
        const rball = {
            position: "absolute",
            top: "-8vh",
            left: "-30vw",
            width: "78vw",
            height: "72vw",
            overflow: "hidden"
        };
        const lball = {
            position:"absolute",
            top:"-8vh",
            left:"54vw",
            width:"78vw",
            height:"72vw",
            overflow:"hidden"
        };
        const sdiv = {
            overflow:"hidden",
            position:"realtive"
        }
        const title = {
            position:"absolute",
            transform:"translate3d(27vw,50vh,10px)",
            width:"50vw",
            height:"50vh"
        }
        const bg = {
            width:"100vw",
            height:"100vh"
        }
        
        return (
            <div style={sdiv}>
                <img src={require("../../svg/Main_background.svg")} alt="bg" style={bg}/>
                <img src={require("../../svg/Right_ball.svg")} alt="rball" style={rball} />
                <img src={require("../../svg/Left_ball.svg")} alt="lball" style={lball} />
                <img src={require("../../svg/Logo_bulb.svg")} alt="logo" style={bulb} className="bulb"/>
                <img src={require("../../svg/logo_text_with_tagline.svg")} alt="title" style={title}/>
                <div class="herosplash1">
        <div id="herosplash" class="commondiv">
            <div id="hypno" class="commondiv">
                <div id="lastdiv" class="commondiv">
                    <span class="startspan">
                        <span class="startspan">
                            <span class="startspan">
                                <span class="startspan">
                                    <span class="startspan">
                                        <span class="startspan">
                                            <span class="startspan">
                                                <span class="startspan">
                                                    <span class="startspan">

                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
            </div>
            
        )
    }
}

export default Animation;