import { Jumbotron, Button } from 'reactstrap';


const Profile = (props) => {
    return (
        <section id="lead">
            <div id="lead-content">
                <h1>André&nbsp;Ferreira</h1>
                <h2>Software Engineer</h2>
            </div>
            <div id="lead-overlay"></div>
            <div id="lead-down">
        </div>
            <style jsx>{`
            #lead {
                position: relative;
                height: 100vh;
                min-height: 500px;
                max-height: 1080px;
                background: url(../images/lead-bg.jpg);
                background-size: auto;
                background-size: cover;
                padding: 15px;
                overflow: hidden;
            }
            #lead-content {
                position: absolute;
                z-index: 10;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
            #lead-content h1{
                color: #fff;
                font-weight: 900;
                text-transform: uppercase;
                line-height: 0.9em;
            }
            #lead-content h2 {
                color: #a0cfee;
                font-weight: 500;
                margin-bottom: 15px;
            }
            #lead-overlay {
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: rgba(33,125,187,0.8);
                z-index: 1;
            }
            `}</style>
        </section>
    );
}
export default Profile;