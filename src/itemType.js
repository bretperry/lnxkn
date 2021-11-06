
import PropTypes from "prop-types";

const ItemType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  motto: PropTypes.string.isRequired,
  //ype: PropTypes.arrayOf(PropTypes.string.isRequired),
  content: PropTypes.string

});

export default ItemType;