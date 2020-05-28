import React from 'react';

export default function PageChange(props) {
  return (
    <>
      <div>
        <div className="wrapperDiv">
          <div className="iconWrapper">{/* <CircularProgress className='progress' /> */}</div>
          <h4 className="title">Loading page contents for: {props.path}</h4>
        </div>
      </div>
      <style jsx>{`
        progress {
          color: blue;
          width: 6rem !important;
          height: 6rem !important;
        }

        wrapperDiv {
          margin: 100px auto;
          padding: 0px;
          max-width: 360px;
          text-align: center;
          position: relative;
          z-index: 9999;
          top: 0;
        }

        iconWrapper {
          display: block;
        }

        title {
        }
      `}</style>
    </>
  );
}
