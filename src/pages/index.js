// import Head from 'next/head';

// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from './landing';

export default function Home() {
  return (
    <Landing
      timelineEvents={[
        {
          iconFAClasses: 'fa fa-fw fa-play pointer',
          iconBgColor: '#75ce66',
          iconOffset: [0, 5],
          date: 'Janeiro de 2017',
          balloonTitle: 'NextJS Material Kit.',
          balloonContent:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt sapiente est soluta dolores voluptate reiciendis quo tempora ullam neque quasi eius odit, repellendus asperiores iusto architecto beatae placeat ab?'
        },
        {
          iconFAClasses: 'fa fa-fw fa-play pointer',
          iconBgColor: '#75ce66',
          iconOffset: [0, 5],
          date: 'Outubro de 2019',
          balloonTitle: 'NextJS Material Kit.',
          balloonContent: 'I am no Lorem'
        },
        {
          iconFAClasses: 'fa fa-fw fa-play pointer',
          iconBgColor: '#75ce66',
          iconOffset: [0, 5],
          date: 'Janeiro de 2017',
          balloonTitle: 'NextJS Material Kit.',
          balloonContent:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt sapiente est soluta dolores voluptate reiciendis quo tempora ullam neque quasi eius odit, repellendus asperiores iusto architecto beatae placeat ab?'
        },
        {
          iconFAClasses: 'fa fa-fw fa-play pointer',
          iconBgColor: '#75ce66',
          iconOffset: [0, 5],
          date: 'Outubro de 2019',
          balloonTitle: 'NextJS Material Kit.',
          balloonContent: 'I am no Lorem'
        },
        {
          iconFAClasses: 'fa fa-fw fa-play pointer',
          iconBgColor: '#75ce66',
          iconOffset: [0, 5],
          date: 'Janeiro de 2017',
          balloonTitle: 'NextJS Material Kit.',
          balloonContent:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non incidunt sapiente est soluta dolores voluptate reiciendis quo tempora ullam neque quasi eius odit, repellendus asperiores iusto architecto beatae placeat ab?'
        },
        {
          iconFAClasses: 'fa fa-fw fa-play pointer',
          iconBgColor: '#75ce66',
          iconOffset: [0, 5],
          date: 'Outubro de 2019',
          balloonTitle: 'NextJS Material Kit.',
          balloonContent: 'I am no Lorem'
        }
      ]}
    />
  );
}
