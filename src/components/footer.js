import React from 'react';

import Home from '../assets/home.svg';
import Mail from '../assets/mail.svg';
import Phone from '../assets/phone.svg';

import './footer.scss';

const footerLinks2 = [
  { href: 'https://omoss.taskrunner.se/', text: 'Om oss' },
  { href: 'https://help.taskrunner.se/', text: 'Vanliga frågor' },
  { href: '/Home/About', text: 'Så fungerar det' },
  { href: '/conditions', text: 'Användarvillkor' },
  { href: '/conditions/Privacy', text: 'Personuppgiftspolicy' },
  { href: 'https://taskrunnersweden.wordpress.com/', text: 'Blogg' },
  { href: 'https://press.taskrunner.se', text: 'Press' },
  { href: 'http://taskrunnerab.teamtailor.com/', text: 'Karriär' },
  { href: '#cookies', text: 'Cookies' }
];

const footerLinks3 = [
  {
    href: '/app/login',
    text: 'Logga in '
  },
  {
    href: '/app',
    text: 'Skapa uppdrag '
  },
  {
    href: '/task',
    text: 'Aktuella uppdrag '
  },
  {
    href: '/About/PopularTasks',
    text: 'Våra kategorier'
  },
  {
    href: '/Home/JoinAsRunner?login',
    text: 'Logga in som Runner'
  },
  {
    href: '/Agreement/Insurance',
    text: 'Vår försäkring'
  }
];

const footerLinks4 = [
  {
    href: '/app/c/montera-moebler/',
    text: 'Montera Möbler'
  },
  {
    href: '/app/c/transport-&-flytt/',
    text: 'Transport & flytt'
  },
  {
    href: '/app/c/handyman/',
    text: 'Handyman'
  },
  {
    href: '/app/c/traedgardshjaelp/',
    text: 'Trädgårdshjälp'
  },
  {
    href: '/app/c/nagot-annat?/',
    text: 'Något annat?'
  }
];

const firstColumn = [
  {
    icon: Home,
    title: 'Fleminggatan 20'
  },
  {
    title: '112 26 Stockholm'
  },
  {
    icon: Phone,
    title: '08-408 092 22'
  },
  {
    icon: Mail,
    title: 'support@taskrunner.se'
  },
  {
    title: 'Org.Nr: 556933-7016'
  },
]

const FooterSection = ({ children }) => <div className={`footer-section`}>{children}</div>
const FooterHeader = ({ children }) => <div className={`footer-header`}>{children}</div>
const Link = ({ href, children, onClick }) => <a href={href} onClick={() => onClick({href})} className={`link`}>{children}</a>;

const ModalContainer = ({ children, className }) => <div className={`modal-window ${className}`}>{children}</div>;
const ModalContent = ({ children }) => <div className={`modal-window-content`}>{children}</div>;
const ModalHeader = ({ onClick }) => <div onClick={onClick} className={`modal-window-header__close`}>✕</div>
const ModalHeading = ({ children }) => <h2 className={`modal-window-content__greyed-text`}>{children}</h2>;
const ModalP = ({ children }) => <p className={`modal-window-content__greyed-text`}>{children}</p>;

export default class Footer extends React.Component {
  constructor(...props) {
    super(...props)
    this.state = {
      isCookiesShowed: false,
    }
  }

  toggleModal(state) {
    this.setState({
      isCookiesShowed: state
    })
  }

  showModal({href: targetHref}) {
    if (targetHref !== '#cookies') return

    this.toggleModal(true)
  }

  hideModal() {
    this.toggleModal(false)
  }

  render() {
    return (
      <div className={`footer`}>
        <FooterSection>
          <FooterHeader>TaskRunner AB</FooterHeader>
          {
            firstColumn.map((el, i) => {
              const IconElement = el.icon || (() => ({}))
              return (
                <div className={el.icon && `footer-content__with-icon`} key={i}>
                  {el.icon && <IconElement className={`icon`} />}

                  {el.title}
                </div>
              )
            })
          }
        </FooterSection>

        <FooterSection>
          <FooterHeader>Företag</FooterHeader>

          {
            footerLinks2.map(a => (
              <Link key={a.text} onClick={(ev) => this.showModal(ev)} href={a.href}>
                {a.text}
              </Link>
            ))
          }
        </FooterSection>

        <FooterSection>
          <FooterHeader>Användare</FooterHeader>

          {footerLinks3.map(a => (
            <Link key={a.text} href={a.href}>
              {a.text}
            </Link>
          ))}
        </FooterSection>

        <FooterSection>
          <FooterHeader>Kategorier</FooterHeader>

          {footerLinks4.map(a => (
            <Link key={a.text} href={a.href}>
              {a.text}
            </Link>
          ))}
        </FooterSection>

        <ModalContainer className={this.state.isCookiesShowed && `show-modal`}>
          <ModalContent data-info-box-content>
            <ModalHeader onClick={() => this.hideModal()}></ModalHeader>
            <ModalHeading>Cookies</ModalHeading>
            <ModalP>Den här webbplatsen använder cookies. En cookie är en liten textfil som lagras på besökarens dator (eller annan enhet) och som används för att förbättra webbplatsens funktionalitet.</ModalP>
            <ModalHeading>Användande av cookies</ModalHeading>
            <ModalP>Enligt lagen (2003:389) om elektronisk kommunikation ska alla som besöker en webbplats med cookies få information om webbplatsen innehåller cookies eller ej och i så fall ändamålet med användningen av cookies. Webbplatsen taskrunner.se använder textfiler som sparas i er dator för att kunna analysera hur användare använder webbsidan. Informationen som genereras av sådan cookie genom er användning av webbsidan (inklusive er IP-adress) går aldrig att koppla till er personliga information.</ModalP>
          </ModalContent>
        </ModalContainer>
      </div>
    );
  }
}
