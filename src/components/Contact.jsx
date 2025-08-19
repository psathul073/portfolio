import { useState } from 'react';
import { Link } from 'react-router';
import Icons from './Icons';
import { SendMail } from '../API/sendMail';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/_contact.scss';

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isDisable, setIsDisable] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (message.length <= 500) {
            setIsDisable(true);

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);

            const response = await SendMail(formData);

            setMessage("");
            setName("");
            setEmail("");

            if (response.success) {
                setIsDone(true);
                setIsDisable(false);
            }
        }

    };

    useEffect(() => {
        gsap.from(".contact-content", {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    }, []);

    return (

        <main>
            <section id='contact'>

                <div className='contact-content'>
                    <h2>Contact me<span>.</span></h2>
                    <p>I’m always looking to grow, learn, and connect with others in tech. Got feedback, a tip, or an opportunity? I’d love to hear from you.</p>

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div className='name-email'>

                            <div className='name-container'>
                                <label htmlFor="name">Name<span>*</span></label>
                                <input id="name" placeholder="Your Name" onChange={e => setName(e.target.value)} value={name} required />
                            </div>

                            <div className='email-container'>
                                <label htmlFor="email">Email<span>*</span></label>
                                <input id="email" placeholder="your@mail.com" type="email" required onChange={e => setEmail(e.target.value)} value={email} />
                            </div>

                        </div>

                        <div className='msg-container' >
                            <label htmlFor="message">Message<span>*</span></label>
                            <textarea id="message" style={{ borderColor: message.length > 500 && '#dc2626' }} placeholder="Your Message" onChange={e => setMessage(e.target.value)} value={message} required />
                            <p className='charLength' style={{ color: message.length > 500 && '#dc2626' }}>{message.length}/500 characters</p>
                        </div>
                        <button type='submit' className="sub-btn" disabled={isDisable}><Icons name={isDone ? 'done' : isDisable ? 'loading' : 'send'} className={'icon'} />Send</button>
                    </form>

                    <p>Or get in touch with me:</p>
                    <ul style={{ willChange: 'transform' }}>
                        <li><Link to={'mailto:psathul073@gmail.com'}><Icons name={'gmail'} />Email <Icons name={'arrowRight'} className={'icon'} /> </Link></li>
                        <li><Link to={'https://www.instagram.com/d9.coder/'}><Icons name={'ig_c'} />Instagram <Icons name={'arrowRight'} className={'icon'} /> </Link></li>
                        <li><Link to={'https://www.facebook.com/people/D9-Coder/61572788624684/'}><Icons name={'FB'} />Facebook <Icons name={'arrowRight'} className={'icon'} /> </Link></li>
                        <li><Link to={'https://www.linkedin.com/in/athul-fullstack'}><Icons name={'linkedin_c'} />Linkedin <Icons name={'arrowRight'} className={'icon'} /> </Link></li>
                    </ul>

                </div>

            </section>
        </main>

    )
};

export default Contact