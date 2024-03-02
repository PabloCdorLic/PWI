import Navegation from "../../components/Navagation"
import "./Contact.css" 

export default function Contact(){
    return(
        <div>
            <Navegation hoja="Contact"/>
            <main className="main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2 className="row colorBlue py-5">Contact</h2>
                <h3 className="row colorBlue subtitle">Leave us your information so we can contact you</h3>
                <form  className="row colorBlue g-3 p-4">
                    <div className="col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"  aria-label="First name" id="name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="12"></textarea>
                    </div>
                    <div className="col-12">
                        <input className="btn botones colorW" type="submit" value="Send"/>
                    </div>
                </form>
            </main>
        </div>
        
    )
}

//pasamos la prop "hoja" al componente Navegation