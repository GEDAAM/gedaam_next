import PropTypes from 'prop-types';

export default function Brand(props) {
  return (
    <>
      <object type="image/svg+xml" data="/img/logo-white.svg" className="svg">
        Logo GEDAAM
      </object>
      <div className="brand">GEDAAM</div>
      <style jsx>{/* CSS */ `
        .brand {
          display: ${props.showSideText ? 'block' : 'none'};
          margin-left: 6px;
        }

        .svg {
          width: ${props.size};
        }

        .no-svg {
          width: ${props.size};
          background-image: url(/img/logo-white.png);
        }
      `}</style>
    </>
  );
}

Brand.defaultProps = {
  size: '35px'
};

Brand.propTypes = {
  showSideText: PropTypes.bool.isRequired,
  size: PropTypes.string
};
