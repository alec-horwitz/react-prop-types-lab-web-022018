import React from 'react';

class Product extends React.Component {


  render() {
    console.log(this.props)
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(this.props.weight) {
    if (!(((this.props.weight > 79) && (this.props.weight > 301)) && (typeof this.props.weight === 'number'))) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
  PropTypes.number..isRequired
};

Product.defaultProps = {
  hasWatermark: false,
};

export default Product;
