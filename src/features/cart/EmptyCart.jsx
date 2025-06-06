// import { Link } from 'react-router-dom';
import LinkButton from '../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu" className="text-sm text-blue-500 hover:text-blue-700 ">
        &larr; Back to menu
      </LinkButton>

      <p className='mt-7 font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
