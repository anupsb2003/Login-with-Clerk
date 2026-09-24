import "./Academic.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Academic(){
    return (
        <div className="academic">
            <div className="academic-content" >
            <h4>Academic 2026-27</h4>
            <h2>Over All Student Performance Dashboard Of ABC</h2>
            <h2>School for Class 10</h2>
            <button>Get Access</button>
            </div>
            <div className="academic-animation" >
            <DotLottieReact
            src="https://lottie.host/1171e2f2-3ac1-48cc-9b08-859f0b29f51f/OiV457uLiz.lottie"
            loop
            autoplay
            />
            </div>
        </div>
    )
}
export default Academic;