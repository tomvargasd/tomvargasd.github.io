import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { navLinks, siteData } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';
import { IconLogo } from '@components/icons';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--navy-shadow);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--navy-shadow);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${props =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--blue);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--blue);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-xs);

      a {
        padding: 10px;
        &:before {
          margin-right: 5px;
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    padding-inline: 30px;
    border-radius: 30px;
    border-width: 2px;
    font-size: var(--fz-xs);
  }

  .themechanger {
    font-size: var(--fz-xl);
    margin-left: 15px;
    cursor: pointer;
  }
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [theme, setTheme] = useState(null);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || '0';
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const isLight = document.documentElement.classList.contains('light-theme');
      if (isLight) {
        document.documentElement.classList.remove('light-theme');
        localStorage.setItem('theme', '0');
        setTheme('0');
      } else {
        document.documentElement.classList.add('light-theme');
        localStorage.setItem('theme', '1');
        setTheme('1');
      }
    }
  };

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const Logo = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <IconLogo />
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a className="resume-button" href={siteData.nav.resumeLink} target="_blank" rel="noopener noreferrer">
      {siteData.nav.resumeText}
    </a>
  );

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}
            <StyledLinks>
              <ol>
                {navLinks.map(({ url, name }, i) => (
                  <li key={i}>
                    <Link to={url}>{name}</Link>
                  </li>
                ))}
              </ol>
              <div>{ResumeLink}</div>
              {theme !== null && (
                <div onClick={toggleTheme} className="themechanger">
                  {theme === '0' ? '🌙' : '☀️'}
                </div>
              )}
            </StyledLinks>
            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>
                    {Logo}
                    <StyledLinks>
                      <ol>
                        {navLinks.map(({ url, name }, i) => (
                          <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                            <li style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                              <Link to={url}>{name}</Link>
                            </li>
                          </CSSTransition>
                        ))}
                      </ol>
                      <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                        {ResumeLink}
                      </div>
                      {theme !== null && (
                        <div
                          onClick={toggleTheme}
                          className="themechanger"
                          style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}>
                          {theme === '0' ? '🌙' : '☀️'}
                        </div>
                      )}
                    </StyledLinks>
                  </>
                </CSSTransition>
              )}
            </TransitionGroup>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
