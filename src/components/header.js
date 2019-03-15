import React from 'react'

import UserSvg from '../assets/user.svg';
import HandTextSvg from '../assets/hand-text.svg';

import './header.scss'

const mainMenuItems = [
  {
    text: 'SÅ FUNGERAR DET',
    href: '/Home/About',
  },
  {
    text: 'SKAPA UPPDRAG',
    href: '/app',
  },
  {
    text: 'MINA UPPDRAG',
    href: '/app/mytasks',
  },
  {
    text: 'BLI RUNNER',
    href: '/Home/JoinAsrunner',
  }
]

const rightMenuItems = [
  {
    id: 'login',
    text: 'Logga in',
    href: '/app/login',
  },
]

export default class Header extends React.Component {
  constructor(...props) {
    super(...props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      prevScrollPosition: 0,
      headerExtraStyle: ''
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(ev) {
    const position = window.pageYOffset || document.documentElement.scrollTop;

    if (position <= 20) {
      this.setState({
        headerExtraStyle: 'on-top'
      })
    } else {
      if (position < this.state.prevScrollPosition) {
        this.setState({
          headerExtraStyle: 'sticky'
        })
      } else {
        this.setState({
          headerExtraStyle: 'hidden'
        })
      }
    }


    this.setState({
      prevScrollPosition: position,
    })
  }

  render() {
    return (
      <div className={`header ${this.state.headerExtraStyle}`} >
        <Logo />
        <MainMenu items={mainMenuItems} />
        <RightMenu items={rightMenuItems} />
      </div>
    )
  }
}

const Logo = (props)=> {
    let p = props
    return <a href="/" className={`logo`} {...p}>
      <HandTextSvg className={`logo__img`} />
    </a>
}

const MainMenu = ({ items }) => (
  <div className={`menu__main header-main`}>
    { items.map((it, i) => <MainMenuLink key={i} el={it} />) }
  </div>
)

const RightMenu = (props) => (
  <div className={`menu__right header-right`} >
    {props.items.map((it, i) => <RightMenuLink key={i} el={it} />) }
  </div>
)

const MainMenuLink = ({ el: it }) => {
  return (
    <Link
      className={`header-main__link ${it.className || ''}`}
      href={it.href}
    >
      {it.text}
    </Link>
  )
}

const RightMenuLink = ({ el: it }) => {
  return (
    <Link className={`header-right__link`} href={it.href}>
      <UserImg el={it} />

      <span className="item-text">
        {it.text}
      </span>
    </Link>
  )
}

const Link = ({ href, ...p }) => {
  return <a href={href} {...p}>{ p.children }</a>
}

const UserImg = ({ el }) => {
  if (el.id !== 'login') {
    return null
  }

  return <UserSvg className='login-avatar' />
}
