import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig, siteData } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

function calcAge(birthDateStr) {
  const today = new Date();
  const birth = new Date(birthDateStr);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 4px;
        left: 4px;
        z-index: 10;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      
      
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 1;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 3px solid var(--green);
      top: 0px;
      left: 0px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { about } = siteData;
  const edad = calcAge(about.birthDate);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          name
          childImageSharp {
            gatsbyImageData(width: 500, quality: 95, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  const profileImageName = about.profileImage.replace(/\.[^/.]+$/, '');
  const profileNode = data.allFile.nodes.find(n => n.name === profileImageName);
  const profileImage = profileNode ? getImage(profileNode) : null;

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const p1Html = about.paragraph1.replace('{age}', edad);
  const p2Html = about.paragraph2.replace(
    '{blogLink}',
    `<a href="${about.blogLinkUrl}">${about.blogLinkText}</a>`,
  );

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">{about.sectionTitle}</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p dangerouslySetInnerHTML={{ __html: p1Html }} />
            <p dangerouslySetInnerHTML={{ __html: p2Html }} />
            <p>{about.skillsLabel}</p>
          </div>

          <ul className="skills-list">
            {about.skills && about.skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            {profileImage ? (
              <GatsbyImage
                className="img"
                image={profileImage}
                alt="Headshot"
              />
            ) : (
              <img className="img" src={`/${about.profileImage}`} alt="Headshot" />
            )}
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
