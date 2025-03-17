import "../css/foot.css";
function Footer({ items }) {
  if(!items.length) return <div className="container">
  <footer>
    <p>You have no item on the list yet, please do well to add some items to the list so you can start packing</p>
  </footer>
</div>
  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItem) * 100);
  return (
    <div className="container">
      <footer>
        {percentage === 100 ? "You got everything ready and ready to ✈️" : `💼 You have ${numItem} items to pack, but as of now you have packed
        ${packedItem} at a percentage of (${percentage}%)`}
        
      </footer>
    </div>
  );
}

export default Footer;
