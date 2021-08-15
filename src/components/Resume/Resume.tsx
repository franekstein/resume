import { FunctionComponent } from 'react';
import { Head, Note } from '..';
import Contact from '../Contact/Contact';
import Description from '../Description/Description';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionItem from '../SectionItem/SectionItem';
import styled from '@emotion/styled';
import { medias } from '../../styles/medias';

const data = {
  bio: {
    name: 'Damian Kieliszek',
    position: 'Frontend Developer',
    description: `👋 Hi! I’m Damian! 
    <br /> 
    An enthusiastic and self-motivated frontend developer from Wroclaw. I have 10 years of professional experience
    in developing web sites and web applications with various web technologies and tools.`,
    links: [
      {
        icon: 'email',
        name: 'damian.kieliszek@gmail.com',
        link: 'mailto:damian.kieliszek@gmail.com',
      },
      {
        icon: 'github',
        name: 'franekstein',
        link: 'https://github.com/franekstein',
      },
      {
        icon: 'phone',
        name: '+48 694 199 917',
        link: 'tel:+48694199917',
      },
      {
        icon: 'linkedin',
        name: 'damian-kieliszek',
        link: 'https://www.linkedin.com/in/damian-kieliszek',
      },
    ],
  },
  competences: {
    header: 'Competences',
    items: [
      {
        header: 'Technologies',
        list: [
          'JavaScript',
          'CSS, HTML5',
          'React',
          'TypeScript',
          'Apollo GraphQL',
          'CSS Modules',
          'styled-components',
          'Redux, Redux-Saga, redux-observable',
          'Next.js',
          'Webpack, Rollup',
        ],
      },
      {
        header: 'Tools',
        list: ['Heroku', 'Figma', 'Sketch', 'Invision', 'Google Analytics', 'Google Tag Manager'],
      },
      {
        header: 'Other',
        list: ['Attention to details', 'Interpersonal and communication skills', 'Team player'],
      },
      {
        header: 'Languages',
        list: ['Polish', 'English'],
      },
    ],
  },
  experience: {
    header: 'Experience',
    items: [
      {
        subheader: 'Sep. 2016 - Jul. 2021, Wrocław',
        header: 'Frontend Developer',
        headerDescription: 'Young / Skilled',
        list: [
          'creating Design System and dashboard application for internal use with React, TypeScript, CSS Modules and Storybook',
          'developing dashboard and shopping card widget for e-commerce platform with React, Typescript and GraphQL API',
          'building e-commerce sites with NextJS, GraphQL API and Contentful API',
          'creating components based on Figma, Invision and Sketch designs',
        ],
      },
      {
        subheader: 'Feb. 2016 - Jul. 2021, Wrocław',
        header: 'Frontend Developer',
        headerDescription: 'Freelance',
        list: [
          'developing hybrid mobile application with Ionic Framework (Angular 1.x)',
          'creating landing pages with Wordpress and React with various API-s',
          'developing minimal Design System for fast prototyping with React and styled-components',
        ],
      },
      {
        subheader: 'Dec. 2011 - Feb. 2016, Wrocław',
        header: 'Frontend Developer',
        headerDescription: 'Liberty Games Interactive',
        list: [
          'developing UI to browser game with Foundation Framework and jQuery and hybrid mobile application for this game with AngularJS, Ionic Framework and Java REST API',
          'developing landing page for Unity browser game with HTML5, CSS3 and vanilla JS',
        ],
      },
      {
        subheader: 'Sep. 2016 - Jul. 2021, Wrocław',
        header: 'Frontend Developer',
        headerDescription: 'Freelance',
        list: ['creating landing pages, blogs and company pages with Wordpress, Foundation Framework and jQuery'],
      },
    ],
  },
  education: {
    header: 'Education',
    items: [
      {
        subheader: 'Sept. 2010 - Jun. 2016, Wrocław',
        header: 'Bachelor of Engineering in Software Engineering',
        headerDescription: 'Wyższa Szkoła Informatyki i Zarządzania "COPERNICUS"​',
      },
    ],
  },
  note: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
};

const StyledContainer = styled.article`
  margin: 1.2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto auto;
  grid-template-areas:
    'head'
    'contact'
    'description'
    'competences'
    'experience'
    'note'
    'note';
  column-gap: 1.2rem;
  row-gap: 1.2rem;

  ${medias.s} {
    margin: 1.6rem;
    column-gap: 1.6rem;
    row-gap: 1.6rem;
  }

  ${medias.m} {
    margin: 3.2rem;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'head head'
      'contact description'
      'competences experience'
      'note note';
    column-gap: 3.2rem;
    row-gap: 3.2rem;
  }

  @media print {
    page-break-inside: avoid;
    margin: 3.2rem;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'head head'
      'contact description'
      'competences experience'
      'note note';
    column-gap: 3.2rem;
    row-gap: 3.2rem;
  }
`;

const StyledExperience = styled.section`
  grid-area: experience;

  & > * + * {
    margin-top: 1.2rem;
  }
`;

const StyledCompetences = styled.section`
  grid-area: competences;

  & > * + * {
    margin-top: 1.2rem;
  }
`;

type OwnProps = {};

type ResumeProps = OwnProps;

const Resume: FunctionComponent<ResumeProps> = () => {
  return (
    <StyledContainer>
      <header style={{ gridArea: 'head' }}>
        <Head name={data.bio.name} position={data.bio.position} />
      </header>
      <nav style={{ gridArea: 'contact' }}>
        <Contact links={data.bio.links as any} />
      </nav>
      <section style={{ gridArea: 'description' }}>
        <Description content={data.bio.description} />
      </section>
      <StyledCompetences>
        <SectionHeader content={data.competences.header} />
        {data.competences.items.map((item) => (
          <SectionItem {...item} />
        ))}
      </StyledCompetences>
      <StyledExperience style={{ gridArea: 'experience' }}>
        <SectionHeader content={data.experience.header} />
        {data.experience.items.map((item) => (
          <SectionItem listStyle="simple" {...item} />
        ))}
        <SectionHeader content={data.education.header} />
        {data.education.items.map((item) => (
          <SectionItem listStyle="simple" {...item} />
        ))}
      </StyledExperience>
      <footer style={{ gridArea: 'note' }}>
        <Note content={data.note} />
      </footer>
    </StyledContainer>
  );
};

export default Resume;
