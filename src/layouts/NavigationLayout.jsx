import { NavLink } from "react-router-dom";

const NavigationLayout = () => {
  return (
    <section className="navigation" id="navigation">
            <nav className="section-container">
                <NavLink to='/' className='logo' end>kafa<span className="logo-dot">.</span><span className="logo-tech">tech</span></NavLink>
        
                <div className="nav-menu--links">
                    <NavLink to='/' className="nav-menu--link" end>Home</NavLink>
                    <NavLink to='/about-me' className="nav-menu--link" end>About Me</NavLink>
                    <NavLink to='/stacks' className="nav-menu--link" end>Stacks</NavLink>
                    <NavLink to='/portfolio' className="nav-menu--link" end>Portfolio</NavLink>
                    <NavLink to='/testimonials' className="nav-menu--link" end>Testimonials</NavLink>
                    <NavLink to='/contact-me' className="nav-menu--link" end>Contact Me</NavLink>
                </div>
            </nav>
    </section>
  )
}

export default NavigationLayout;