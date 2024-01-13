import Header from "./header";

export default function Contact() {
    return (
        <>
            <div>
                <Header />
                <div className='contact d-flex'>
                    <div className='container contactCard d-flex'>
                        <section style={{backgroundColor: '#fff'}}>
                            <h5>GET IN TOUCH</h5>
                            <p>24/7 Will Answer Your Question</p>
                            <span>
                                <input type="text" placeholder="First Name" style={{marginRight: '5px'}} />
                                <input type="text" placeholder="Last Name" style={{marginLeft: '5px'}} />
                            </span>
                            <span>
                                <input type="email" placeholder="Email"/>
                            </span>
                            <span>
                                <input type="number" placeholder="Phone"/>
                            </span>
                            <span>
                                <textarea placeholder="Describe your question"></textarea>
                            </span>
                            <button type="submit">SEND</button>
                        </section>
                        <section></section>
                    </div>
                </div>
            </div>
        </>
    )
}
