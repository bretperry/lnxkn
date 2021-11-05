
import PropTypes from "prop-types";

const ItemType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  motto: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string.isRequired)

});

export default ItemType;