const CartWidget = () => {
  return (
    <div style={styles.cart}>
      🛒 <span style={styles.count}>3</span>
    </div>
  );
};

const styles = {
  cart: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "20px",
  },
  count: {
    marginLeft: "5px",
    fontWeight: "bold",
    color: "yellow",
  },
};

export default CartWidget;
