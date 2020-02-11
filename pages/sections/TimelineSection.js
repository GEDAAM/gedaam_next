import { makeStyles } from '@material-ui/core/styles';
import { infoColor } from 'assets/jss/nextjs-material-kit.js';
import styles from '../../assets/jss/pages/main';

const useStyles = makeStyles(styles);
export default function TimelineSection() {
  const classes = useStyles();
  const timelineEvents = [
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
  ];

  return (
    <section className={`${classes.main} timeline`}>
      <div className="wrapper">
        <div className={`${classes.title} wrapper`}>
          <h1 className="timeline-title">Nossa História</h1>
        </div>
        <div className="timeline timeline-wrapper">
          {timelineEvents.map((event, id) => (
            <div className="timeline-block" key={`event-${id}`}>
              <div
                className="bubble"
                key={`bubble-${id}`}
                style={{
                  background: event.iconBgColor
                }}
              >
                <i
                  className={`${event.iconFAClasses} icon`}
                  style={{
                    marginTop: `${event.iconOffset[0]}px`,
                    marginLeft: `${event.iconOffset[1]}px`
                  }}
                ></i>
              </div>
              <div
                className={`balloon balloon-${id % 2 === 1 ? 'even' : 'odd'}`}
                key={`balloon-${id}`}
              >
                <h4>{event.balloonTitle}</h4>
                <p>{event.balloonContent}</p>
              </div>
              <div className={`date date-${id % 2 === 1 ? 'even' : 'odd'}`}>{event.date}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{/* CSS */ `
        .timeline {
          padding-bottom: 0rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .wrapper {
          width: 100vw;
        }

        .timeline-title {
          width: 100%;
          box-sizing: border-box;
          padding: 60px;
          text-align: center;
          font-weight: 400;
        }

        .timeline-wrapper {
          width: 90%;
          max-width: 100vw;
          margin: 0 auto;
          position: relative;
          padding: 2em 0;
          margin-top: 2em;
          margin-bottom: 2em;
        }

        .timeline-wrapper::before {
          /* vertical line */
          content: '';
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          height: calc(90% - 30px);
          width: 4px;
          background-color: ${infoColor};
          filter: opacity(30%) grayscale(20%);
        }

        .timeline-block {
          position: relative;
          top: 0;
          margin: 2em 2em;
          display: grid;
          grid-template: auto / 1fr 80px 1fr;
          grid-template-areas: 'left bubble right';
          grid-gap: 10px 10px;
          align-items: start;
        }

        .timeline-block:first-child {
          margin-top: 0;
        }

        .timeline-block:last-child {
          margin-bottom: 0;
        }

        .bubble {
          grid-area: bubble;
          box-sizing: border-box;
          justify-self: center;
          width: 60px;
          height: 60px;
          z-index: 5;
          border-radius: 50%;
          box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08),
            0 3px 0 4px rgba(0, 0, 0, 0.05);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .bubble > .icon {
          box-sizing: inherit;
          font-size: 25px !important;
        }

        .balloon > h4 {
          font-weight: 500;
        }

        .balloon {
          background: #fff;
          margin-top: -1em;
          width: 90%;
          max-height: 40vh;
          border-radius: 6px;
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
            0 1px 10px 0 rgba(0, 0, 0, 0.12);
          display: flex;
          flex-direction: column;
          overflow-y: hidden;
          padding: 1.6em;
          z-index: 6;
        }

        .balloon.balloon-odd {
          grid-area: left;
          justify-self: end;
        }

        .balloon.balloon-even {
          grid-area: right;
          justify-self: start;
        }

        .date {
          margin: 0;
          padding: 0.8em 0;
          opacity: 0.7;
        }

        .date.date-even {
          grid-area: left;
          justify-self: end;
        }

        .date.date-odd {
          grid-area: right;
          justify-self: start;
        }

        .cssanimations .balloon.is-hidden {
          visibility: hidden;
        }

        .cssanimations .balloon.bounce-in {
          visibility: visible;
          animation: cd-bounce-2 0.6s;
        }

        /* inverse bounce effect on even content blocks */
        .cssanimations .wrapper:nth-child(even) .balloon.bounce-in {
          animation: cd-bounce-2-inverse 0.6s;
        }

        @media screen and (max-width: 768px) {
          .timeline-wrapper::before {
            left: 0;
            margin-left: 1em;
          }

          .bubble {
            width: 40px;
            height: 40px;
          }

          .bubble > .icon {
            font-size: 15px !important;
          }

          .timeline-block {
            position: relative;
            top: 0;
            margin: 1em 1em;
            display: grid;
            grid-template: auto / 60px 1fr;
            grid-template-areas: 'bubble right';
            ${'' /* grid-gap: 10px 10px; */}
            align-items: start;
          }

          .date.date-even {
            grid-area: right;
            justify-self: start;
          }
        }

        @keyframes cd-bounce-1 {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }

          60% {
            opacity: 1;
            transform: scale(1.2);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes cd-bounce-2 {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }

          60% {
            opacity: 1;
            transform: translateX(20px);
          }

          100% {
            transform: translateX(0);
          }
        }

        @keyframes cd-bounce-2-inverse {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }

          60% {
            opacity: 1;
            transform: translateX(-20px);
          }

          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
