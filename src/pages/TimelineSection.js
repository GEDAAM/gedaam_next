import style from './TimelineSection.styles';

export default function TimelineSection({ timelineEvents }) {
  return (
    <section className="timeline">
      <div className="wrapper">
        <div className={` wrapper`}>
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
                />
              </div>
              <div className="balloon timeline-aside" key={`balloon-${id}`}>
                <h4>{event.balloonTitle}</h4>
                <p>{event.balloonContent}</p>
              </div>
              <span className="date timeline-aside">
                <p>{event.date}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{style}</style>
    </section>
  );
}
